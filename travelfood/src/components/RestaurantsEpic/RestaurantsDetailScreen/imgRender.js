import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import { irelande, gastro, thai, verdure } from '../../../../assets/images/restaurants';

export default function ImgRender({restaurantImg}) {

    const restaurantImgPath = [irelande, gastro, thai, verdure]

    const restaurantPath = restaurantImgPath.map((path) => {

        if (path === restaurantImg) {
            return(
                <View style={styles.containerImage}>
                    <Image source={path} resizeMode="cover" style={styles.image}></Image>
                </View>
            ); 
        }

    });

    

    return(restaurantPath)
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