import {fetchSelectedRestaurantAction} from '../../redux/actions';

import {fs} from '../../../firebase';

export const fetchSelectedRestaurant = async (dispatch, id) => {

        const idRestaurant = id.toString()

        
        fs.collection("restaurants").doc(idRestaurant).get().then(doc => {
        
            const restaurantSelected = [];
            if (!doc.exists) {
            } else {
                restaurantSelected.push({
                    id: doc.data().id,
                    name: doc.data().name,
                    city: doc.data().city,
                    img: doc.data().img,
                    type: doc.data().type
                });

                const test = []

                test.push(doc.data().recipes)

                dispatch(fetchSelectedRestaurantAction(restaurantSelected))
            }
        });

};
