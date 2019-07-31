import React,{Component} from 'react'
import {create} from './api'
import {withRouter} from 'react-router-dom'
// import {Link} from 'react-router-dom'


class Want extends Component {

    render(){
        return(
          
            <div className="contact">
            <form onSubmit={this.handleSubmit} className="feedback">

                <h2 className="contitle">Help People Now</h2>
            <label>Name</label>
            <input className="form"   onChange={this.handleChange} type="text" name="patientName" value={this.state.dataForm.patientName}/>
            <br/>
            <label>Type of help</label>
            <input className="form"   onChange={this.handleChange} type="number" name="age" value={this.state.dataForm.age}/>
            <br/>
            <label>Notes</label>
            <textarea className="form"   onChange={this.handleChange} type="text" name="city" value={this.state.dataForm.city}/>
            <br/>
            
            {/* <button type="submit">Create</button> */}
            {/* <Button type="submit" color="danger">Create</Button>  */}
            <button type="submit" className='btnn'><span>Create</span></button>
            {/* <Link to="/home"><button type="submit">Create</button></Link> */}
        </form>

        </div>

        
        )
    }
}
export default withRouter(Want)