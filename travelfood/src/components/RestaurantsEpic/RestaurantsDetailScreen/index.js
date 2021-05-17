import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {fetchSelectedRestaurant} from '../../../api/restaurantSelected'
import {useDispatch, useSelector} from 'react-redux';
import {getSelectedRestaurant} from '../../../redux/selectors';
import ImgRender from './imgRender';

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
            <View style={styles.containerIngredients}>
                <Text style={styles.ingredientsTitle}> List des plats de ce restaurant : </Text>
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
    city: {
        fontSize: 22,
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

export default RestaurantsDetailScreen;