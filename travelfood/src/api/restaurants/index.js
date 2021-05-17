import {fetchRestaurantsAction} from '../../redux/actions';

import {fs} from '../../../firebase';

export const fetchRestaurants = async (dispatch) => {
        
        fs.collection("restaurants").get().then((querySnapshot) => {
            const restaurants = []
                        querySnapshot.forEach((doc) => {
                            restaurants.push({
                                id: doc.data().id,
                                name: doc.data().name,
                                city: doc.data().city,
                                img: doc.data().img,
                            })
                            dispatch(fetchRestaurantsAction(restaurants))
                        });
                    });

};
