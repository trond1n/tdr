import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>🌟</div>
      <input type="text" className={styles.input} placeholder="Search" />
      <div className={styles.toggle}>Toggle</div>
    </header>
  )
}
export default Header