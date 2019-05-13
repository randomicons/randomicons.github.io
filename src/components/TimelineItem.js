import styles from './TimelineItem.module.sass'
import PropTypes from "prop-types"
import React, {Component} from 'react'

export default class TimelineItem extends Component {
  render() {
    return (
      <li className={styles.container}>
        {this.props.up ? "^" : ""}
        <div className={styles.item}>
          <img src={this.props.img} alt={this.props.title}/>
          <span className={styles.itemTitle}>{this.props.title}</span>
        </div>
        {this.props.up ? "" : "V"}
      </li>
    )
  }
}

TimelineItem.propTypes = {
  img: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  up: PropTypes.bool.isRequired,
}
