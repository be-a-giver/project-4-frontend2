import React ,{Component} from 'react'
import {Link , withRouter} from 'react-router-dom'
import {showallpatient} from './api'


class Situations extends Component {

    state = {
        patients: []
    }
    componentDidMount() {
        showallpatient ()
        .then(response => {
            console.log(response.data.patients)
         this.setState({
            patients: response.data.patients
         })
        }) 
        .catch(error=> (console.log(error))
        )
    }
    
    
    render(){
       
        
        return(
            <div width = "900" hight = "500"> 
                <h1 className="medecal-sit">Medical Situations </h1>
               
                {this.state.patients.map((patient,index) => (
                    <div key={index}>
                    <div className="names">
                   
                    </div>
                        <div className="pics">
                             <h3 className="names">{patient.patientName}</h3>
                       <img src = {patient.image} width = "300" hight = "300"/>
                        
                        {this.props.user ? 
                        
                        <details>
                            <summary className='summbutt' ><span> Show more </span></summary>
                            <p><label>Age : </label>{patient.age} |&nbsp;&nbsp;&nbsp; 
                            <label>File Number : </label>{patient.fileNumber} | &nbsp;&nbsp;&nbsp;
                            <label>City : </label>{patient.city} |&nbsp;&nbsp;&nbsp;
                            <label>Hospital : </label>{patient.hospital}</p>
                            <a href= {patient.medicalReport}>
                            <img  className ="photoo2"src={patient.medicalReport} width = "300" hight = "300"/></a>


                            {this.props.user.helper ? 
                            <button className='btnn4'><Link to={`/situations/${patient._id}`}><span>Donate</span></Link></button>
                            
                            :
                            
                            
                            ''}
                            
                        </details>
                       
                        : ""
                        }
                        </div>
                        </div>
                     

                ))}
            
           </div>

        
        )
    }
}
export default withRouter(Situations)