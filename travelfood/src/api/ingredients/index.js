import {fetchIngredientsAction} from '../../redux/actions';

import {fs} from '../../../firebase';

export const fetchIngredients = async (dispatch) => {

        
        
        fs.collection("ingredients").get().then((querySnapshot) => {
            const ingredients = []
                        querySnapshot.forEach((doc) => {
                            ingredients.push({
                                id: doc.data().id,
                                name: doc.data().name,
                                price: doc.data().price,
                            })
                            dispatch(fetchIngredientsAction(ingredients))
                        });
                    });

};
