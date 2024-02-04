import {View,FlatList,StyleSheet} from 'react-native'
import React from 'react'
import MealItem from './MealItem';

const MealList = ({items}) => {
    const renderMealItem=(itemData)=>{
        const item=itemData.item;
        const mealItemsProps={
        Title:item.title,
        imageUrl:item.imageUrl,
        complexity:item.complexity,
        affordability:item.affordability,
        duration:item.duration,
        id:item.id
    }
        return <MealItem 
        {...mealItemsProps}
        />
}
    return(
        <View style={styles.container}>
          <FlatList
          data={items}
          keyExtractor={(item)=> item.id}
          renderItem={renderMealItem}
          />
        </View>
        )

}

export default MealList


const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    }
})