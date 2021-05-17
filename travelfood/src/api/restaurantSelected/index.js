import {fetchSelectedRestaurantAction} from '../../redux/actions';

import {fs} from '../../../firebase';

export const fetchSelectedRestaurant = async (dispatch, id) => {

        const idRestaurant = id.toString()

        
        fs.collection("restaurants").doc(idRestaurant).get().then(doc => {

        console.log("selected restaurant api : ", idRestaurant)
        
            const restaurantSelected = [];
            if (!doc.exists) {
            } else {
                restaurantSelected.push({
                    id: doc.data().id,
                    name: doc.data().name,
                    city: doc.data().city,
                    img: doc.data().img,
                });

                console.log("result of api : ", restaurantSelected)

                dispatch(fetchSelectedRestaurantAction(restaurantSelected))
            }
        });

};
