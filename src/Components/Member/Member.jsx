import React from 'react'
import Cartoon1 from '../../assets/cartoon-1.jpg';
import Cartoon2 from '../../assets/cartoon-2.jpg';
import Cartoon3 from '../../assets/cartoon-3.jpg';
import Cartoon4 from '../../assets/cartoon-4.jpg';

const Member = () => {
  return (
    <div className='our-members-container'>
    <div className='our-members'>
        <h2 className='our-members-titles'> Our Members</h2>
        <div className='services-list'>
            <div className='services-item-list'>
            <div className='services-image services-image-bigadna'>
            <img className='img-width-size img-size-icreases' src={Cartoon1} alt='services-image' />
            </div>
            </div>
            <div className='services-item-list'>
            <div className='services-image'>
            <img className='img-width-size img-size-icreases' src={Cartoon2} alt='services-image' />
            </div>
            </div>
            <div className='services-item-list'>
            <div className='services-image'>
            <img className='img-width-size img-size-icreases' src={Cartoon3} alt='services-image' />
            </div>
            </div>
            <div className='services-item-list'>
            <div className='services-image'>
            <img className='img-width-size img-size-icreases' src={Cartoon4} alt='services-image' />
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Member