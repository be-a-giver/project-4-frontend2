import React, {Component} from 'react';
import {show} from './api'

class PatientShow extends Component{
    state = {
        patient:{}
    }

    componentDidMount(){
        const user = this.props.user;
        const patientId = this.props.patientId;
        show(user,patientId)
        .then((response) => {
            const showpatient = response.data.patient;
            this.setState({
                patient:showpatient
            })
        })
        .catch((error) => console.log(error))
    }



    render(){
        return(
            <div className="showcontainer">
                
                <p><label>Name : </label>{this.state.patient.patientName} |&nbsp;&nbsp;&nbsp;
                <label>Age : </label>{this.state.patient.age} |&nbsp;&nbsp;&nbsp;
                <label>City : </label>{this.state.patient.city} |&nbsp;&nbsp;&nbsp;
                <label>Hospital : </label>{this.state.patient.hospital} |&nbsp;&nbsp;&nbsp;
                <label>File Number : </label>{this.state.patient.fileNumber}</p>

                <img className="photo"src={this.state.patient.image}/><br/>
                <img className="photo" src={this.state.patient.medicalReport}/>
                
            </div>
        )
    }
}



export default PatientShow