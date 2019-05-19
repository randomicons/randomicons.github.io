//@flow
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TimelineItem from './TimelineItem'
import styles from './Timeline.module.sass'


export default class Timeline extends Component {

  render() {
    const timeline_items = []
    for (let i = 0; i < this.props.data.length; i++) {
      const val = this.props.data[i]
      timeline_items.push(<TimelineItem img={val.img} up={false} title={val.title}/>)
    }

    return (
      <div className={styles.timeline}>
        {timeline_items}
      </div>)
  }

}
Timeline.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

