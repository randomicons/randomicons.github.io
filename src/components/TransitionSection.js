import React, {Component} from "react"
import {Transition} from "react-transition-group"
import {Expo, TweenMax} from "gsap"
import styles from "./TransitionSection.module.sass"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import PropTypes from 'prop-types'

const transSpeed = 1
export default class TransitionSection extends Component {

  render() {
    return (
      <Transition
        in={this.props.show}
        appear unmountOnExit
        addEndListener={(node, done) => {
          const contentDiv = node.childNodes[0]
          if (this.props.show) {
          } else {
            // TweenMax.set(node, {y: "-100%"})
            TweenMax.to(node, transSpeed, {y: "-100%", ease: Expo.easeInOut, onComplete: done,})
            TweenMax.to(contentDiv, transSpeed, {y: "100vh", ease: Expo.easeInOut})
          }
        }}
      >
        <section className={styles.content} style={{background: this.props.background}}>
          {this.props.children}
          <div className={styles.down}>
            <span><FontAwesomeIcon onClick={this.props.arrowAction} icon={"chevron-down"}/></span>
          </div>
        </section>
      </Transition>
    )
  }
}

TransitionSection.propTypes = {
  show: PropTypes.bool.isRequired,
  background: PropTypes.string.isRequired,
  arrowAction: PropTypes.func.isRequired
}
