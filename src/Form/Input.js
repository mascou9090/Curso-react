import React from 'react'

const Input = ({label}) => {
  return (
    <div>
        <label>
            {label}
            <input type="text" />
        </label>
    </div>
  )
}

export default Input