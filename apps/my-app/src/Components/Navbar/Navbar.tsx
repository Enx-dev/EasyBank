import styles from './Navbar.module.scss';
import brandLogo from '../../assets/images/logo.svg';
import openMenuIcon from '../../assets/images/icon-hamburger.svg';
import closeMenuIcon from '../../assets/images/icon-close.svg';
import { useState } from 'react';
import MenuComp from './MenuComp/MenuSection';
/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <>
      <nav id="Navbar" className={styles['container']}>
        <img src={brandLogo} alt="Brand Logo" />
        <img
          className={styles['menu']}
          onClick={() => setToogleMenu((curr) => !curr)}
          aria-details={toogleMenu ? 'Opened menu' : 'Closed Menu'}
          src={toogleMenu ? closeMenuIcon : openMenuIcon}
          alt={toogleMenu ? 'menu opened' : 'menu closed'}
        />
        <ul className={styles['links']}>
          <li>Home </li>
          <li>About</li>
          <li> Contact </li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
        <button className={styles['btn']}>Request Invite</button>
      </nav>
      {toogleMenu && <MenuComp />}
    </>
  );
}

export default Navbar;
