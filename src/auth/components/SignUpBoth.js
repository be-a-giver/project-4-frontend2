import React,{Component} from 'react'
 
import {Link} from'react-router-dom'
class SignUpBoth extends Component {
  render( ) {
    return (
      <React.Fragment>
        <button className="btnn b1">
        <Link to="/sign-up"><span>Sign Up as user</span></Link>
        </button>
        
        <button className="btnn b2">
        <Link to="/sign-up/helper"><span>Sign Up As helper</span></Link>
        </button >
       </React.Fragment>
    )
  }
}
export default SignUpBoth;