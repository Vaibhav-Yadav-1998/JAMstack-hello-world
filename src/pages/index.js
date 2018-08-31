import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div
    style={{
      textAlign: 'center',
      background: '#eee',
      padding: '15px',
      border: '5px solid rgb(102, 51, 153)',
      borderRadius: '20px',
      fontFamily: 'Arial, Helvetica, sans-serif',
    }}
  >
    <h1>Hi !</h1>
    <h2>I am Vaibhav Yadav</h2>
    <p>
      I am from India, right now i am learning web development full time
      independently.
    </p>
    <a
      style={{ display: 'inline-block', margin: '10px' }}
      href="https://freecodecamp.org/vaibhav-yadav-1998"
      target="_blank"
    >
      FreeCodeCamp
    </a>
    <br />
    <a href="https://github.com/vaibhav-yadav-1998" target="_blank">
      Github
    </a>
  </div>
)

export default IndexPage
