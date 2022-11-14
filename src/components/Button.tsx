import React, { FC } from 'react';

interface ButtonProps {
    [key: string]: any
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button {...children}>
            {children}
        </button>
    )
}

export default Button;