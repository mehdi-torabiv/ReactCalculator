import React from 'react';
import './Button.css';
const isOperator = (val) => {
    return !isNaN(val) || val === '=' || val === '.';
}
const Button = (props) => {
    return (
        <button className={`buttonWrapper ${isOperator(props.children) ? null : 'operator'}`}
            onClick={() => {
                props.handleClick(props.children)
            }}>
            {props.children}
        </button>
    );
}

export default Button;
