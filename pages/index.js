import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { skills, projects } from '../profile'

export default function Home() {
  return (
    <Layout>
      <header className='row'>
        <div className='col-md-10'>
          <div className='card card-body bg-secondary text-light'>
            <div className='row'>
              <div className='col-md-4'>
                {/**TODO: Take a good picture, centrated, well dressed and horizontal with black background */}
                <Image src='/freddy.jpg' width={300} height={400} 
                alt='Picture of Freddy Machado Developer' className='img-fluid'/>
              </div>
              <div className='col-md-8'>
                <h1>Freddy Machado</h1>
                <h5>Web & Mobile Developer</h5>
                <p>Welcome to my portfolio web. Here I collect all my public work 
                  so you can see and test all the functionalities I have implemented 
                  through years of study and practicing the art of writing clean code on a 
                  vast variety of platforms to provide solutions around the world.</p>
                <a href="/contact">Hire Me</a>
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
              {
                skills.map(({skill,percentage},i) => (
                  <div className='py-3' key={i}>
                    <h5>{skill}</h5>
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
          <div className='card bg-light'>
            <div className='card-body'>
              <h1>Experience</h1>
            </div>
          </div>
        </div>
      </div>

      {/** Portfolio */}
      <div className='row'>
        <div className='col-md-12'>
          <div className='card card-body bg-dark'>
            <div className='row'>
              <div className='col-md-12'>
                <h1 className='text-center text-light'>Portfolio</h1>
              </div>
              {
                projects.map(({name, description, image}, i) => (
                  <div className='col-md-4 p-2' key={i}>
                    <div className='card h-100'>
                      <div className='overflow'>
                        <Image className='card-img-top' src={`/${image}`} width={300} height={300} alt='' />
                      </div>                      
                      <div className='card-body'>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href='#'>Know more</a>
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
