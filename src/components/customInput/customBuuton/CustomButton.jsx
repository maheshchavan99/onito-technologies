import React from 'react'
import './button.css'
function Button({updates,submit}) {
    return (
        <div className='button'>
            <button onSubmit={updates}
                className="btn btn-primary mt-4"
                type="submit"
            >
                {submit}
            </button>
        </div>
    )
}

export default Button
