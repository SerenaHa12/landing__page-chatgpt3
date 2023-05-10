import React from 'react'
import './feature.css';

const Feature = ({ title, text}) => {
  return (
    <div className='gpt3__whatgpt3-container__feature'>
      <div className='gpt3__whatgpt3-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>

      <div className='gpt3__whatgpt3-container__feature-text'>
        {text}
      </div>
    </div>
  )
}

export default Feature