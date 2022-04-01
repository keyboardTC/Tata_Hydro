import InputComponent from "./InputComponent"
import BtnComponent from "./BtnComponent"
import SectionTitle from "./SectionTitle"
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const HydroDetails = ({goToBill}) => {
const navigation = useNavigation();

    const [onPeak, setOnPeak] = useState('undefined');
    const [midPeak, setMidPeak] = useState('undefined');
    const [offPeak, setOffPeak] = useState('undefined');

    function pressHandler() {
        console.log('HydroDetails Button pressed');
        console.log(`On-Peak num ${onPeak}`);
        console.log(`Mid-Peak num ${midPeak}`);
        console.log(`Off-Peak num ${offPeak}`);
        const hydroInfo = {onpeak: onPeak, midpeak: midPeak, offpeak:offPeak};
        goToBill(hydroInfo);
    }

    return(
        <>
            <SectionTitle>Hydro Comsumption Details</SectionTitle>
            <InputComponent InputedText={setOnPeak} placeholder="On-Peak Usage (kWh)" keyboardType="decimal-pad"/>
            <InputComponent InputedText={setMidPeak} placeholder="Mid-Peak Usage (kWh)" keyboardType="decimal-pad"/>
            <InputComponent InputedText={setOffPeak} placeholder="Off-Peak Usage (kWh)" keyboardType="decimal-pad"/>
            <BtnComponent clickHandler={pressHandler}>CALCULATE BILL</BtnComponent>
        </>
    )
}

export default HydroDetails