import React from 'react'
import ContactImg from '../../assets/2912016.webp'
const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-heading'>
        <h1 className='color font'>Contact Us</h1>
        <p className='  para4'>"We're here to help! Whether you have a question about our products, services, or need assistance, feel free to reach out to us. Our team is always ready to support you."</p>
      </div>
      <div className='contact-form'>

        <form>
          <div className='form-input'>
            <label className='input-title'>Name</label>
            <input type='text' placeholder='Enter your name' className='input-width' />
          </div>
          <div className='form-input'>
            <label className='input-title'>Email</label>
            <input type='text' placeholder='Enter your name' className='input-width' />
          </div>
          <div className='form-input'>
            <label className='input-title'>Phone</label>
            <input type='text' placeholder='Enter your name' className='input-width' />
          </div>
          <div className='form-input'>
            <label className='input-title'>Message</label>
            <input type='text' placeholder='Enter your name' className='input-message' />
          </div>
          <button className='button-1  input-title'>Submit Now</button>
        </form>
    </div>
  

    </div>
  )
}
export default Contact