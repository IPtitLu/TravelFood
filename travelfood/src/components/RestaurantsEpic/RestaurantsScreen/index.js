import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';
import {fetchRestaurants} from '../../../api/restaurants';
import {useSelector} from "react-redux";
import {useDispatch} from 'react-redux';

import {getRestaurants} from '../../../redux/selectors';
import RestaurantsListItem from './RestaurantsListItem';

const RestaurantsListScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const restaurants = useSelector(getRestaurants);

    useEffect(() => {
        fetchRestaurants(dispatch)
    }, [])

    const _renderItem = ({item}) => {
        return <RestaurantsListItem item={item} navigation={navigation}/>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={restaurants}
                renderItem={_renderItem}
            >
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    }
})

export default RestaurantsListScreen;