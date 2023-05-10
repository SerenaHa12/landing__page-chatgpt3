import React from 'react'
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './import';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='gpt3__brand-item'>
        <img src={google} alt='google' />
      </div>

      <div className='gpt3__brand-item'>
        <img src={slack} alt='slack' />
      </div>

      <div className='gpt3__brand-item'>
        <img src={atlassian} alt='atlassian' />
      </div>

      <div className='gpt3__brand-item'>
        <img src={dropbox} alt='dropbox' />
      </div>

      <div className='gpt3__brand-item'>
        <img src={shopify} alt='shopify' />
      </div>
    </div>
  )
}

export default Brand