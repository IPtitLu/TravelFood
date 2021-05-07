import React, {useEffect} from 'react';
import {View, Image, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {fetchSelectedRecipes} from '../../../api/recipes'
import {useDispatch, useSelector} from 'react-redux';
import {getSelectedRecipes} from '../../../redux/selectors';

const RecipesDetailScreen = ({route, navigation}) => {

    const {id} = route.params
    const dispatch = useDispatch();

    const recipe = useSelector(getSelectedRecipes);

    useEffect(() => {
        fetchSelectedRecipes(dispatch, id)
    }, [])

        console.log("test recettes : " + recipe.name);

        const img = require('../../../../assets/images/recipes/ramens.jpeg')

    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={img} resizeMode="cover" style={styles.image}></Image>
            </View>
            <Text style={styles.name}>{recipe.name}</Text>
            <Text style={styles.price}>{recipe.price}</Text>
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