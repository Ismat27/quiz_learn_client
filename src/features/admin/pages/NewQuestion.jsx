import React, { useState } from 'react'
import InputOption from '../components/InputOption'
import PointOption from '../components/PointOption'
const NewQuestion = () => {
    
    const [data, setData] = useState({
        text: "",
        option_a: "",
        option_b: "",
        option_c: "",
        option_d: "",
        answer: "",
        cp_wrong: 0,
        cp_right: 0,
        cap_wrong: 0,
        cap_right: 0,
    })

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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://127.0.0.1:8000/question/', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log('success');
                }
                else {
                    console.log('failed');
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

  return (
    <div>
        <form onSubmit={formSubmit}>
            <div className='form-field'>
                <label className='' htmlFor='text'>Question:</label>
                <textarea name='text' id='text' value={data.text} onChange={getFormData}/>
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