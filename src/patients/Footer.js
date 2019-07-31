import React , {Component} from 'react'
import {Link , Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import './Footer.css'

const Footer = () =>(
  
            <div>
                <div className="info">
                 <Route path="/about" component={About} />
                 <Route path="/contact" component={Contact} />
                 </div>
                <footer>
                 <p className="copyright"> Copyright &copy;2019 Be a Giver </p>
                </footer>
                
            </div>
    
    )

export default Footer 