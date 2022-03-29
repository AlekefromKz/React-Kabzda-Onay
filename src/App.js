import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/users" component={Users} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
                <Route path="/login" component={Login} />
            </div>
        </div>
    );
};

export default App;
