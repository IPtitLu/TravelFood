import {fetchSelectedRecipesAction} from '../../redux/actions';

import {fs} from '../../../firebase';

export const fetchRecipesOfRestaurant = async (dispatch, type) => {
        
        fs.collection("recipes").get().then((querySnapshot) => {


            const recipeSelected = [];

            

            querySnapshot.forEach((doc) => {
                
                const dataType = doc.data().type

                if(dataType == type) {
                    recipeSelected.push({
                        id: doc.data().id,
                        name: doc.data().name,
                        price: doc.data().price,
                        type: doc.data().type,
                        restaurant: doc.data().restaurant,
                        img: doc.data().img,
                    });

                


                    dispatch(fetchSelectedRecipesAction(recipeSelected))
                } else {
                }
            })
        });

};
