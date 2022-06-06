import Layout from '../components/Layout'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mknyegyz");
  if (state.succeeded) {
      return <p>Thanks, i will be in touch with you ASAP!</p>;
  }
  return (
    <><form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Email"/>
          <small id="emailHelp" className="form-text text-muted">I will never share your email with anyone else.</small>
        </div>
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors} />
      <div className="form-group">
        <textarea
          id="message" placeholder="Message"
          name="message" className="form-control" rows="3" />
        <ValidationError
          prefix="Message"
          field="message" 
          errors={state.errors} />
      </div>
      <button type="submit" className="btn btn-primary mb-2" disabled={state.submitting}>Submit</button>
    </form></>
  );
}
const Contact = () => (
    <Layout footer={false}>
      <h1>Contact</h1>
      
    <p align="left"> 
      <a href="https://www.github.com/freddymachado" target="_blank" rel="noreferrer" className='px-2'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" width="32" height="32" />
      </a> 
      <a href="https://www.linkedin.com/in/freddymach" target="_blank" rel="noreferrer" className='px-2'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="32" height="32" />
      </a> 
      <a href="https://www.twitter.com/Freddy_456" target="_blank" rel="noreferrer" className='px-2'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg" width="32" height="32" />
      </a>
    </p>
    <ContactForm />
    </Layout>

) 

export default Contact;