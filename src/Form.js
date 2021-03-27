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

        <form onSubmit = {onSubmit}>
            <div className = "Form">
                <h3>Make your pizza!</h3>
            <label>
                Name
            
                <input value={orderValues.name}
                onChange={onChange}
                name='name'
                type='text'/>
        </label>
        <div className = 'dropdown'>

        <label>
             <select
                  name='size'
                  value={orderValues.size}
                  onChange={onChange}>
                      <option>----Must select a size----</option>
                      <option value="xl">Extra Large</option> 
                      <option value="lrg">Large</option>
                      <option value="med">Medium</option>
                      <option value="small">Small</option>
            </select>
        </label>
        </div>

        <label> Pepperoni
            <input
             type="checkbox"
             name="pepperoni"
             checked={orderValues.pepperoni}
             onChange={onChange}/>

        </label>

        <label> Onions
        <input
            type="checkbox"
            name="onions"
            checked={orderValues.onions}
            onChange={onChange}/>

        </label>
            <label> Pineapple
         <input
            type="checkbox"
            name="pineapple"
            checked={orderValues.pineapple}
            onChange={onChange}/>
            </label>

            <label> Jalepenos
        <input
            type="checkbox"
            name="jalepenos"
            checked= {orderValues.jalepenos}
            onChange={onChange} />

             </label>

        <h2>Special Instructions</h2>
            <textarea className='textarea'
                name="specialInstructions"
                value={orderValues.textarea}
                onChange={onChange}
                placeholder="Any other requirements?" rows ="4" cols="50"/>
        </div>

        </form>
    )

}