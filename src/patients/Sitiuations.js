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
                <div className="info2">
                {this.state.patients.map((patient,index) => (
                    <div key={index}>
                    
                        <p>{patient.patientName}</p>
                        
                        <img src = {patient.image} class="scaled"  width = "100" hight = "100"/>
                        <img src = {patient.image}  width = "100" hight = "100"/>
                        {this.props.user ? 
                        <details>
                            <summary>Show more</summary>
                            <p>{patient.age}</p>
                            <p>{patient.fileNumber}</p>
                            <p>{patient.city}</p>
                            <img src={patient.medicalReport} />
                            <hr/>
                            <Link to={`/situations/${patient._id}`}>Dontate</Link>
                        </details>
                        : ""
                        }
                     </div>

                ))}
                </div>
           </div>

        
        )
    }
}
export default withRouter(Situations)