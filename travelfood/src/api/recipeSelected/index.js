import {fetchSelectedRecipesAction} from '../../redux/actions';

import {fs} from '../../../firebase';

export const fetchSelectedRecipes = async (dispatch, id) => {

        const idRecipe = id.toString()
        
        fs.collection("recipes").doc(idRecipe).get().then(doc => {

            const recipeSelected = [];
            if (!doc.exists) {
            } else {
                recipeSelected.push({
                    id: doc.data().id,
                    name: doc.data().name,
                    price: doc.data().price,
                    type: doc.data().type,
                    restaurant: doc.data().restaurant
                });

                console.log("recette selectionnee dans l'api : " , recipeSelected)

                dispatch(fetchSelectedRecipesAction(recipeSelected))
            }
        });

};
