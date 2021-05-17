import e from 'cors';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import ImgRender from './imgRender';

const URL_IMAGE = "https://spoonacular.com/recipeImages/"

const RestaurantsListItem = ({item, navigation}) => { 


    return (
        <TouchableOpacity 
                onPress={() => {
                    navigation.navigate("RestaurantDetails", {
                        id: item.id
                    });
                }}>
            <View style={styles.container}>
                <ImgRender restaurantImg={item.img}/>
                <View style={styles.content}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.city}>{item.city}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
    },
    content:{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between"
    },
    name: {
        width: 215,
        textAlign: 'center',
        fontWeight: "bold",
    },
    city: {
        width: 215,
        textAlign: 'center'
    }
})

export default RestaurantsListItem