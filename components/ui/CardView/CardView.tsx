import styles from './CardView.module.scss';

export const CardView = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            <section className={styles.menu}>
                {children}
            </section>
        </div>
    );
};

