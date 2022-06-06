import Layout from '../components/Layout'
import Image from 'next/image'
import { skills, projects } from '../profile'

const Projects = () => (
    <Layout>
      <div className='col-md-12'>
          <div className='card card-body bg-dark'>
            <div className='col-md-12 text-center'>
              <h1 className=' text-light'>Portfolio</h1>
            </div>
            <div className='row'>
              {/** Add github link */}
              {
                projects.map(({name, description, image, link, repo}, i) => (
                  <div className='col-md-4 p-2' key={i}>
                    <div className='card h-100'>
                      <div className='overflow'>
                        <Image className='card-img-top' src={`/${image}`} width={250} height={500} alt='' />
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
    </Layout>

) 

export default Projects;