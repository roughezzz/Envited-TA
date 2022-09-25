import { CSSProperties } from 'react'
import styles from './headers.module.css';

type Props = {
    value: string,
    style?: CSSProperties,
    className?: string
}

export default function Headers(props:Props) {
    const {value, style, className} = props;

    return(
        <>
            <p className={className ? className : styles.basic} style={style}>{value}</p>
        </>
    );
}