//@flow
import React, {Component} from 'react'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import TransitionSection from "./TransitionSection"
import styles from "./App.module.sass"
import dodgerush from "../images/dodgerush.png"
import sometodo from "../images/sometodo.png"
import walmart from "../images/walmart.png"
import Nav from "./Nav"


library.add(faChevronDown, faChevronUp)

export const numPages = 5

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {page: 0}
  }

  checkPage(pageNum) {
    return this.state.page === pageNum
  }

  changePage = (change) => {
    return () => this.setState({page: this.state.page + change, dir: Math.sign(change)})
  }

  toHome = () => this.setState({page: 0})
  toContact = () => this.setState({page: numPages})

  render() {
    let zIndex = numPages
    const dir = this.state.dir
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
        title: "This website o_o!",
        img: null,
        p: <p>What a great website.</p>,
        github: "https://github.com/randomicons/randomicons.github.io"
      }
    ].map((content, i) =>
      <TransitionSection background={"#f9f9f9"} dir={dir} doInitAnim zIndex={numPages - i - 1}
                         show={this.checkPage(i + 1)}
                         arrowAction={this.changePage}>
        <section style={{background: content.background != null ? content.background : "#f9f9f9"}}>
          <h2>{content.title}</h2>
          <img src={content.img} style={{width: "100%"}}/>
          {content.p}
          <p>
            {content.link && <a href={content.link}>View</a>}
            {content.github && <a href={content.github}>Github</a>}
          </p>
        </section>
      </TransitionSection>)
    return (
      <main>
        <Nav links={[
          {name: "Home", action: this.toHome},
          {name: "Contact", action: this.toContact},
          {name: "Resume", action: this.toHome},
        ]}/>
        <TransitionSection background={"#f9f9f9"} dir={dir} doInitAnim zIndex={numPages}
                           show={this.checkPage(0)}
                           arrowAction={this.changePage}>
          <div style={{background: "#f9f9f9"}}>
            <p>A bird in the hand is worth 2 in the bush</p>
            <h1>Sriram Bhat</h1>
          </div>
          <div className={styles.line}></div>
        </TransitionSection>
        {info}
        <TransitionSection background={"#f9f9f9"} dir={dir} doInitAnim zIndex={0}
                           show={this.checkPage(numPages)}
                           arrowAction={this.changePage}>
          <div style={{background: "#f9f9f9"}}>
            <h3>Contact</h3>
            <p>email: srirambhat7@gmail.com <br/>phone: 469-479-8177</p>
            <p><a href={"https://github.com/randomicons"}>My Github</a></p>
          </div>
        </TransitionSection>
      </main>
    )
  }
}

export default App
