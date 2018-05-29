import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<header id="app-title">Musicfy</header>
				<section>
					<input placeholder="Search for an artist..." />
					<button>Search</button>
				</section>
				<section id="profile">
					<div>Artist picture</div>
					<div>Artist name</div>
				</section>
				<section id="gallery">Gallery</section>
			</div>
		);
	}
}

export default App;
