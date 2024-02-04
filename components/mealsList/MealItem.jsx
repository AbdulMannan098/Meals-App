import { Image, Pressable, StyleSheet, Text, View,Platform } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import MealDetail from '../MealDetail'

const MealItem = ({id,Title,imageUrl,duration,complexity,affordability}) => {
    const navigation=useNavigation()
    const selectMealItemHandler=()=>{
        navigation.navigate('MealDetailScreen',{
            mealId:id
        }
            )
    }
    return (
    <View style={styles.MealItem}>
        <Pressable 
        android_ripple={{color:'#ccc'}}
        style={({pressed})=>[pressed ? styles.buttonPressed : null]}
        onPress={selectMealItemHandler}
        >
            <View style={styles.innerContainer}>
            <View>
                <Image source={{uri:imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{Title}</Text>
            </View>
            <MealDetail duration={duration}
            complexity={complexity}
            affordability={affordability}
            />
            </View>
        </Pressable>
    </View>
    )
}


export default MealItem

const styles=StyleSheet.create({
    MealItem:{
        margin:16,
        borderRadius:8,
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.35,
        shadowRadius:16,
        overflow:Platform.OS === 'android' ? 'hidden' :'visible',
    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden',
    },
    buttonPressed:{
        opacity:0.15
    },
    image:{ 
        width:'100%',
        height:200,
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8
    },
})