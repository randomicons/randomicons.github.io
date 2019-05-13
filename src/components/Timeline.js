//@flow
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TimelineItem from './TimelineItem'
import styles from './Timeline.module.sass'


export default class Timeline extends Component {

  render() {
    let timeline_items_top = []
    let timeline_items_down = []
    for (let i = 0; i < this.props.data.length; i++) {
      const val = this.props.data[i]
      if (i % 2 === 0) {
        timeline_items_top.push(<TimelineItem img={val.img} up={false} title={val.title}/>)
      } else {
        timeline_items_down.push(<TimelineItem img={val.img} up={true} title={val.title}/>)
      }
    }

    return (
      <div>
        <ul className={styles.itemList}>{timeline_items_top}</ul>
        <div className={styles.line}></div>
        <ul className={styles.itemList}>{timeline_items_down}</ul>
      </div>)
  }

}
Timeline.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

