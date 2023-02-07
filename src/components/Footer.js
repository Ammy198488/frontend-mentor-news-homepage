import React from 'react'
import Img1 from '../images/image-retro-pcs.jpg'
import Img2 from '../images/image-top-laptops.jpg'
import Img3 from '../images/image-gaming-growth.jpg'

const Footer = () => {

    const data = [
    {
        image: Img1,
        title: 0o1,
        header:'Reviving Retro PCs',
        body: 'What happens when old PCs are given modern upgrades?'
    },
    {
        image: Img2,
        title: 0o2,
        header:'Top 10 Laptops of 2022',
        body: 'Our best picks for various needs and budgets.'
    },
    {
        image: Img3,
        title: 0o3,
        header:'The Growth of Gaming',
        body: 'How the pandemic has sparked fresh opportunities.'
    },
    ];
    
  return (
    <footer className='py-3 d-flex row justify-content-between flex-lg-row flex-sm-column'>
        {data.map((item) => (
            <div className="footer_body d-flex align-items-center col-lg-4 col-sm-12 g-3">
                <img src={item.image} alt="" className='img-fluid flex-shrink-0' />
                <div className="content_body px-2 flex-grow-1 ms-3">
                    <h4>{ item.title}</h4>
                    <h5>{item.header}</h5>
                    <p>{ item.body}</p>
                </div>
            </div>
        ))}
    </footer>
  )
}

export default Footer
