import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImgRenderRecipes from './imgRenderRecipes.js';

const RecipesOfRestaurantItem = ({item}) => { 

    return (
        <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.price}>{item.price}€</Text>
                </View>

                <ImgRenderRecipes recipeImg={item.img}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
    },
    content:{
        flexDirection: "column",
        alignContent: "center",
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 25,
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 25,
        width: 150
    }
})

export default RecipesOfRestaurantItem