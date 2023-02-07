import React from 'react'
import SecImg from '../images/image-web-3-desktop.jpg'

const Section = () => {
  return (
    <section className='d-flex row g-5 justify-content-between pb-0'>
        <div className='col-lg-9 sec-1 p-0'>
            <img src={SecImg} alt="image" className='section-img img-fluid' />
            <div className="sub-section d-flex justify-content-between row pt-3 ">
                <h1 className='col-lg-6 col-sm-12'>The Bright Future of Web 3.0?</h1>
                <div className="sub-section2 col-lg-6 col-sm-12">
                    <p className='w-75'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
        <div className='col-lg-3 sec-2'>
            <h2>New</h2>
            <div>
                <h3>Hydrogen vs Electric Cars</h3>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <hr />
            <div>
                <h3>The Downsides of AI Artistry</h3>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <hr />
            <div>
                <h3>Is VC Funding Drying Up?</h3>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </div>
    </section>
  )
}

export default Section
