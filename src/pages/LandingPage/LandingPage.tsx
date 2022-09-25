import styled from 'styled-components'
import image from '../../assets/images/image-1.png'
import { Headers, Subtitle, Button } from '../../components';
import styles from "./LandingPage.module.css";
import {useNavigate} from 'react-router-dom'

const RootContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 160px
`;

export default function LandingPage() {
    const naviagte = useNavigate();

    return(
        <RootContent >
            <img style={{objectFit: "contain", width: 400}} src={image} />
            <div className={styles.secondContainer}>
                <div style={{textAlign: 'end', width: '574px'}}>
                    <Headers value="Imagine if"/>
                    <Headers value="Snapchat" className={styles.gradientText}/>
                    <Headers value="had events"/>
                </div>
                <div style={{width: '520px', textAlign: 'end', marginTop: 16}}>
                    <Subtitle value="Easily host and share events with your friends across any social media."/>
                </div>
                <div style={{marginTop: 52}}>
                    <Button action={() => naviagte('/event')} />
                </div>
            </div>
        </RootContent>
    );
}