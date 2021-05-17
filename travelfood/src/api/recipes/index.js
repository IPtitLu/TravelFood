import {fetchRecipesAction} from '../../redux/actions';

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
                                img: doc.data().img,
                            })
                            dispatch(fetchRecipesAction(recipes))
                        });
                    });

};
