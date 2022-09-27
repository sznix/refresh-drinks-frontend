const initialState = {
    posts: {
        results: [],
        count: 0,
        next: null,
        previous: null
    },

    user: {
        username: '',
        email: '',
        token: '',
        token_expires_at: '',
    },

    item: {
        list: [],
    },

    carts: {
        list: [],
        subtotal: 0
    },

    order: {
        list: [],
        subtotal: 0,
    }

};

export default initialState;
