import e from 'cors';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const URL_IMAGE = "https://spoonacular.com/recipeImages/"

const RecipeListItem = ({item, navigation}) => { 

    const img = require('../../../../assets/images/recipes/sushi.jpeg')
    return (
        <TouchableOpacity 
                onPress={() => {
                    navigation.navigate("RecipesDetails", {
                        id: item.id
                    });
                }}>
            <View style={styles.container}>
                <Image source={img} style={styles.image}></Image>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.price}>{item.price}€</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderBottomWidth: 0.2,
        borderBottomColor: "grey",
        paddingTop: 10,
        paddingBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    content:{
        flexDirection: "column",
        alignContent: "center",
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
        width: 300
    },
    type: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 25,
        width: 300
    },
    restaurant: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 25,
        width: 300
    } 
})

export default RecipeListItem