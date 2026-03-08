import React, { Component } from 'react';
import './Button.css';

// class Button extends Component {
//     render(abc = null) {
//         return <button className="Button">
//             <div className="ButtonInner">
//                 {abc}
//             </div>
//         </button>
//     }
// }

function Button({text, className, onClick,  ...props}) {

    return <button className={`Button ${className}`} onClick={onClick}>
        <div className="ButtonInner">
            {text}
        </div>
    </button>

}

export default Button;