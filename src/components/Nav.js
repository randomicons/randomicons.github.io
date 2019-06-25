import React, {Component} from 'react'
// noinspection ES6UnusedImports
import styles from './Nav.module.sass'

export default class Nav extends Component {

  render() {
    const effect = (e) => {
      const elem = e.target
      console.log(e.nativeEvent.pageX, elem.offsetLeft)
      const tolerance = 5

      const left = 0
      const right = elem.clientWidth

      let rect = e.target.getBoundingClientRect()
      let x = e.clientX - rect.left
      if (x - tolerance < left) x = left
      if (x + tolerance > right) x = right
      console.log(x)
      elem.style.setProperty('--x', `${x}px`)
    }
    const links = this.props.links.map(link => <button onMouseEnter={effect} onMouseLeave={effect}
                                                       onClick={link.action}>{link.name}</button>)
    return (
      <nav>
        {links}
      </nav>
    )
  }
}