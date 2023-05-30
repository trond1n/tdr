import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>🌟</div>
      <div className={styles.searchContainer}>
        <input type="text" className={styles.searchInput} placeholder="Поиск" />
        <div className={styles.searchIcon}>
          <FaSearch />
        </div>
      </div>
      <div className={styles.themeToggle}>Тема</div>
    </header>
  );
};

export default Header;
