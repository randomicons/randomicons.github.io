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
    this.state = {page: 1}
  }

  checkPage(pageNum) {
    return this.state.page === pageNum
  }

  changePage = (change) => {
    return () => this.setState({page: this.state.page + change})
  }

  toHome = () => this.setState({page: 1})
  toContact = () => this.setState({page: numPages + 1})
  
  render() {
    let zIndex = numPages
    let pageNum = 1
    return (
      <main>
        <Nav links={[
          {name: "Home", action: this.toHome},
          {name: "Contact", action: this.toContact},
          {name: "Resume", action: this.toHome},
        ]}/>
        <TransitionSection background={"#f9f9f9"} doInitAnim zIndex={zIndex--} show={this.checkPage(pageNum++)}
                           arrowAction={this.changePage}>
          <div style={{background: "#f9f9f9"}}>
            <p>A bird in the hand is worth 2 in the bush</p>
            <h1>Sriram Bhat</h1>
          </div>
          <div className={styles.line}></div>
        </TransitionSection>
        <TransitionSection background={"#f9f9f9"} doInitAnim zIndex={zIndex--} show={this.checkPage(pageNum++)}
                           arrowAction={this.changePage}>
          <div style={{background: "#f9f9f9", width: "50vw"}}>
            <h3>Dodgerush</h3>
            <img src={dodgerush} style={{opacity: 1, width: "100%"}}/>
            <div><p>I made this game. Called it (for the SEO mainly) <em>Dodgerush : Puzzle Tower Defense.</em></p>
            </div>
          </div>
        </TransitionSection>
        <TransitionSection background={"#f9f9f9"} doInitAnim zIndex={zIndex--} show={this.checkPage(pageNum++)}
                           arrowAction={this.changePage}>
          <div style={{background: "#f9f9f9", width: "50vw"}}>
            <h3>Some-Todo</h3>
            <img src={sometodo} style={{opacity: 1, width: "100%"}}/>
            <div><p>All the todo apps had too little of what I wanted and too much of what I didn't want. So I made my
              own.</p>
            </div>
          </div>
        </TransitionSection>
        <TransitionSection background={"#f9f9f9"} doInitAnim zIndex={zIndex--} show={this.checkPage(pageNum++)}
                           arrowAction={this.changePage}>
          <div style={{background: "#f9f9f9", width: "50vw"}}>
            <h3>Walmart Energy Forecasting</h3>
            <img src={walmart} style={{opacity: 1, height: "70vh"}}/>
            <div><p>Forecasted energy usage of Walmart Stores and created a UI to display and interact with the
              models.</p>
            </div>
          </div>
        </TransitionSection>
        <TransitionSection background={"#f9f9f9"} doInitAnim zIndex={zIndex--} show={this.checkPage(pageNum++)}
                           arrowAction={this.changePage}>
          <div style={{background: "#f9f9f9", width: "50vw"}}>
            <h3>This website o_o!</h3>
            <p>What a great website.</p>
          </div>
        </TransitionSection>
        <TransitionSection background={"#f9f9f9"} doInitAnim zIndex={zIndex--} show={this.checkPage(pageNum++)}
                           arrowAction={this.changePage}>
          <div style={{background: "#f9f9f9", width: "50vw"}}>
            <h3>Contact</h3>
            <p>email: srirambhat7@gmail.com</p>
            <p>phone: 469-479-8177</p>
          </div>
        </TransitionSection>
      </main>
    )
  }
}

export default App
