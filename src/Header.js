import React from 'react'
import { Link, Route, BrowserRouter as Router} from 'react-router-dom'
import Form from './Form'

export default function Header () {

    return (

        <Router>
            <div className = 'links'>
                <div className = 'navBar'>
                <h1>Walker Pizzaria</h1>
                    <div className = 'linkOne'>
                    <Link to= '/'>Home</Link>
                    </div>
                    <div className ='linkTwo'>

                    <Link to='/form'>Order Now!</Link>
                          <Route path='/form'>
                         <Form/>
                        </Route>
                    </div>
 

                </div>



            </div>


        </Router>

    
    )

}