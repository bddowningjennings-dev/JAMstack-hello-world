import React from 'react'
import Link from 'gatsby-link'

import './index.css'

import githubImg from './github.png'
import linkedInImg from './linkedin.png'
import personalSiteImg from './gato.jpg'

const IndexPage = () => (
  <div>
    <h3>Hello Worldly people</h3>
    <p>I'm Blane Downing-Jennings!</p>
    <p>
      <a id='repo' href='https://github.com/bddowningjennings-dev/JAMstack-hello-world' >Link</a> : GitHub Repo for this starter
    </p>
    <p><a href='https://bddowningjennings-dev.github.io/' title='Goto my portfolio site?' >
      <img className='gato' alt='personalSite' src={personalSiteImg} />
    </a></p>
    <div className='footer'>
      <a href='https://github.com/bddowningjennings-dev' title='github.com/bddowningjennings-dev' >
        <img className='icon' alt='github' src={githubImg} />
      </a>
      <a href='https://www.linkedin.com/in/bddowningjennings/' title='linkedin.com/in/bddowningjennings/' >
        <img className='icon' alt='linkedin' src={linkedInImg} />
      </a>
    </div>
    
  </div>
)

export default IndexPage
