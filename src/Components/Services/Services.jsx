import React from 'react';
import Image1 from '../../assets/hero-section-image.png';
const Services = () => {
  const services = [
    { id: 1, title: 'Web Development', image: Image1 },
    { id: 2, title: 'Front End Development', image: Image1 },
    { id: 3, title: 'Web Development', image: Image1 },
    { id: 4, title: 'Web Development', image: Image1 },
    { id: 5, title: 'Web Development', image: Image1 },
    { id: 6, title: 'Web Development', image: Image1 },
    { id: 7, title: 'Web Development', image: Image1 },
    { id: 8, title: 'Web Development', image: Image1 }
  ]
  return (
    <div className='our-services'>
      <div className='services-title'>
        <h1 className='color font'>Our Services</h1>
      </div>
      <div className='services-quotes'>
        <p className='color'>“A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.”</p>
      </div>

      <div className='services-list'>
        {services.map((service, index) => (
          <div key={index} className='services-item-list'>
            <div className='services-image'>
              <img className='img-width-size' src={service.image} alt='services-image' />
            </div>
            <div className='services-title-name'>
              <h4>{service.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className='contact-btn'>
        <div className='container-1'>
          <div>
            <h1 className='container-p font'>Let our incredible team assist you with Website Development</h1>
          </div>
          <div className='container-2'>
            <h1 className='container-a font' >Let our incredible team assist you with Website Development</h1>
          </div>
          <div className='contact-us'>
            <button className='button-1'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services