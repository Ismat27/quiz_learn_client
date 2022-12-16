import React, { useState, useContext } from 'react'
import { Context } from '../../../app/AppContext'
import InputOption from '../components/InputOption'
import PointOption from '../components/PointOption'
import '../styles/Question.css'

const BASE_URL = process.env.REACT_APP_BASE_API_URL

const NewQuestion = () => {

    const { token } = useContext(Context)
    const initialData = {
        text: "",
        option_a: "",
        option_b: "",
        option_c: "",
        option_d: "",
        answer: "",
        cp_wrong: 0,
        cp_right: 20,
        cap_wrong: 7,
        cap_right: 15,
    }
    
    const [data, setData] = useState(initialData)

    const getFormData = (event) => {
        const {name, value} = event.target
        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const formSubmit = (event) => {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${token}`  },
            body: JSON.stringify(data)
        };
        fetch(`${BASE_URL}/questions/`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setData(initialData)
                    console.log('success');
                }
                else {
                    console.log('failed');
                    console.log(data);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

  return (
    <div className='formQuestion-container'>
        <form onSubmit={formSubmit}>
            <div className='form-field'>
                <label className='' htmlFor='text'>Question:</label>
                <textarea rows={15} name='text' id='text' value={data.text} onChange={getFormData}/>
            </div>
            <InputOption name={'answer'} value={data.answer} change={getFormData}/>
            <div className='options'>
                <InputOption name='option_a' value={data.option_a} change={getFormData}/>
                <InputOption name='option_b' value={data.option_b} change={getFormData}/>
                <InputOption name='option_c' value={data.option_c} change={getFormData}/>
                <InputOption name='option_d' value={data.option_d} change={getFormData}/>
            </div>
            <div className="points">
                <PointOption name='cap_right' value={data.cap_right} change={getFormData}/>
                <PointOption name='cap_wrong' value={data.cap_wrong} change={getFormData}/>
                <PointOption name='cp_right' value={data.cp_right} change={getFormData}/>
                <PointOption name='cp_wrong' value={data.cp_wrong} change={getFormData}/>
            </div>
            <button type='submit' className='btn submit-btn'>submit</button>
        </form>
    </div>
  )
}

export default NewQuestion