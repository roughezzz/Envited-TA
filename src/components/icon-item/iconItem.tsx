import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import styles from './button.module.css';

type Props = {
    icon:any,
    style?: CSSProperties,
    action?: () => void
}

export default function Subtitle(props:Props) {
    const {icon, style, action} = props;

    return(
        <div>
            <span className={styles.iconBody}>
                <img src={icon}  />
            </span>
        </div>
    );
}