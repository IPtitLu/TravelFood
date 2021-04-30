import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';
import {fetchRecipes} from '../../../api/recipes';
import {useSelector} from "react-redux";
import {useDispatch} from 'react-redux';

import {getRecipes} from '../../../redux/selectors';
import RecipeListItem from './RecipeListItem';

const RecipesListScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const recipes = useSelector(getRecipes);

    useEffect(() => {
        fetchRecipes(dispatch)
    }, [])

    const _renderItem = ({item}) => {
        return <RecipeListItem item={item} navigation={navigation}/>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
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

export default RecipesListScreen;