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
            <div> 
                <h1 className="medecal-sit">Medical Situations </h1>
               
                {this.state.patients.map((patient,index) => (
                    <div key={index}>
                    
                    <p>{patient.patientName}</p>
                        <div className="container2">
                        
                        <img src = {patient.image} className="sitimge" width = "300" hight = "300"/>
                        </div>
                        {this.props.user ? 
                        <div className= "overlay">
                        <details className="details">
                            <summary className='btnn3' > <span> Show more </span></summary>
                            <p>{patient.age}</p>
                            <p>{patient.fileNumber}</p>
                            <p>{patient.city}</p>
                            <img  src={patient.medicalReport} />

                            <button className='btnn4'><Link to={`/situations/${patient._id}`}><span>Donate</span></Link></button>
                        </details>
                        </div>
                        : ""
                        }
                        </div>
                     

                ))}
            
           </div>

        
        )
    }
}
export default withRouter(Situations)