import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import { boeuf, burger, pasta, cake, pancake, ramens, ratatouille, salad, saumon, soupe, sushi } from '../../../../assets/images/recipes';

export default function ImgRender({recipeImg}) {

    const recipesImgPath = [boeuf, burger, pasta, cake, pancake, ramens, ratatouille, salad, saumon, soupe, sushi]

    const recipePath = recipesImgPath.map((path) => {

        if (recipeImg === path) {
            return(
                <Image source={path} style={styles.image}></Image>
            ); 
        }

    });

    

    return(recipePath)
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20
    },
})