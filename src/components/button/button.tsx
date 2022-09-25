import { CSSProperties } from 'react'
import styles from './button.module.css';

type Props = {
    value?: string,
    style?: CSSProperties,
    action?: () => void
}

export default function Subtitle(props:Props) {
    const {value="🎉 Create my event", style, action} = props;

    return(
        <div onClick={action} className={styles.basic} style={styles}>
            <p>{value}</p>
        </div>
    );
}