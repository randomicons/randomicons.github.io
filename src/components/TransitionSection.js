import React, {Component} from "react"
import {Transition} from "react-transition-group"
import {Expo, TimelineLite, TweenMax} from "gsap"
import styles from "./TransitionSection.module.sass"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"
import {numPages} from './App'

const transSpeed = .7
const rotAngle = 45
export default class TransitionSection extends Component {

  render() {
    const dir = this.props.dir
    return (
      <Transition
        in={this.props.show}
        appear mountOnEnter unmountOnExit
        addEndListener={(node, done) => {
          const rotation_div = node.childNodes[0]
          const move_div = rotation_div.childNodes[0]
          const contentDiv = move_div.childNodes[0]
          const enterAnim = new TimelineLite({onComplete: done})
            .to(move_div, transSpeed, {startAt: {y: `${dir * 100}%`}, y: "0%", ease: Expo.easeInOut}, 0).pause()
            .from(contentDiv.childNodes, transSpeed, {y: dir * -0}, 0)
            .pause()

          const leaveAnim = new TimelineLite({onComplete: done})
            .to(contentDiv.childNodes, transSpeed, {y: dir * 0}, 0)
            .to(move_div, transSpeed, {y: `${dir * -100}%`, ease: Expo.linear, onComplete: done,}, 0)
            .to(contentDiv, transSpeed, {y: `${dir * 100}%`, ease: Expo.linear}, 0)
            .pause()

          if (this.props.show && this.props.doInitAnim) {
            enterAnim.play()
          }
          if (this.props.show) {
            move_div.style.width = `calc(100vw * ${Math.abs(Math.cos(rotAngle * Math.PI / 180))} + 100vh * ${Math.abs(Math.sin(rotAngle * Math.PI / 180))})`
            move_div.style.height = `calc(100vw * ${Math.abs(Math.sin(rotAngle * Math.PI / 180))} + 100vh * ${Math.abs(Math.cos(rotAngle * Math.PI / 180))})`
            move_div.style.transform = `translate(calc(-1 * (100vw - ${move_div.offsetWidth}) / 2), calc(-1 * (100vh - ${move_div.offsetHeight}) / 2)`
            rotation_div.style.transform = `rotate3d(0,0,1,${rotAngle}deg)`
            TweenMax.set(contentDiv, {rotation: -1 * rotAngle})
          } else if (!this.props.show) {
            leaveAnim.play()
          }
        }}
      >
        <div className={styles.container}>
          <div className={styles.rotation_div} style={{zIndex: this.props.zIndex}}>
            <div className={styles.move_div} style={{
              background: this.props.background,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
              <div className={styles.content}>
                {this.props.zIndex !== numPages && <div className={styles.up}>
                  <span><FontAwesomeIcon onClick={this.props.arrowAction(-1)} icon={"chevron-up"}/></span>
                </div>}
                {this.props.children}
                {this.props.zIndex !== 0 &&
                < div className={styles.down}>
                  <span><FontAwesomeIcon onClick={this.props.arrowAction(1)} icon={"chevron-down"}/></span>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </Transition>
    )
  }
}

TransitionSection.propTypes = {
  show: PropTypes.bool.isRequired,
  background: PropTypes.string.isRequired,
  arrowAction: PropTypes.func.isRequired,
  doInitAnim: PropTypes.bool,
  dir: PropTypes.number.isRequired
}
