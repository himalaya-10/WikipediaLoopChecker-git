import React from 'react'

export default function Alert(props) {
    return (
        <div className="absolute z-40"style={{height: '50px'}}>
        {
            props.msg&&<div className="alert alert-success text-white m-2 bg-red-500 p-1 rounded-sm" role="alert">
                {props.msg}
                </div>
        }
        </div>
    )
}
