import Image from 'next/image';
import styles from './Background.module.scss';

const backgroundItems = [
    { name: 'ball', src: '/background/ball.svg', className: styles.ball, size: 100 },
    { name: 'cloud1', src: '/background/left1.svg', className: styles.cloud1, size: 450 },
    { name: 'cloud2', src: '/background/left2.svg', className: styles.cloud2, size: 250 },
    { name: 'cloud3', src: '/background/right3.svg', className: styles.cloud3, size: 200 },
    { name: 'cloud4', src: '/background/right4.svg', className: styles.cloud4, size: 350 },
    { name: 'cloud5', src: '/background/right5.svg', className: styles.cloud5, size: 450 },
    { name: 'floor1', src: '/background/floor1.svg', className: styles.floor1, size: null },
    { name: 'floor2', src: '/background/floor2.svg', className: styles.floor2, size: null },
    { name: 'floor3', src: '/background/floor3.svg', className: styles.floor3, size: null },
];

export function Background() {
    return (
        <div className={styles.background}>
            {backgroundItems.map((item) => (
                item.size === null ? 
                <Image
                    key={item.name}
                    src={item.src}
                    alt={item.name}
                    width={100}
                    height={100}
                    style={{ width: '100%', height: 'auto' }}
                    className={`${styles.item} ${item.className} mode `}
                    priority
                /> : 
                <Image
                    key={item.name}
                    src={item.src}
                    alt={item.name}
                    width={item.size}
                    height={item.size}
                    className={`${styles.item} ${item.className} mode `}
                    priority
                />
            ))}
        </div>
    );
}
