import {View,Text,StyleSheet} from 'react-native'
const Subtitle=({chilren})=>{
    return(
        <View style={styles.subtitlecontainer}>
        <Text style={styles.subtitle}>{chilren}</Text>
        </View>
    )
}
export default Subtitle
const styles=StyleSheet.create({
    subtitle:{
        color:'#e2b497',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
    },
    subtitlecontainer:{
        padding:6,
        marginHorizontal:12,
        marginVertical:4,
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
    }
})