import styles from './TimelineItem.module.sass'
import PropTypes from "prop-types"
import React, {Component} from 'react'
import dotImg from '../images/dot.png'

export default class TimelineItem extends Component {
  render() {
    return (
      <div className={styles.item}>
        <div>
          <img className={styles.marker} src={dotImg} alt={""}/>
        </div>
        <div className={styles.content}>
          <img src={this.props.img} alt={this.props.title}/>
          <span className={styles.itemTitle}>{this.props.title}</span>
        </div>
      </div>
    )
  }
}

TimelineItem.propTypes = {
  img: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  up: PropTypes.bool.isRequired,
}
