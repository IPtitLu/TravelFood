import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import { irelande, gastro, thai, verdure } from '../../../../assets/images/restaurants';

export default function ImgRender({restaurantImg}) {

    const restaurantsImgPath = [irelande, gastro, thai, verdure]

    const restaurantsPath = restaurantsImgPath.map((path) => {

        if (restaurantImg === path) {
            return(
                <Image source={path} resizeMode="cover" style={styles.image}></Image>
            ); 
        }

    });

    

    return(restaurantsPath)
}

const styles = StyleSheet.create({
    image: {
        width: 430,
        height: 250,
        marginBottom: 20
    },
})