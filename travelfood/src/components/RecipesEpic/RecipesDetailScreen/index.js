import React, {useEffect} from 'react';
import {View, Image, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {fetchSelectedRecipes} from '../../../api/recipes'
import {useDispatch, useSelector} from 'react-redux';
import {getSelectedRecipe} from '../../../redux/selectors';

const RecipesDetailScreen = ({route, navigation}) => {

    const {id} = route.params
    const dispatch = useDispatch();

    const recipe = useSelector(getSelectedRecipe);

    useEffect(() => {
        fetchSelectedRecipes(dispatch, id)
    }, [])

        console.log("test recettes : " + recipe.image);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={{uri: recipe.image}} resizeMode="cover" style={styles.image}></Image>
            </View>
            <Text style={styles.title}>{recipe.title}</Text>
            <View style={styles.containerIngredients}>
                <Text style={styles.ingredientsTitle}> List of ingredients for this recipe : </Text>
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
    title: {
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
        marginBottom: 20
    },
    ing: {
        textAlign: 'left',
        paddingBottom: 10,
    }
})

export default RecipesDetailScreen;