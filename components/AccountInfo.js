import { useState } from 'react';
import BtnComponent from '../components/BtnComponent';
import InputComponent from '../components/InputComponent';
import SectionTitle from './SectionTitle';

const AccountInfo = (props) => {
    const [accNumber, setAccNumber] = useState('undefined');
    const [holderName, setHolderName] = useState('undefined');
    const [address, setAddress] = useState('undefined');

    function pressHandler() {
        console.log('Account Button pressed');
        const accInfo = {accNum: accNumber, hName: holderName, addr:address};
        props.setAccDetail(accInfo);
        console.log(`Account info ${accInfo.accNum}, ${accInfo.hName}, ${accInfo.addr}`);
    }

    return (
        <>
            <SectionTitle>Acount Info</SectionTitle>
            <InputComponent InputedText={setAccNumber} placeholder="Enter Account Number" keyboardType="number-pad"></InputComponent>
            <InputComponent InputedText={setHolderName}  placeholder="Account Holder's Name"></InputComponent>
            <InputComponent InputedText={setAddress} placeholder="Enter Address" keyboardType="email-address"></InputComponent>
            <BtnComponent clickHandler={pressHandler}>SAVE ACCOUNT INFO</BtnComponent>
        </>
    )
}

export default AccountInfo