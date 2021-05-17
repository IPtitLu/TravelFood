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