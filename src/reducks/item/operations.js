import API from '../../API';
import { fetchItemAction} from './actions';

const api = new API();

export const fetchItems =()=> {
    return async dispatch => {
        return api
            .getItems()
            .then(item => {
                dispatch(fetchItemAction(item));
            })
            .catch(error => {
                alert('Failed to connect API: /items/');
            });
    };
};