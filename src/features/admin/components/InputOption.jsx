const InputOption = ({name, value, change}) => {
  return (
    <div className='form-field'>
        <label htmlFor={name}>{name.replace('_', ' ')}</label>
        <textarea 
            type="text"
            rows={5}
            id={name} 
            value={value}
            name={name}
            onChange={(event) => change(event)} 
        />
    </div>
  )
}

export default InputOption