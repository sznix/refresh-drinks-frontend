import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Signup from './containers/SignUp';
import Cart from './containers/Cart';
import Order from './containers/Order';
import Signin from './containers/Signin';
import Thankyou from './containers/ThankYou';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/signup'} component={Signup} />
                <Route exact path={'/signin'} component={Signin} />
                <Route exact path={'/cart'} component={Cart} />
                <Route exact path={'/order'} component={Order} />
                <Route exact path={'/thankyou'} component={Thankyou} />
            </Switch>
        </>
    );
};
export default Router;
