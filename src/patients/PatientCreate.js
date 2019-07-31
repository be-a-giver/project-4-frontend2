import React,{Component} from 'react'
import {create} from './api'
import {withRouter} from 'react-router-dom'
// import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';

class PatientCreate extends Component {
    state = {
        dataForm : {
            "patientName": '',
            "age" : '',
            "city" :'',
            "image" :'',
            "hospital" : '',
            "fileNumber" : '',
            "medicalReport" :''
        }
    }

    handleChange = (event) => {
        
        const name = event.target.name;
        const value = event.target.value;
        const newForm = Object.assign(this.state.dataForm)
        newForm[name] = value;
        this.setState({
            dataForm:newForm
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newPatient = this.state.dataForm
        const user = this.props.user
        create(user,newPatient)
        .then(() => this.props.history.push('/situations'))
        // .then(() => alert('created'))
        .catch((error) => console.log(error))
    }

    render(){
        return(
            <div className="contact">
            <form onSubmit={this.handleSubmit} className="feedback">

                <h2 className="contitle">Add your information</h2>
            <label>Petient Name</label>
            <input className="form"   onChange={this.handleChange} type="text" name="patientName" value={this.state.dataForm.patientName}/>
            <br/>
            <label>Age</label>
            <input className="form"   onChange={this.handleChange} type="number" name="age" value={this.state.dataForm.age}/>
            <br/>
            <label>City</label>
            <input className="form"   onChange={this.handleChange} type="text" name="city" value={this.state.dataForm.city}/>
            <br/>
            <label>Image</label>
            <input className="form"   onChange={this.handleChange} type="text" name="image" value={this.state.dataForm.image}/>
            <br/>
            <label>Hospital</label>
            <input className="form"   onChange={this.handleChange} type="text" name="hospital" value={this.state.dataForm.hospital}/>
            <br/>
            <label>File Number</label>
            <input className="form"   onChange={this.handleChange} type="number" name="fileNumber" value={this.state.dataForm.fileNumber}/>
            <br/>
            <label>Medical Report</label>
            <input className="form"   onChange={this.handleChange} type="text" name="medicalReport" value={this.state.dataForm.medicalReport}/>
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
export default withRouter(PatientCreate)