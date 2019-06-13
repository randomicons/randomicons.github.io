//@flow
import React, {Component} from 'react'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import TransitionSection from "./TransitionSection"
import styles from "./App.module.sass"
import dodgerush from "../images/dodgerush.png"
import sometodo from "../images/sometodo.png"
import walmart from "../images/walmart.png"


library.add(faChevronDown)


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {page: 0}
  }

  checkPage(pageNum) {
    return this.state.page === pageNum
  }

  incPage = () => {
    this.setState({page: this.state.page + 1})
  }

  render() {
    let zIndex = 3
    let pageNum = 0
    return (
      <main>
        <TransitionSection background={"#f9f9f9"} doInitAnim zIndex={zIndex--} show={this.checkPage(pageNum++)}
                           arrowAction={this.incPage}>
          <div style={{background: "#f9f9f9"}}>
            <p>A bird in the hand is worth 2 in the bush</p>
            <h1>Sriram Bhat</h1>
          </div>
          <div className={styles.line}></div>
        </TransitionSection>
        <TransitionSection background={"#f9f9f9"} doInitAnim zIndex={zIndex--} show={this.checkPage(pageNum++)}
                           arrowAction={this.incPage}>
          <div style={{background: "#f9f9f9", width: "50vw"}}>
            <img src={dodgerush} style={{opacity: 1, width: "100%"}}/>
            <div><p>I made this game. Called it (for the SEO mainly) <em>Dodgerush : Puzzle Tower Defense.</em></p>
            </div>
          </div>
        </TransitionSection>
        <TransitionSection background={"#f9f9f9"} zIndex={zIndex--} show={this.checkPage(pageNum++)}
                           arrowAction={this.incPage}>
          <div style={{background: "#f9f9f9", width: "50vw"}}>
            <img src={sometodo} style={{opacity: 1, height: "70vh"}}/>
            <div><p>All the todo apps had too little of what I wanted and too much of what I didn't want. So I made my
              own.</p>
            </div>
          </div>
        </TransitionSection>
        <TransitionSection background={"#f9f9f9"} zIndex={zIndex++} show={this.checkPage(pageNum++)}
                           arrowAction={this.incPage}>
          <div style={{background: "#f9f9f9", width: "50vw"}}>
            <img src={walmart} style={{opacity: 1, height: "70vh"}}/>
            <div><p>All the todo apps had too little of what I wanted and too much of what I didn't want. So I made my
              own.</p>
            </div>
          </div>
        </TransitionSection>
        {/*{*/}
        {/*  <Transition*/}
        {/*    show={this.checkPage(1)}*/}
        {/*    appear mountOnEnter unmountOnExit*/}
        {/*    onEnter={node => TweenMax.set(node, {y: "-100vh"})}*/}
        {/*    onEntered={node => TweenMax.set(node, {y: "0vh"})}*/}
        {/*  >*/}
        {/*    <section style={{background: "#f00", height: "100vh"}}><p>Some nonsense</p></section>*/}
        {/*  </Transition>*/}
        {/*}*/}
      </main>
    )
  }
}

export default App
