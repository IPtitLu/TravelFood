import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import { boeuf, burger, pasta, cake, pancake, ramens, ratatouille, salad, saumon, soupe, sushi } from '../../../../assets/images/recipes';

export default function ImgRender({recipeImg}) {

    const recipesImgPath = [boeuf, burger, pasta, cake, pancake, ramens, ratatouille, salad, saumon, soupe, sushi]

    const recipePath = recipesImgPath.map((path) => {

        if (path === recipeImg) {
            return(
                <View style={styles.containerImage}>
                    <Image source={path} resizeMode="cover" style={styles.image}></Image>
                </View>
            ); 
        }

    });

    

    return(recipePath)

    /* 
    if (recipeName === boeuf) {
            console.log(ImgId)
            return(
                <View style={styles.containerImage}>
                    <Image source={IMAGENAME} resizeMode="cover" style={styles.image}></Image>
                </View>
            ); 
    } else {
            return(
            <View><Text>False</Text></View>
            )
    }
    */
}

const styles = StyleSheet.create({
    containerImage: {
        flex: 1,
    },
    image: {
        height: 200,
        width: 500,
    }
})