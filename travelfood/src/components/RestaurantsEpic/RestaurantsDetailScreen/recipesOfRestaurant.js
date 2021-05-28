import e from 'cors';
import React, {useEffect, useState}  from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import ImgRender from '../../RecipesEpic/RecipesListScreen/imgRender';
import {fetchRecipesOfRestaurant} from '../../../api/recipesOfRestaurant';
import {useSelector} from "react-redux";
import {useDispatch} from 'react-redux';

import RecipesOfRestaurantItem from './recipesOfRestaurantItem';

import {getSelectedRecipes} from '../../../redux/selectors';

const RecipesOfRestaurant = ({type}) => { 

    const dispatch = useDispatch();
    const recipes = useSelector(getSelectedRecipes);


    useEffect(() => {
        fetchRecipesOfRestaurant(dispatch, type)
    }, [])


    const _renderItem = ({item}) => {
        return <RecipesOfRestaurantItem item={item}/>
    }

    return (
            <View style={styles.container}>
                <FlatList
                    data={recipes}
                    renderItem={_renderItem}
                >
                </FlatList>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: "center",
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

export default RecipesOfRestaurant