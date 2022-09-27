import axios from 'axios';
const LOGIN_USER_KEY = 'WD_FORUM_LOGIN_USER_KEY';

var baseURL;
// if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
//     baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
//     baseURL = 'http://127.0.0.1:8000';
// }
baseURL = "https://backend-refresh.herokuapp.com/"

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
    config => {

        if (config?.requiredToken && JSON.parse(localStorage.getItem('LOGIN_USER_KEY')).token){
          

                config.headers['Authorization'] = JSON.parse(localStorage.getItem('LOGIN_USER_KEY')).token;
            
        }

        return config;
    },
    err => {
        console.error(err);
    }
);

export default class API {


    ///////////////////////
    // Items
    //////////////////////

    getItems = async () => {
        const item = await api
            .get('/item/', {})
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
            return item
    };

    // /////////////////
    // Carts
    // ////////////////

    getCarts = async () => {
        const cart = await api
            .get('/cart/',{requiredToken:true})
            .then(response => {
                return response.data;
            },)
            .catch(error => {
                throw new Error(error);
            });
        return cart;

    };


    addCarts = async item_id => {
        const savedCart = await api
            .post('/cart/add/', {
                item: item_id,
                quantity: 1
            },{requiredToken:true})
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedCart
    };

    updateCarts = async (cart_id, quantity) => {
        const savedCart = await api
            .put('/cart/update/' + cart_id , {
                quantity: quantity
            },{requiredToken:true})
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedCart;
    };

    deleteCarts = async cart_id => {
        const response = await api
            .delete('/cart/delete/'+ cart_id, {requiredToken:true} )
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return response;
    };


    // ///////////
    // User
    // //////////

    signUp = async (user_name, email, password) => {
        const savedPost = await api
            .post('/user/signup/', {
                username: user_name,
                email: email,
                password: password
            })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedPost;
    };

    signIn = async (email, password) => {
        const savedPost = await api
            .post('/user/signin/', {
                email: email,
                password: password
            })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedPost;
    };

    getUsers = async () => {
        const posts = await api
            .get('/users/')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return posts;
    };

    // //////////
    // Order
    // //////////

    orderAdd = async (params = {}) => {
        const order = await api
            .post('/order/add/', params, {requiredToken:true})
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return order;
    };

}
