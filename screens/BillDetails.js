import {View, Text, StyleSheet, ScrollView} from 'react-native'
import BtnComponent from '../components/BtnComponent';
import SectionTitle from '../components/SectionTitle';


const BillDetails = ({route}) => {
    let onPeakCharge = 0.132;
    let offPeakCharge = 0.065;
    let midPeakCharge = 0.094;
    let onPeakUsage = 0.00;
    let offPeakUsage = 0.00;
    let midPeakUsage = 0.00;
    let totalConsumption = 0.00;
    let regulatory_charges = 0.00;
    let final_bill = 0.00;
    let HTS = 0.00
    let P_REBATE = 0.00
    const {accNum} = route.params.accInfo;
    const {hName} = route.params.accInfo;
    const {addr} = route.params.accInfo;
    const {onpeak} = route.params.hydroInfo;
    const {midpeak} = route.params.hydroInfo;
    const {offpeak} = route.params.hydroInfo;
    
    console.log(` passing ${accNum}`);
    function calculateBill() {
        onPeakUsage = Number(onpeak)*onPeakCharge;
        midPeakUsage = Number(midpeak)*midPeakCharge
        offPeakUsage = Number(offpeak)*offPeakCharge;
        totalConsumption = (onPeakUsage+midPeakUsage+offPeakUsage).toFixed(2);
        HTS = (totalConsumption*0.13).toFixed(2);
        P_REBATE = (totalConsumption*0.08).toFixed(2);
        regulatory_charges = (HTS-P_REBATE).toFixed(2);
        final_bill = (Number(totalConsumption)+Number(regulatory_charges)).toFixed(2);
    }

    calculateBill();
    console.log(` Total Bill: ${totalConsumption}`);
    console.log(` Final Bill: ${final_bill}`);

    return (
        <>
            <ScrollView style={styles.main_contaner}>
                <View style={styles.acc_container}>
                    <View>
                        <SectionTitle>Account Info</SectionTitle>
                    </View>
                    <View>
                        <Text style={styles.text_style}>
                            Holder's Name: <Text style={styles.btext_style}>{hName}</Text>
                        </Text>
                        <Text style={styles.text_style}>
                            Account Number: <Text style={styles.btext_style}> {accNum}</Text>
                        </Text>
                        <Text style={styles.text_style}>
                            Email Address:<Text style={styles.btext_style}> {addr}</Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.fee_container}>                    
                    <View>
                        <SectionTitle>Fee Info</SectionTitle>
                    </View>
                    <View>
                        <Text style={styles.text_style}>
                            Charges for On-peak ({onPeakCharge}/kWh) = $ {onPeakUsage} 
                        </Text>
                        <Text style={styles.text_style}>
                            Charges for Off-peak ({offPeakCharge}/kWh) = $ {offPeakUsage} 
                        </Text>
                        <Text style={styles.text_style}>
                            Charges for Mid-peak ({midPeakCharge}/kWh) = $ {midPeakUsage} 
                        </Text>
                        <Text style={styles.text_style}>
                            Total Consumption(TC) = $ {totalConsumption}
                        </Text>
                        <Text style={styles.text_style}>
                            HST (0.13%/TC) = {HTS}
                        </Text>
                        <Text style={styles.text_style}>
                            Provincial Rebate (0.08%/TC) = $ {P_REBATE}
                        </Text>
                        <Text style={styles.text_style}>
                            Total Regulatory Charges = $ {regulatory_charges}
                        </Text>
                        <Text style={styles.text_style}>
                            <Text style={styles.btext_style}>
                                Final Bill: 
                            </Text>  
                            <Text style={[{color:'red', fontSize: 25}, styles.btext_style]}>
                                 {` $${final_bill}`}
                            </Text>
                        </Text>
                    </View>
                </View>
    
                <View style={styles.btn_container}>
                    <BtnComponent>PAY NOW</BtnComponent>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    main_contaner: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical:20,
        marginHorizontal:15,
        backgroundColor:'#fce8f6',
        elevation: 14,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0, height: 20},
        shadowRadius:8
    },
    acc_container: {
        marginBottom: 20
    },
    fee_container: {
        marginBottom: 20
    },
    btn_container: {
        marginTop: 20
    },
    text_style:{
        marginVertical: 4,
        fontSize: 16,
    },
    btext_style:{
        fontWeight: 'bold'
    },
});

export default BillDetails