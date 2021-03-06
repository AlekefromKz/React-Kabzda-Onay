import React, {lazy, Suspense, useEffect} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import Users from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));

const App = props => {
    const catchAllUnhandledRejection = (reason, promise) => {
        // ToDo: add thunk to show error and remove it
    };

    useEffect(() => {
        props.initializeApp();
        window.addEventListener('unhandledrejection', catchAllUnhandledRejection);
        return () => {
            window.removeEventListener('unhandledrejection', catchAllUnhandledRejection);
        };
    });

    if (!props.initialized) {
        return <Preloader />;
    }

    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
                <Switch>
                    <Route exact path="/" render={() => <Redirect to={'/profile'} />} />
                    <Route
                        path="/profile/:userId?"
                        render={() => {
                            return (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <ProfileContainer />
                                </Suspense>
                            );
                        }}
                    />
                    <Route
                        path="/dialogs"
                        render={() => {
                            return (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <DialogsContainer />
                                </Suspense>
                            );
                        }}
                    />
                    <Route path="/users" component={Users} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/login" component={Login} />
                    <Route path="*" render={() => <div>404 NOT FOUND</div>} />
                </Switch>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    initialized: state.app.initialized,
});

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
