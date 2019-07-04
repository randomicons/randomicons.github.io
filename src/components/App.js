//@flow
import React, {Component} from 'react'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import TransitionSection from "./TransitionSection"
import styles from "./App.module.sass"
import dodgerush from "../images/dodgerush2.png"
import sometodo from "../images/sometodo.png"
import walmart from "../images/walmart.png"
import worktime from "../images/worktime-pred.png"
import Nav from "./Nav"
import Switch from "react-switch"


library.add(faChevronDown, faChevronUp)

export const numPages = 5

const info = [
  {
    title: "Dodgerush",
    img: dodgerush,
    p: <p>I made this game. Called it (for the SEO mainly) <em>Dodgerush : Puzzle Tower Defense.</em></p>,
    link: "https://play.google.com/store/apps/details?id=com.dodge.rush"
  },
  {
    title: "Some-Todo",
    img: sometodo,
    p: <p>All the todo apps had too little of what I wanted and too much of what I didn't want. So I made my
      own.</p>,
    link: "https://sometodo.herokuapp.com/",
    github: "https://github.com/randomicons/something-todo"
  },
  {
    title: "Walmart Energy Forecasting",
    img: walmart,
    p: <p>Forecasted energy usage of Walmart Stores and created a UI to display and interact with the
      models.</p>,
  },
  {
    title: "Work Time Predictions",
    img: worktime,
    p: <p>I predicted my future productivity using my past pomodoro logs and machine learning.</p>,
    github: "https://github.com/randomicons/worktime-prediction"
  },
  {
    title: "This website o_o!",
    img: null,
    p: <p>What a great website.</p>,
    github: "https://github.com/randomicons/randomicons.github.io"
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {page: 0, noAnim: false}
  }

  checkPage(pageNum) {
    return this.state.page === pageNum
  }

  changePage = (change) => {
    return () => this.setState({page: this.state.page + change, dir: Math.sign(change)})
  }

  toHome = () => {
    this.setState({page: 0, dir: -1})
    if (this.state.noAnim)
      document.getElementById('home').scrollIntoView({behavior: "smooth"})
  }
  toContact = () => {
    this.setState({page: numPages, dir: 1})
    if (this.state.noAnim)
      document.getElementById('contact').scrollIntoView({behavior: "smooth"})
  }
  toResume = () => {
    window.location = '/resume_fs.pdf'
  }

  render() {
    const dir = this.state.dir
    let infoNoAnim = info.map((content) =>
      <section>
        <h2>{content.title}</h2>
        <img src={content.img} style={{width: "100%"}}/>
        {content.p}
        <p>
          {content.link && <a href={content.link}>View</a>}
          {content.github && <a href={content.github}>Github</a>}
        </p>
      </section>)
    const infoAnim = infoNoAnim.map((content, i) =>
      <TransitionSection background={"#f9f9f9"} dir={dir} doInitAnim zIndex={numPages - i - 1}
                         show={this.checkPage(i + 1)}
                         arrowAction={this.changePage}>
        {content}
      </TransitionSection>)
    infoNoAnim = infoNoAnim.map((content) => <div className={styles.container}>{content}</div>)
    let home = [
      <section style={{background: "#f9f9f9"}}>
        {/*<p>A bird in the hand is worth 2 in the bush</p>*/}
        <h1>Sriram Bhat</h1>
        <p style={{textAlign: "center"}}>I'm a developer. I know data science. What more could you ask for.<br/>Look at
          some of my projects.</p>
      </section>,
      <div className={styles.line}></div>
    ]
    const homeAnim =
      <TransitionSection background={"#f9f9f9"} dir={dir} doInitAnim zIndex={numPages}
                         show={this.checkPage(0)}
                         arrowAction={this.changePage}>
        {home}
      </TransitionSection>
    home = <div id="home" className={styles.container}>{home}</div>
    let contact = [
      <div className={styles.line}></div>,
      <section>
        <h2>Contact</h2>
        <p>email: srirambhat7@gmail.com <br/>phone: 469-579-8177</p>
        <p><a href={"https://github.com/randomicons"}>My Github</a></p>
      </section>
    ]
    const contactAnim =
      <TransitionSection background={"#f9f9f9"} dir={dir} doInitAnim zIndex={0}
                         show={this.checkPage(numPages)}
                         arrowAction={this.changePage}>
        {contact}
      </TransitionSection>
    contact = <div id="contact" className={styles.container}>{contact}</div>
    let displayedContent
    if (this.state.noAnim) {
      displayedContent = [home, infoNoAnim, contact]
    } else {
      displayedContent = [homeAnim, infoAnim, contactAnim]
    }

    return (
      <main>
        <Nav links={[
          {name: "Home", action: this.toHome},
          {name: "Contact", action: this.toContact},
          {name: "Resume", action: this.toResume},
        ]}/>
        <label className={styles.animToggle}>
          <span>Animation</span>
          <Switch onChange={(checked) => this.setState({noAnim: !checked})} className={styles.toggle}
                  checked={!this.state.noAnim}/>
        </label>
        {displayedContent}
      </main>
    )
  }
}

export default App
