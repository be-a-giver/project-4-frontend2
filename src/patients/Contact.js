import React , {Component} from 'react'
import './Contact.css'
class Contact extends Component {
    render(){
        return(
            <div className="contact">
        <form className="feedback">
        <h1 className="contitle"> Contact us </h1>
          <label  >Name </label><br/>
          <input className="form" type="name" placeholder ="Your Name"/>
          <br />
          <label>Email</label><br />
          <input className="form" type="email" name="emailaddress" placeholder="Email Address" />
          <br />
          <label>Feedback</label>
          <br />
          <textarea className="form" rows="4" cols="50" placeholder="We hope to know your opinion about our App">
          </textarea>
          <br />

          <button className='btnn' type="submit" ><span>Submit</span></button>
        </form>
  
      </div>
        )
    }
}
export default Contact 