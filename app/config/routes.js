
var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
var Route = Router.Router;
var IndexRoute = Router.IndexRoute;

// import WeatherComponent from '../components/W;

// <Route path="weather" component ={WeatherComponent} />

module.exports = (
    <Route path="/" component={Main}>
       

       
        <IndexRoute component ={Home}/>
    </Route>
);
