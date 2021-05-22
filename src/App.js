import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from 'react-router-dom';
import Home from './Screens/Home/Home';
import About from './Screens/About/About';
import AboutDetails from './Screens/About/AboutDetails';
export default function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/AboutDetails'>
						<AboutDetails />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
