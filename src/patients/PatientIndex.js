import React, {Component} from 'react'
import {index,destroy} from './api'
import {Link} from 'react-router-dom'


class PatientIndex extends Component {

    state={
        patients:[]
    }

    componentDidMount(){
        const user = this.props.user
        index(user)
        .then(response => {
            // console.log(response)
           const allPatients = response.data.patients;
           this.setState({
            patients:allPatients
           })
        })
        .catch((error) => console.log(error))
    }

    destroy = (patientId) => {
        const user = this.props.user
        destroy(user,patientId)
        .then(() => alert('deleted'))
        .then(() => {
           const newPatient = this.state.patients.filter((patient) => patient._id != patientId)
            this.setState({
                patients:newPatient
            })
        })
        .catch((error) => console.log(error))
    }

    render() {
        return (
            <div>
                {this.state.patients.map((patient,index) => (
                   <div key={index}>
                        <Link to={`/patients/${patient._id}`}><h1>{patient.patientName} {patient.age} {patient.city} {patient.city} {patient.hospital} {patient.fileNumber} </h1></Link><br/>
                        <img src={patient.image}/> 
                        <img src={patient.medicalReport}/>
                        <button onClick={() => this.destroy(patient._id)} className='btnn'><span>Delete</span></button>
                        <Link to={`/patients/${patient._id}/edit`}><button className='btnn'><span>Edit</span></button></Link>
                    </div>
                ))}
            </div>






        )
    }
}























export default PatientIndex