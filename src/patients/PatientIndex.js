import React, {Component} from 'react'
import {index,destroy} from './api'
import {Link} from 'react-router-dom'
import './profile.css'


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
                       <div className="contact22">
                           
                        <Link to={`/patients/${patient._id}`}>
                            <div className="det">
                            <p><label>Name : </label>{patient.patientName}&nbsp;&nbsp;
                            <label>Age : </label>{patient.age}  &nbsp;&nbsp;
                            <label>City : </label>{patient.city} &nbsp;&nbsp;
                            <label>Hospital : </label>{patient.hospital} &nbsp;&nbsp;
                            <label>File Number : </label>{patient.fileNumber}</p>
                            </div>
                         </Link><br/>
                         
                        <img className="photo" src={patient.image }/> <br/>
                        <img className="photo" src={patient.medicalReport} width = "300" hight = "300"/><br/>
                        <button onClick={() => this.destroy(patient._id)} className='butnin'><span>Delete</span></button><br/>
                        <Link to={`/patients/${patient._id}/edit`}><button className='butnin'><span>Edit</span></button></Link>
                        </div>
                    </div>
                ))}
            </div>






        )
    }
}























export default PatientIndex