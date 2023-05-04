
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
function SelectInputField({
  options,
  onChange,
  placeholder,
  name,
  value,
  label,
  error,
  onBlur,
  inputChangeHandler,
}) {
  return (
    <div className='input-filed'>
      <Autocomplete
        disablePortal
        onBlur={onBlur}
        name={name}
        getOptionLabel={(option) => option.value}
        options={options}
        value={value?.[name]}
        fullWidth
        onChange={onChange ? onChange : inputChangeHandler}
        renderInput={(params) => <TextField {...params} placeholder={placeholder} label={label} />}
      />
      <div className="text-danger">
        {error}
      </div>
    </div>
  )
}

export default SelectInputField
