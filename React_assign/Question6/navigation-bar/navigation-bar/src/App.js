import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
import Home from './pages/home'
import Project from './pages/project';
import Services from './pages/services';





function App() {
return (
	<Router>
	<Navbar />
	<Routes>

  <Route path='/'exact component={Home} />
		
		<Route path='/contact' component={Contact} />
		
		<Route path='/project' component={Project} />
		<Route path='/services' component={Services} />
		
		
	</Routes>
	</Router>
);
}

export default App;
