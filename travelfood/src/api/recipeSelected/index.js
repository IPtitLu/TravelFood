import {fetchSelectedRecipesAction} from '../../redux/actions';

import {fs} from '../../../firebase';

export const fetchSelectedRecipes = async (dispatch, recipeId) => {
        
        fs.collection("recipes").doc(recipeId.toString()).get().then(doc => {

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

                console.log("recette selectionnée : ", recipeSelected)
                dispatch(fetchSelectedRecipesAction(recipeSelected))
            }
        });

};
