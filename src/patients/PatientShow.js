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
            <div>
                <h1>{this.state.patient.patientName}</h1>
                <h1>{this.state.patient.age}</h1>
                <h1>{this.state.patient.city}</h1>
                <img src={this.state.patient.image}/>
                <h1>{this.state.patient.hospital}</h1>
                <h1>{this.state.patient.fileNumber}</h1>
                <img src={this.state.patient.medicalReport}/>
                
            </div>
        )
    }
}



export default PatientShow