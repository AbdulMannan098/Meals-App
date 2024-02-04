import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
const MealDetail = ({duration,complexity,affordability,style,textStyle}) => {
  return (
    <View style={[styles.details,style]}>
    <Text style={[styles.detailItems,textStyle]}>{`${duration}min`}</Text>
    <Text style={[styles.detailItems,textStyle]}>{`${complexity.toUpperCase()}`}</Text> 
    <Text style={[styles.detailItems,textStyle]}>{`${affordability.toUpperCase()}`}</Text>
</View>
  )
}
export default MealDetail

const styles=StyleSheet.create({
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:8,
    },
    detailItems:{
        marginHorizontal:4,
        fontSize:12,
    },
})