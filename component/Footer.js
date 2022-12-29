import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaSkype } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="footer_01 white" >
                <div className="SecLayerimg move_anim">
                    <Image src='/img/S27.png' alt="Amazon" width={1748} height={570} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 ">
                            <aside id="dgi_auw-2" className="widget about_widget"> <div className="aboutWidget">
                                <Link href="/"><Image src='/img/Logo.png' alt="" width={256} height={37} /></Link>
                                <p>1109, Kirti Shikhar Building, District Center, Janakpuri (110058)</p>
                                <h4>Newsletter</h4>
                              
                                                </div>
                                            </aside> </div>
                                        <div className="col-xl-3 offset-xl-1 col-lg-3 col-md-6 ">
                                            <aside id="nav_menu-3" className="widget widget_nav_menu"><h3 className="widget_title">About Company</h3><div className="menu-about-company-container"><ul id="menu-about-company" className="menu"><li><Link href="/about">About</Link></li>
                                                <li ><Link href="/services"><button className="linkButton" onClick={() => window.scrollTo(0, 0)}>Services</button></Link></li>
                                                <li ><Link href="/portfolio">Our Portfolio</Link></li>
                                                <li ><Link href="/career">Career</Link></li>
                                                <li ><Link href="/contact">Contact Us</Link></li>
                                            </ul></div></aside> </div>
                                        <div className="col-xl-2 col-lg-3 col-md-6 ">
                                            <aside id="nav_menu-2" className="widget widget_nav_menu"><h3 className="widget_title">Our Services</h3><div className="menu-our-services-container"><ul id="menu-our-services" className="menu"><li ><Link href="/seo">SEO &amp; Marketing</Link></li>
                                                <li ><Link href="/digitalmarketing">Digital Marketing</Link></li>
                                                <li ><Link href="/webdevelopment">Web Development</Link></li>
                                                <li ><Link href="/webdesign">Web Design</Link></li>
                                                <li ><Link href="/digitalagency">Digital agency</Link></li>
                                            </ul></div></aside> </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 ">
                                            <aside id="dgi_con-2" className="widget contact_widget"> <h3 className="widget_title">Contact Us</h3> <div className="contact_info">
                                                <p>amazonsoftwares@gmail.com</p>
                                                <p>+90 155 92666</p>
                                                <div className="abSocial">
                                                    <a target="_blank" href="https://www.facebook.com/"><FaFacebookF /></a>
                                                    <a target="_blank" href="https://twitter.com/?lang=en"><FaTwitter /></a>
                                                    <a target="_blank" href="https://www.linkedin.com/signup"><FaLinkedinIn /></a>
                                                    <a target="_blank" href="https://www.instagram.com/"><FaInstagram /></a>
                                                </div>
                                            </div>
                                            </aside> </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="copyright ">
                                                <p>2022 © amaz. All Rights Reserved.</p>
                                                <ul id="menu-copyright-menu" className="menu"><li><Link href="">Privacy Policy</Link></li>
                                                    <li><Link href="">Terms of Service</Link></li>
                                                </ul> </div>
                                        </div>
                                    </div>
                            </div>
                            </footer>
                        </>
                        )
}

                        export default Footer