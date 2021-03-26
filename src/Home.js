import React from 'react'
import { Route, Link} from 'react-router-dom'
import Form from './Form'


    export default function Home () {

        return (
            <div className = "homeContainer">

                <h1>
                    I am Home.js
                </h1>

                    <Link to= '/form'> Make a Pizza! </Link>

                    <Route path = '/form'>
                         <Form/>
                  </Route>

            </div>    

        )



    }