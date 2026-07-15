import styles from './Button.module.scss';
import type { ButtonProps } from './Button.type';

export const Button = ({ children, className = '', ...props }: ButtonProps) => {
    return (
        <button className={`${styles.button} ${className}`} {...props}>
            {children}
        </button>
    );
}
