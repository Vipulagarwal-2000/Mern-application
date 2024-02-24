import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return (
    <Router>
    <MainNavigation/>
    <main>
     
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
}

export default App;




/*

idea about params in the route :userId is dynamic beware 



In the React Router example you provided, <Route path="/:userId/places" exact> indicates that the route expects a dynamic parameter called userId. This dynamic parameter is denoted by the :userId syntax in the route path.

When a user navigates to a URL that matches this route pattern, the value that comes after the / will be captured as the userId parameter and passed to the UserPlaces component. For example, if the user visits /u1/places, the value "u1" will be captured as the userId parameter and used in the UserPlaces component.

So, in your case, when you navigate to /this/places, React Router interprets "this" as the value for userId, and it becomes /this/places. If you want a different behavior or don't want the :userId parameter, you can modify the route path accordingly. For example:

jsx
Copy code
<Route path="/places" exact>
  <UserPlaces />
</Route>
This way, the route will match only for the exact path /places


Certainly! Let's break it down further.

In your React Router example:

jsx
Copy code
<Route path="/:userId/places" exact>
  <UserPlaces />
</Route>
This route is set up to handle dynamic URLs. The :userId part in the path is a placeholder for a dynamic value that will be captured and passed as a parameter to the UserPlaces component.

For example, if a user goes to the URL /u1/places, React Router understands that u1 is the value for userId. It treats u1 as a parameter and passes it to the UserPlaces component. Inside the UserPlaces component, you can access this parameter using React Router's useParams hook or other relevant methods.

Here's a simplified example:

jsx
Copy code
// UserPlaces.jsx

import { useParams } from 'react-router-dom';

const UserPlaces = () => {
  // useParams is a hook provided by React Router to access route parameters
  const { userId } = useParams();

  return (
    <div>
      <h2>User ID: {userId}</h2>
      { Other content related to user places }
      </div>
      );
    };
    In this example, when the URL is /u1/places, the userId parameter in the UserPlaces component will be 'u1', and the component can then use that information to fetch data or render content specific to the user with ID 'u1'.
    
    React Router takes care of extracting dynamic parts from the URL and passing them as parameters to the corresponding components, making your application flexible and capable of handling different user IDs in the URL dynamically.












*/


