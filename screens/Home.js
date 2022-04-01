import { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import AccountInfo from '../components/AccountInfo';
import HydroDetails from '../components/HydroDetails';

const Home = ({navigation, route}) => {

    const [accdetails, setAccDetails] = useState({
        accNum:"N/A",
        hName:"N/A",
        addr:"N/A"
    });

    function goToBillScreen(hydroInfo) {
        navigation.navigate('BillDetailsScreen',{ hydroInfo: hydroInfo, accInfo: accdetails });
    }

    return(
        <ScrollView style={styles.main_container}>
            <View style={styles.acc_container}>
                <AccountInfo setAccDetail={setAccDetails}/>
            </View>
            <HydroDetails navigation={navigation} goToBill={goToBillScreen}></HydroDetails>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
        padding: 20
    },
    acc_container:{
        marginBottom:20
    }
})

export default Home