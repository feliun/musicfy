import React, { Component } from "react";
import "./App.css";
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";
import Profile from "./Profile";
import BeatlesData from "./fixtures/beatles.json";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
			artist: null,
		};
	}

	search() {
		const BASE_URL = "https://api.spotify.com/v1/search";
		const FETCH_URL = `${BASE_URL}?q=${this.state.query}&type=artist&limit=1`;
		const token = "";
		const artist = BeatlesData;
		this.setState({ artist });
		// fetch(FETCH_URL, {
		// 	method: "GET",
		// 	headers: new Headers({
		// 		Authorization: `Bearer ${token}`,
		// 		"Content-Type": "application/x-www-form-urlencoded",
		// 	}),
		// })
		// 	.then(response => response.json())
		// 	.then(({ artists: { items } }) => {
		// 		const artist = items[0];
		// 		this.setState({ artist });
		// 	})
		// 	.catch(error => console.log(error));
	}

	render() {
		return (
			<div id="app">
				<header id="app-title">Musicfy</header>
				<FormGroup>
					<InputGroup className="search-element">
						<FormControl
							id="search-bar"
							type="text"
							query={this.state.query}
							placeholder="Search for an artist..."
							onChange={event => this.setState({ query: event.target.value })}
							onKeyPress={event => {
								if (event.key === "Enter") this.search();
							}}
						/>
					</InputGroup>
					<InputGroup.Addon onClick={() => this.search()}>
						<Glyphicon id="search-button" glyph="search" />
					</InputGroup.Addon>
				</FormGroup>
				<Profile artist={this.state.artist} />
				<section id="gallery">Gallery</section>
			</div>
		);
	}
}

export default App;
