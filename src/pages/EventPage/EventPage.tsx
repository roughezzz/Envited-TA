import styled from 'styled-components'
import image from '../../assets/images/image-2.png'
import { Headers, Subtitle, Button } from '../../components';
import styles from "./EventPage.module.css";
import {useNavigate} from 'react-router-dom'

const RootContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export default function EventPage() {
    const navigate = useNavigate();
    return(
        <RootContent >
            <div>    
                <Headers value="Birthday Bash"/>
                <p className={styles.nameText}>Hosted by <strong>Elysia</strong></p>
            </div>
            <img style={{objectFit: "contain", width: 400}} src={image} />
        </RootContent>
    );
}