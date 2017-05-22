The widget is created as a React component whic his ..... The data captured from widget editor is kept in state through
store and it has its own reducer and etc. This web application basically holds the widget or the React component.

Need to enable geo location from privacy settings in chrome

things like require and import are used mixed. This is to showcase the different ways of doing things.

config folder has apikey.js file which holds the apikey. This needs to be changed with a real one. As of now it is only
a dummy value for demo and not working.

for better User experience, images can be added for sunshine , rainy weather etc
timer is set to update the weather condition. It needs to be tested though.
http://localhost:8090/#/?_k=36e2h2 : to see both the components
To build a production version use:
webpack --config webpack.config.prod.js

after the build is done, the public folder and index.html needs to be send to s3 with below command lines.

aws s3 sync /Users/dhiraj.kumar/react_latest/build/public s3://dhirajjenkinss3bucket/reactapp/public
aws s3 cp /Users/dhiraj.kumar/react_latest/build/index.html s3://dhirajjenkinss3bucket/reactapp/index.html;

s3 react app url
http://dhirajjenkinss3bucket.s3-website-us-east-1.amazonaws.com/reactapp/index.html

If further optimization is required, then the files can be delivered gzipped.
ie, servergzipped file in production.
https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a