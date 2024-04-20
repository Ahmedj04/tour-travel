import React from 'react'

function Button({ text, customCSS }) {
    return (
        <button onClick={() => { alert("helo world") }} type="submit" className={` ${customCSS} p-4 bg-purple-600 rounded-md w-32 text-white text-lg cursor-pointer hover:bg-gray-800 hover:transition-bg hover:duration-300 ease-in`}>{text}</button>
    )
}

export default Button