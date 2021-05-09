import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function IngredientsPastille({item}) {
        if (item.nutriscore >= 70) {
            return(
                <View style={styles.nutriscoreContainer}>
                    <Text>Nutriscore : {item.nutriscore}</Text>
                    <View style={styles.pastille1}></View>
                </View>
            ); 
        } else if ((item.nutriscore < 70) && (item.nutriscore >= 50)) {
            return(
                <View style={styles.nutriscoreContainer}>
                    <Text>Nutriscore : {item.nutriscore}</Text>
                    <View style={styles.pastille2}></View>
                </View>
            ); 
        } else {
            return(
                <View style={styles.nutriscoreContainer}>
                    <Text>Nutriscore : {item.nutriscore}</Text>
                    <View style={styles.pastille3}></View>
                </View>
            ); 
        }
}

const styles = StyleSheet.create({
    nutriscoreContainer: {
        flexDirection: "row",
        alignItems: "center"
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