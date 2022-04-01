import { Text, StyleSheet } from "react-native"

const SectionTitle = (props) => {

    return (
        <Text style={styles.TitleText}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    TitleText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 28,
        marginVertical: 5
    }
})

export default SectionTitle