import React from 'react'
import './ClearButton.css'

export const ClearButton = (props) => (
    <div 
    className="clear-btn"
    onClick={props.handleClear}
    >
        {/* props.children will pass on whatever is stated between the tags */}
        {props.children}
    </div>
)