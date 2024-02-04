import React, { useContext, useLayoutEffect } from 'react'
import { Image, View,Text, StyleSheet, ScrollView, Button} from 'react-native'
import {MEALS} from '../data/dummy-data'
import MealDetail from '../components/MealDetail'
import Subtitle from '../components/mealDetail/Subtitle'
import List from '../components/mealDetail/List'
import IconButton from '../components/IconButton'
import { FavoritesContext } from '../store/context/Favorites-context'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorites, removeFavorites } from '../store/redux/favorites'


const MealDetailScreen = ({route,navigation}) => {
    // const favoriteMealCtx=useContext(FavoritesContext);
    const favoriteMealIds=useSelector((state)=>state.favoriteMeals.ids);
    let dispatch=useDispatch();

    const mealId=route.params.mealId
    const selectedMeal=MEALS.find((meal)=>meal.id===mealId)
    
    // const mealIsFavorite=favoriteMealCtx.ids.includes(mealId)
    const mealIsFavorite=favoriteMealIds.includes(mealId)

    const changeFavoriteStatusHandler=()=>{
    if(mealIsFavorite){
        // favoriteMealCtx.removeFavorite(mealId);
        dispatch(removeFavorites({id:mealId}))
    }else{
        // favoriteMealCtx.addFavorite(mealId);
        dispatch(addFavorites({id:mealId}))
    }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return (
                    <IconButton 
                    icon={mealIsFavorite ? 'star' : 'star-outline'} 
                    color="white" 
                    onPress={changeFavoriteStatusHandler}/>
                    )
            }
        })})
  
    return (
    <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri:selectedMeal.imageUrl}}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
    />
        <View style={styles.listOuterContainer}>   
        <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients}/>
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps}/>
        </View>
        </View>
    </ScrollView>
    )
}

export default MealDetailScreen;

const styles=StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
    image:{
        width:'100%',
        height:350,
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:'white'
    },
    detailText:{
        color:'white'
    },
    listOuterContainer:{
        alignItems:'center'
    },
    listContainer:{
        maxWidth:'80%'
    }
})