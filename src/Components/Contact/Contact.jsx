import React from 'react'
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
            <label>Name</label>
            <input type='text' placeholder='Enter your name' />
          </div>
          <div className='form-input'>
            <label>Email</label>
            <input type='text' placeholder='Enter your name' />
          </div>
          <div className='form-input'>
            <label>Phone</label>
            <input type='text' placeholder='Enter your name' />
          </div>
          <div className='form-input'>
            <label>Name</label>
            <input type='text' placeholder='Enter your name' />
          </div>
        </form>
      </div>
    </div>
  )
}
export default Contact