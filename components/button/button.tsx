import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{

}

const Button: React.FC<ButtonProps> = (props) => {
    const { children } = props;
    return <button type="button">{children}</button>
}
export default Button;
// 加上‘type’ 是ts3.8 的新语法 可以保证在编译时去掉，可以进行更好的优化
export type { ButtonProps };