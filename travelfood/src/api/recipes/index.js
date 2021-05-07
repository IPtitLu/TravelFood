import {fetchRecipesAction, fetchSelectedRecipesAction} from '../../redux/actions';

import {fs} from '../../../firebase';

export const fetchRecipes = async (dispatch) => {

        
        
        fs.collection("recipes").get().then((querySnapshot) => {
            const recipes = []
                        querySnapshot.forEach((doc) => {
                            recipes.push({
                                id: doc.data().id,
                                name: doc.data().name,
                                price: doc.data().price,
                                restaurant: doc.data().restaurant,
                                type: doc.data().type,
                                image: doc.data().image,
                            })
                            dispatch(fetchRecipesAction(recipes))
                        });
                    });

};

export const fetchSelectedRecipes = async (dispatch, id) => {

        
            fs.collection("recipes").get().then((querySnapshot) => {
                const recipeSelected = []
                querySnapshot.forEach((doc) => {
                    if(doc.data().id === id) {
                        recipeSelected.push({
                                id: doc.data().id,
                                name: doc.data().name,
                                price: doc.data().price,
                                restaurant: doc.data().restaurant,
                                type: doc.data().type,
                                image: doc.data().image,
                            })
                    }     
                    dispatch(fetchSelectedRecipesAction(recipeSelected))
                        });
            });

};
