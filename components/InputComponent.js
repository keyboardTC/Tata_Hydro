import {TextInput, StyleSheet} from 'react-native'

const InputComponent = ({placeholder="Hello", keyboardType= "default", InputedText}) => {

    return (
         <TextInput  onChangeText={InputedText} keyboardType={keyboardType} placeholder={placeholder} style={styles.inputStyle}></TextInput>
    )
}

export default InputComponent

const styles= StyleSheet.create({
    inputStyle: {
        height: 40,
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#c1016b',
        marginVertical: 6,
        borderRadius: 28,
        paddingHorizontal: 18,
        color:'#72063c',
        fontWeight: 'bold',
    }
})