import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import WelcomePage from './components/welcome/WelcomePage';
import HomePage from './components/home/HomePage';
import FoodMenu from './components/menu/FoodMenu';
import BillPage from './components/bill/BillPage';
import ChatPage from './components/chat/ChatPage';
import ProgressPage from './components/progress/ProgressPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={WelcomePage} />
        <Route path="home" component={HomePage} />
        <Route path="menu" component={FoodMenu} />
        <Route path="chat" component={ChatPage} />
        <Route path="bill" component={BillPage} />
        <Route path="progress" component={ProgressPage} />
    </Route>
);