import React, {useState} from 'react'
import Pizza from './Pizza'
import axios from 'axios'


const initialOrderValues = {

    name: '',
    size: '',
    pepporoni: false,
    onions: false,
    pinapple: false,
    jalepenos: false,
    specialIntructions: '',

}

const initialOrderErrors = {
    name: '',
    size: '',
}

export default function Form () {

    const [orderValues, setOrderValues] = useState(initialOrderValues)
    const [orderErrors, setOrderErrors] = useState(initialOrderErrors)
    const [disabled, setDisabled] = useState(true)

    const postOrder = order => {
        axios.post('https://reqres.in/api/pizza', order)
        .then(res =>{
            setOrderValues(res.data)
        })
        .catch(err =>{
            console.log(err, "error!!!")

        })
        setOrderValues(initialOrderValues)

    }

    const onSubmit = evt =>{
        evt.preventDefault()
        postOrder(orderValues)
    }

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        inputChange(name, valueToUse);
    }; 

    const inputChange = (name, value) =>{
    
        setOrderValues({
            ...orderValues,
            [name]: value, 
    })
    
    }

    return(
        <div className = "Form">





        </div>
    )

}