import Head from 'next/head';
import Image from 'next/image';
import Banner from '../component/Banner';

import {BsCheck2} from 'react-icons/bs';
import {HiOutlineArrowNarrowRight} from '../../node_modules/react-icons/hi';
import { FaBullhorn } from "react-icons/fa";
import {CgWebsite} from "react-icons/cg"; 
import {FaLaptopCode} from 'react-icons/fa';
import {MdOutlineScreenSearchDesktop} from "react-icons/md";

import Sectionheader from '../component/Sectionheader';
import Service from '../component/Service';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Amazon Softwares</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Banner />
      <main className={styles.main}>
     
      <section className="home-about-us">
      <div className="container">
        <div className="SecLayerimg move_anim clearfix">

        <Image src='/img/S2.png' alt="Amazon Softwares" />
        </div>
        <div className="home-about-us-content_wrapper">
          <div className="row">
            <div className="col-7">
            <Sectionheader
            subTitle={"About Us"}
            secTitle={"We Are Proffesional Great Digital Agency!"}
            paragraph={"Your ton the other hand, we denounce with righteous indignation and dislike men who are so beguiled"}
             />
            <div className="listItemWrapper">
            <ul className="listItem">
<li>
<i className="amaz-check"></i>
Research your niche and competitors. </li>
<li>
<i className="amaz-check"></i>
Create content that gets your business found online. </li>
<li>
<i className="amaz-check"></i>
Increase your online presence.Drive organic traffic and lead generation. </li>
</ul>
</div>
<Link href="/about" className="azBtn in_right">About Us<i className="amaz-arrow"></i></Link>
            </div>
           
            <div className="col-5">
            <div className="abImg">
<Image src='/img/3-2.png' alt="Home One Banner" width={793} height={625} />

</div>
            </div>

          </div>
          </div>
        </div>
        
      </section>

      <section className="homeService text-center mt-5 mb-5">
      <div className="container">
      <Sectionheader
            subTitle={"WHAT WE PROVIDE"}
            secTitle={"End to end solutions for promoting your business"}
            paragraph={"We’re not a regular agency. We’re a full-service digital marketing agency who focus on targeted and consistent messages"}
             />
    </div>
    <div className="container-fluid text-left">
      <div className="row">
        <div className="col-md-3">
        <Service 
            icon={<i className="bi bi-window-sidebar"></i>}
            heading={"Web Design"}
            description={"Digital marketing reaches targeted audience in an affordable and measurable way"}
            sericeLink={"/about"}
             />
        </div>
        <div className="col-md-3">
        <Service 
            icon={}
            heading={"Web Development"}
            description={"Digital marketing reaches targeted audience in an affordable and measurable way"}
            sericeLink={"/about"}
             />
        </div>
        <div className="col-md-3">
        <Service 
            icon={}
            heading={"Digital Marketing"}
            description={"Digital marketing reaches targeted audience in an affordable and measurable way"}
            sericeLink={"/about"}
             />
        </div>
        <div className="col-md-3">
        <Service 
            icon={}
            heading={"SEO & Marketing"}
            description={"Digital marketing reaches targeted audience in an affordable and measurable way"}
            sericeLink={"/about"}
             />
        </div>
      </div>
    </div>
      </section>
    
    <section className="ourProgress">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
<h2 className="secTitle">We Develop & Create Digital Future</h2>
<p className="az_paragraph">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form</p>
<div className="progressBar">
<div className="progressBarInfo">
  <div className="progressName">Web Development</div>
  <div className="progressNumber">25%</div>
</div>
<div className="progress">

  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className="progressBarInfo">
  <div className="progressName">Web Development</div>
  <div className="progressNumber">25%</div>
</div>
<div className="progress">
  <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className="progressBarInfo">
  <div className="progressName">Web Development</div>
  <div className="progressNumber">25%</div>
</div>
<div className="progress">
  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className="progressBarInfo">
  <div className="progressName">Web Development</div>
  <div className="progressNumber">25%</div>
</div>
<div className="progress">
  <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "100%"}}  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>
          </div>

          <div className="col-md-6">
            <Image src={Image42} />
          </div>
        </div>
      </div>
    </section> 
       
      </main>

      <footer className={styles.footer}>
       Copywrite @ 2022 Amazon Softwares
      </footer>
    </div>
    </>
  )
}
