import React ,{Component} from 'react'
import {Link , withRouter} from 'react-router-dom'
import {updateHelp} from './api'


class Dontate extends Component {

    state = {
        dontate: 0
    }


    handelChange = event => {
        console.log(event.target.value)
        this.setState({
            dontate: event.target.value
        })
    }
    

    handleSubmit = event => {
        event.preventDefault()
        if(this.state.dontate){
            updateHelp(this.props.user, true, this.props.match.params.id)
            .then(
                res => this.props.history.push("/situations")
            )
            .catch(error => console.error(error))
        }
        else
            this.props.history.push("/situations")

    }



    render(){
        return(
            <div>
                <div className="contact">
                <form className="feedback" onSubmit={this.handleSubmit}>
                <label>Donate</label>
                <input className="form" type="number" onChange={this.handelChange}/>
                {/* <input type="submit" /> */}
                <button type="submit"  className='btnn'><Link to="/situations"><span>Submit</span></Link></button>
                </form>
                </div>
                
            </div>
        )
    }
}
export default withRouter(Dontate)