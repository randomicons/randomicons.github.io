//@flow
import React, {Component} from 'react'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import TransitionSection from "./TransitionSection"

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
        <TransitionSection background={"#d5ffff"} zIndex={2} show={this.checkPage(0)} arrowAction={
          () => this.setState({page: this.state.page + 1})}
        >
          <div style={{background: "white"}}>
            <p>A bird in the hand is worth 2 in the bush</p>
            <h1>Sriram Bhat</h1>
          </div>
        </TransitionSection>
        <TransitionSection background={"#ffd5ff"} zIndex={1} show={this.checkPage(1)} arrowAction={
          () => this.setState({page: this.state.page + 1})}>
          <div style={{background: "white"}}>
            <p>A bird in the hand is worth 2 in the bush</p>
            <h1>Sriram Bhat</h1>
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
