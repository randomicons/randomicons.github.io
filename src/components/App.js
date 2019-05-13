//@flow
import React, {Component} from 'react'
import face from '../images/me.jpg'
import Timeline from "./Timeline"
import styles from './App.module.sass'


class App extends Component {
  render() {
    return (
      <main>
        <section className={styles.container}>
          <p>A bird in the hand is worth 2 in the bush</p>
          <img src={face} className={styles.face} alt={"my face"}/>
          <span>Sriram Bhat</span>
          <span>Web developer. </span>
          <span>Data Something.</span>
          <span>Confused.</span>
          <div className={styles.down}>
            <span>v</span>
          </div>
        </section>
        <Timeline data={[{title: "face", img: face}]}/>
      </main>
    )
  }
}

export default App
