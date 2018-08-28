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
    <p>Right now i am learning to code full time independently</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
