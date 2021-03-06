import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {fetchSelectedRecipes} from '../../../api/recipeSelected'
import {useDispatch, useSelector} from 'react-redux';
import {getSelectedRecipes} from '../../../redux/selectors';
import ImgRender from './imgRender';

const RecipesDetailScreen = ({route, navigation}) => {

    const {id} = route.params
    
    const dispatch = useDispatch();
    const recipes = useSelector(getSelectedRecipes);


    useEffect(() => {
        fetchSelectedRecipes(dispatch, id)
    }, [])

    const recipeSelected = recipes[0];

    
    return (
        <ScrollView style={styles.container}>
            <ImgRender recipeImg={recipeSelected && recipeSelected.img}/>
            <Text style={styles.name}>{recipeSelected && recipeSelected.name}</Text>
            <Text style={styles.price}>{recipeSelected && recipeSelected.price}€</Text>
            <View style={styles.containerIngredients}>
                <Text style={styles.ingredientsTitle}> List des ingrédients de ce plat : </Text>
                {/*
                {recipe.extendedIngredients.map(ing => {
                    return <Text style={styles.ing}>{ing.name}</Text>
                })}
                */}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: "flex",
    }, 
    containerImage: {
        flex: 1,
    },
    image: {
        height: 200,
    },
    name: {
        fontWeight: "bold",
        fontSize: 26,
        textAlign:"center",
        marginVertical: 40,
    },
    price: {
        fontWeight: "bold",
        fontSize: 26,
        textAlign:"center",
        marginVertical: 40,
    },
    containerIngredients: {
        display: "flex",
        justifyContent: "center",
        flex: 3,
        borderTopWidth: 0.2,
        borderColor: "grey",
        marginHorizontal: 50,

    },
    ingredientsTitle: {
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 20,
        alignSelf: "center"
    },
    ing: {
        textAlign: 'left',
        paddingBottom: 10,
    }
})

export default RecipesDetailScreen;