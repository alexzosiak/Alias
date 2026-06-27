import Image from 'next/image';
import styles from './Background.module.scss';

const backgroundItems = [
    { name: 'ball', src: '/background/ball.svg', className: styles.ball },
    { name: 'cloud1', src: '/background/left1.svg', className: styles.cloud1 },
    { name: 'cloud2', src: '/background/left2.svg', className: styles.cloud2 },
    { name: 'cloud3', src: '/background/right3.svg', className: styles.cloud3 },
    { name: 'cloud4', src: '/background/right4.svg', className: styles.cloud4 },
    { name: 'cloud5', src: '/background/right5.svg', className: styles.cloud5 },
    { name: 'floor1', src: '/background/floor1.svg', className: styles.floor1 },
    { name: 'floor2', src: '/background/floor2.svg', className: styles.floor2 },
    { name: 'floor3', src: '/background/floor3.svg', className: styles.floor3 },
];

export function Background() {
    return (
        <div className={styles.background}>
            {backgroundItems.map((item) => (
                <Image
                    key={item.name}
                    src={item.src}
                    alt=""
                    width={500}
                    height={500}
                    className={`${styles.item} ${item.className}`}
                    priority
                />
            ))}
        </div>
    );
}
