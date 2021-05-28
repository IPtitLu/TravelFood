import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {fetchSelectedRestaurant} from '../../../api/restaurantSelected'
import {useDispatch, useSelector} from 'react-redux';
import {getSelectedRestaurant} from '../../../redux/selectors';
import ImgRender from './imgRender';
import RecipesOfRestaurant from './recipesOfRestaurant';

const RestaurantsDetailScreen = ({route, navigation}) => {

    const {id} = route.params
    
    const dispatch = useDispatch();
    const restaurant = useSelector(getSelectedRestaurant);


    useEffect(() => {
        fetchSelectedRestaurant(dispatch, id)
    }, [])

    const restaurantSelected = restaurant[0];
    
    return (
        <ScrollView style={styles.container}>
            <ImgRender restaurantImg={restaurantSelected && restaurantSelected.img}/>
            <Text style={styles.name}>{restaurantSelected && restaurantSelected.name}</Text>
            <Text style={styles.city}>{restaurantSelected && restaurantSelected.city}</Text>
            <View style={styles.containerRecipes}>
                <Text style={styles.recipesTitle}> List des plats de ce restaurant : </Text>
                <RecipesOfRestaurant type={restaurantSelected && restaurantSelected.type}/>
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
    city: {
        fontSize: 22,
        textAlign:"center",
        marginVertical: 40,
    },
    containerRecipes: {
        display: "flex",
        justifyContent: "center",
        flex: 3,
        borderTopWidth: 0.2,
        borderColor: "grey",
    },
    recipesTitle: {
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 20,
        alignSelf: "center"
    }
})

export default RestaurantsDetailScreen;