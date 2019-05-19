//@flow
import React, {Component} from 'react'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {TweenMax} from "gsap"
import {Transition} from "react-transition-group"
import TransitionSection from "./TransitionSection"
import styles from './App.module.sass'

library.add(faChevronDown)


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {page: 0}
  }

  checkPage(pageNum) {
    return this.state.page === pageNum
  }

  render() {
    return (
      <main>
        <div className={styles.section_container} style={{zIndex: 2}}>
          <TransitionSection background={"#ffcc60"} show={this.checkPage(0)} arrowAction={
            () => this.setState({page: this.state.page + 1})}
          >
            <div style={{background: "white"}}>
              <p>A bird in the hand is worth 2 in the bush</p>
              <h1>Sriram Bhat</h1>
              <span>Web developer. </span>
              <span>Data Something.</span>
              <span>Confused.</span>
            </div>
          </TransitionSection>
        </div>
        <div className={styles.section_container}>
          <section>
            <TransitionSection background={"#ffd5ff"} show={this.checkPage(1)} arrowAction={
              () => this.setState({page: this.state.page + 1})}
            >
              <div style={{background: "white"}}>
                <p>A bird in the hand is worth 2 in the bush</p>
                <h1>Sriram Bhat</h1>
                <span>Web developer. </span>
                <span>Data Something.</span>
                <span>Confused.</span>
              </div>
            </TransitionSection>
          </section>
        </div>
        {/*{this.checkPage(1) &&*/}
        {/*<Transition*/}
        {/*  appear*/}
        {/*  // onEnter={node => TweenMax.set(node, {y: -1000})}*/}
        {/*  addEndListener={(node, done) => {*/}
        {/*    const contentDiv = node.childNodes[0]*/}
        {/*    const speed = .8*/}
        {/*    if (this.checkPage(1)) {*/}
        {/*      // TweenMax.to(node, speed, {y: 0, onComplete: done,})*/}
        {/*    } else {*/}
        {/*      TweenMax.set(node, {y: "-100%"})*/}
        {/*      TweenMax.to(node, speed, {y: "-200vh", ease: Expo.easeInOut, onComplete: done,})*/}
        {/*      TweenMax.to(contentDiv, speed, {y: "100vh", ease: Expo.easeInOut})*/}
        {/*      // TweenMax.set(node, {y: "100vh"})*/}
        {/*      // done()*/}
        {/*    }*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <section className={styles.content}>*/}
        {/*    <div className={styles.down}>*/}
        {/*      <span><FontAwesomeIcon onClick={() => this.setState({page: this.state.page + 1})}*/}
        {/*                             icon={"chevron-down"}/></span>*/}
        {/*    </div>*/}
        {/*  </section>*/}
        {/*</Transition>*/}
        {/*}*/}
        {
          <Transition
            show={this.checkPage(1)}
            appear mountOnEnter unmountOnExit
            onEnter={node => TweenMax.set(node, {y: "-100vh"})}
            onEntered={node => TweenMax.set(node, {y: "0vh"})}
          >
            <section style={{background: "#f00", height: "100vh"}}><p>Some nonsense</p></section>
          </Transition>
        }
      </main>
    )
  }
}

export default App
