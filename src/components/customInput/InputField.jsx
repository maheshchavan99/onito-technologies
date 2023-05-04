import './inputfield.css'
import TextField from '@mui/material/TextField';
function InputField({
    label,
    name,
    placeholder,
    onChange,
    value,
    onBlur,
    error,
    maxLength,

}) {
    return (
        <div className='input-filed'>
            <TextField
                type="text"
                name={name}
                label={label}
                placeholder={placeholder}
                variant="outlined"
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                fullWidth
                maxLength={maxLength}
            />
            <div className="text-danger">
                {error}
            </div>
        </div>
    )
}

export default InputField
