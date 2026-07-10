import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

export function Button({ children, className = '', ...props }: ButtonProps) {
    return (
        <button className={`${styles.button} ${className}`} {...props}>
            {children}
        </button>
    );
}
