import React from "react";
import Image from "next/image";

const Pageheader = (props) => {
    return (
        <>
            <div className="page-title-area page-title-bg1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>{props.title}</h2>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li>{props.title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-img1">
            <Image src='/img/1.png' width={289} height={274} alt="Shape Image" />
          </div>
          <div className="shape-img2">
            <Image src='/img/2.svg' alt="Shape Image" width={21} height={20} />
          </div>
          <div className="shape-img3">
            <Image src='/img/3.svg' width={22} height={22} alt="Shape Image" />
          </div>
          <div className="shape-img4">
            <Image src='/img/4.png' width={15} height={15} alt="Shape Image" />
          </div>
          <div className="shape-img5">
            <Image src='/img/5.png' alt="Shape Image" width={18} height={18} />
          </div>
          <div className="shape-img6">
            <Image src='/img/6.png' alt="Shape Image" width={202} height={202} />
          </div>
          <div className="shape-img7">
            <Image src='/img/7.png' alt="Shape Image" width={100} height={93} />
          </div>
          <div className="shape-img8">
            <Image src='/img/8.png' alt="Shape Image" width={74} height={64} />
          </div>
          <div className="shape-img9">
            <Image src='/img/9.png' alt="Shape Image" width={43} height={46} />
          </div>
          <div className="shape-img10">
            <Image src='/img/10.png' alt="Shape Image" width={12} height={11} />
          </div>
            </div>
        </>
    )
}

export default Pageheader