import React from "react";
import Link from 'next/link'
import styles from '../styles/Home.module.scss'


const Header = () =>{
return (
    <>
        <nav className={styles.mainnav}>
  <ul>
  <li><Link href="/" scroll={false}>Home</Link></li>
  <li><Link href="/about">About</Link></li>
  <li><Link href="services">Services</Link></li>
  <li><Link href="portfolio">Portfolio</Link></li>
  <li><Link href="career" >Career</Link></li>
  <li><Link href="contact">Contact us</Link></li>
  </ul>
</nav>
    </>
)
}
export default Header;