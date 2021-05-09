import React, {useEffect} from 'react';
import {View, Image, Text, StyleSheet, Button, ScrollView, FlatList} from 'react-native';
import {fetchIngredients} from '../../../api/ingredients'
import {useDispatch, useSelector} from 'react-redux';

import {getIngredients} from '../../../redux/selectors';
import IngredientsListItem from './IngredientsListItem';

const IngredientsScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const ingredients = useSelector(getIngredients);

    useEffect(() => {
        fetchIngredients(dispatch)
    }, [])

    const _renderItem = ({item}) => {
        return <IngredientsListItem item={item} navigation={navigation}/>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={ingredients}
                renderItem={_renderItem}
            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: "flex",
        flexDirection: "column",
    }
})

export default IngredientsScreen;