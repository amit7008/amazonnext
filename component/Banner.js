import React from "react";
import Link from 'next/link';
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="hero-banner banner-bg2">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="hero-main-banner-content text-left">
                    <span className="sub-title">Your brand, promoted</span>
                    <h1>Creative solutions to improve your business!</h1>
                    <p>We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements.</p>
                    <Link href="/about" class="azBtn in_right"> About Us <i class="amaz-arrow"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></i></Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  

                  <div class="hero-main-banner-image move_anim">
                  <Image  src="/img/main-pic.png" className="wow fadeInUp animated" alt="main-pic" width={580} height={560} />

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-img1">
                      <Image src="/img/1.png" alt="Shape Image" width={289} height={274} />
                    </div>
                    <div className="shape-img2">
                      <Image src="/img/2.svg" alt="Shape Image" width={21} height={20} />
                    </div>
                    <div className="shape-img3">
                      <Image src="/img/3.svg" alt="Shape Image" width={22} height={22} />
                    </div>
                    <div className="shape-img4">
                      <Image src="/img/4.png" alt="Shape Image" width={15} height={15} />
                    </div>
                    <div className="shape-img5">
                      <Image src="/img/5.png" alt="Shape Image" width={18} height={18} />
                    </div>
                    <div className="shape-img6">
                      <Image src="/img/6.png" alt="Shape Image" width={202} height={202} />
                    </div>
                    <div className="shape-img7">
                      <Image src="/img/7.png" alt="Shape Image" width={100} height={93} />
                    </div>
                    <div className="shape-img8">
                      <Image src="/img/8.png" alt="Shape Image" width={74} height={64} />
                    </div>
                    <div className="shape-img9">
                      <Image src="/img/9.png" alt="Shape Image" width={43} height={46} />
                    </div>
                    <div className="shape-img10">
                      <Image src="/img/10.png" alt="Shape Image" width={12} height={11} />
                    </div>

      </div>
    </>
  )
};

export default Banner;