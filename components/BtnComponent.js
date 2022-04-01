
import {View, Text, Pressable, StyleSheet} from 'react-native'

const BtnComponent = (props) => {

    return(
        <View style={styles.outerContainer}>
            <Pressable android_ripple={{color: '#ccc'}} style={({pressed}) => 
            pressed 
            ? [styles.pressed, styles.container] 
            : styles.container }
            onPress={props.clickHandler}
            >
                <Text style={styles.btnText}>{props.children.toUpperCase()}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 28,
        marginVertical: 4,
        overflow: 'hidden'
    },
    container:{
        backgroundColor: '#72063c',
        paddingVertical:13,
        paddingHorizontal:16,
        elevation: 2,
    },
    btnText:{
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})

export default BtnComponent
