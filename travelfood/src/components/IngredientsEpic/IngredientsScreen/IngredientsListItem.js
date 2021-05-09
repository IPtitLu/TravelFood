import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import IngredientsPastille from './IngredientsPastille' 

const IngredientsListItem = ({item, navigation}) => { 

    return (
        <View style={styles.container}>
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item}>{item.price}€</Text>
                <IngredientsPastille item={item}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderBottomWidth: 0.2,
        borderBottomColor: "grey",
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center', 
        justifyContent: 'center',
        borderBottomWidth: 0.2,
        borderBottomColor: "grey",
    }, 
    nutriscoreContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    item : {
        marginBottom: 10
    }, 
    pastille1: {
        backgroundColor: "green",
        width: 10,
        height: 10,
        borderRadius: 50,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    pastille2: {
        backgroundColor: "orange",
        width: 10,
        height: 10,
        borderRadius: 50,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center"
    },  
    pastille3: {
        backgroundColor: "red",
        width: 10,
        height: 10,
        borderRadius: 50,
        marginLeft: 10,
    } 
})

export default IngredientsListItem