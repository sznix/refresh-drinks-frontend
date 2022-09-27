import React from 'react'

export default function Thankyou() {
  return (
    <>
        <section className='thankyou'>
            <div className='banner'>
                <h1 className='thankyoubanner'>Thank you for ordering</h1>
            </div>
            <div className='messagediv'>
                <h2 className='message'>Thank you for ordering. We recieved your request. <br />
                Our staff will be contacting with you to tell next steps.
                </h2>
            </div>
            <a href="/">
            <button className='backtohome'>BACK TO HOME</button></a>

        </section>
        

    </>
  )
}
