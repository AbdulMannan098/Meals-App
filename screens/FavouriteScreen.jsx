import React, { useContext } from 'react'
import { Text } from 'react-native'
import MealList from '../components/mealsList/MealList'
import { FavoritesContext } from '../store/context/Favorites-context'
import { MEALS } from '../data/dummy-data'
import { StyleSheet } from 'react-native'
import { View,Text } from 'react-native'
import { useSelector } from 'react-redux'

const FavouriteScreen = () => {
  // const favoriteMealCtx=useContext(FavoritesContext)
  const favoriteMealIds=useSelector((state)=>state.favoriteMeals.ids)
  const favoriteMeals=MEALS.filter((meal)=>
  // favoriteMealCtx.ids.includes(meal.id)
  favoriteMealIds.includes(meal.id)
  );
  
  if(favoriteMeals.length===0){
    <View style={styles.rootContainer}>
      <Text style={styles.text}>
        You have no favorite meals here.
      </Text>
    </View>
  }
  return (
    <MealList items={favoriteMeals}/>
    )
}

export default FavouriteScreen;

const styles=StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    color:'white',
  }
})