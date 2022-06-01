import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { skills, projects } from '../profile'

export default function Home() {
  return (
    <Layout>
      <header className='row'>
        <div className='col-md-12'>
          <div className='card card-body bg-secondary text-light'>
            <div className='row'>
              <div className='col-md-4'>
                {/**TODO: Take a good picture, centrated, well dressed and horizontal with black background */}
                <Image src='/fred-gris.jpg' width={400} height={300} 
                alt='Picture of Freddy Machado Developer' className='img-fluid'/>
              </div>
              <div className='col-md-8'>
                <h1>Freddy Machado</h1>
                <h5>Web & Mobile Developer</h5>
                <p>Welcome to my portfolio web. Here I collect all my public work 
                  so you can see and test all the functionalities I have implemented 
                  through years of study and practicing the art of writing clean code on a 
                  vast variety of platforms to provide solutions around the world.</p>
                  {/**TODO: Add icons for instagram, twitter, Linkedin and github */}
                <Link href="/contact" >
                  <a className='px-2'>Hire Me</a>                
                </Link>
                <a href="https://www.github.com/freddymachado" target="_blank" rel="noreferrer" className='px-2'>
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" width="32" height="32" />
                </a> 
                <a href="https://www.linkedin.com/in/freddymach" target="_blank" rel="noreferrer" className='px-2'>
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="32" height="32" />
                </a> 
                <a href="https://www.twitter.com/Freddy_456" target="_blank" rel="noreferrer" className='px-2'>
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg" width="32" height="32" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/**Second section */}
      <div className='row py-2'>
        <div className='col-md-4'>
          <div className='card bg-light'>
            <div className='card-body'>
              <h1>Skills</h1>
              {/** TODO: Add github badges */}
              {
                skills.map(({skill,percentage, badge},i) => (
                  <div className='py-3' key={i}>
                    <h5>
                      <img src={badge} width="36" height="36" alt={skill} className='px-1' />
                      {  skill}
                    </h5>
                    <div 
                      className='progress'>
                        <div 
                        className='progress-bar' 
                        role='progressbar' 
                        style={{width: `${percentage}%`}}>
                        </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='col-md-8'>
          <div className='card card-body bg-dark'>
            <div className='col-md-8 text-center'>
              <h1 className=' text-light'>Portfolio</h1>
            </div>
            <div className='row'>
              {/** Add github link */}
              {
                projects.map(({name, description, image, link, repo}, i) => (
                  <div className='col-md-4 p-2' key={i}>
                    <div className='card h-100'>
                      <div className='overflow'>
                        <Image className='card-img-top' src={`/${image}`} width={265} height={450} alt='' />
                      </div>                      
                      <div className='card-body'>
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <a href={link} target="_blank" rel="noreferrer" className='px-2'>Try it!</a>    
                        <a href={repo} target="_blank" rel="noreferrer" className='px-2'>
                          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" width="32" height="32" />
                        </a> 
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
