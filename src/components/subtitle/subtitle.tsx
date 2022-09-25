import { CSSProperties } from 'react'
import styles from './subtitle.module.css';

type Props = {
    value: string,
    style?: CSSProperties
}

export default function Subtitle(props:Props) {
    const {value, style} = props;

    return(
        <>
            <p className={styles.basic} style={style}>{value}</p>
        </>
    );
}