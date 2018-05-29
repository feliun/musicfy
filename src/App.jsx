import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<div id="app">
				<header id="app-title">Musicfy</header>
				<FormGroup>
					<InputGroup className="search-element">
						<FormControl id="search-bar" type="text" placeholder="Search for an artist..." />
					</InputGroup>
					<InputGroup.Addon>
						<Glyphicon id="search-button" glyph="search" />
					</InputGroup.Addon>
				</FormGroup>
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
