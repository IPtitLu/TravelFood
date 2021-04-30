import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const IngredientsListItem = ({item, navigation}) => { 
    return (
        <View style={styles.container}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderBottomWidth: 0.2,
        borderBottomColor: "grey",
        paddingTop: 10,
        paddingBottom: 10,
        alignContent: 'center', 
        justifyContent: 'center',
        borderBottomWidth: 0.2,
        borderBottomColor: "grey",
    }
})

export default IngredientsListItem