const InputOption = ({name, value, change}) => {
  return (
    <div className='form-field'>
        <label htmlFor={name}>{name}</label>
        <input 
            type="text" 
            id={name} 
            value={value}
            name={name}
            onChange={(event) => change(event)} 
        />
    </div>
  )
}

export default InputOption