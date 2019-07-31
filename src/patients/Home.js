import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

class Home extends Component{
    render(){
        return(
            <div className="home">
                <h1 className="quistion">What is 'Be a Giver'?</h1>
            <p>Is an electronic platform that combines rare medical situations <br/>
            that need help from community members and who want to provide help.</p>

            <img src=""/>
            
            <div className="shape1">
                <img src=" https://images.unsplash.com/photo-1498872270484-7ffbfa6951ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="image"/>
            
            </div>
            <div className ="needhelp">
            <p>People appreciate and never forget that helping hand <br/>
                especially when times are tough.  </p>
                <h5 >-Catherine Pulsifer </h5>
                {/* <Link to='/createPatients'>Do you need help ?</Link> */}

                {/* {this.props.helper ? "helper":" " } */}

                {this.props.user ? 
                <div >
                     <button className=" butt "><Link className="med-sit" to='/createPatients'><span>I Need Help</span></Link></button>
                </div>
                :
                <div >
                     <button className=" butt "><Link className="med-sit" to='/sign-up'><span>I Need Help</span></Link></button>
                </div>
                }
                </div>
            
            <div className="shape2">
                <img src="https://images.unsplash.com/photo-1494438043283-22a3c46831a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" className="image"/>
            </div>

            <div className="wantohelp">
            <p>You DON'T need a reason to help People <br/> </p>
                {/* <Link to='/createPatients'>Do you need help ?</Link> */}
                {this.props.user ?
                 <div >
                    <button className=" butt "><Link className="med-sit" to='/situations'><span>Help People Now </span></Link></button> 
                </div>
                    :
                <div >
                    <button className="butt "><Link  className="med-sit" to='/sign-up/helper'><span>Help People Now</span> </Link></button>
                </div>
                    }
                </div>
                
            
            {/* <button className="butt">
            <Link to='/situations' className="med-sit"><span>Medical situations</span></Link>
           </button> */}
            </div> 
        )
    }
}


export default Home