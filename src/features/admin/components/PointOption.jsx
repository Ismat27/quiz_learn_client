import React from 'react'

const PointOption = ({name, value, change}) => {
    return (
        <div className='form-field point-option'>
            <label htmlFor={name}>{name}</label>
            <input 
                type="number" 
                id={name} 
                name={name} 
                value={value} 
                onChange={(event) => change(event)} 
                min={0} 
            />
        </div>
    )
}

export default PointOption