import React, { Component } from "react";
import "./App.css";
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";
import Profile from "./Profile";
import BeatlesData from "./fixtures/beatles.json";
import TracksData from "./fixtures/tracks.json";

const token =
	"BQBHEDUNzS0TzrORvQ5PDFiaw6-ByNx0SAUUXhU3IlL5Gi4Q620k8mATKUSmfgYzivt_azs47f2WdW23s-hbuoDJdQFbHdfDApMVL2eutEZmZUNCGoic4JgInXgBOeVfGZ7Nn-375Uc_JYteT1w0vxBbXIHcB2po";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
			artist: null,
			tracks: [],
		};
	}

	request(url) {
		return fetch(url, {
			method: "GET",
			headers: new Headers({
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/x-www-form-urlencoded",
			}),
		}).then(response => response.json());
	}

	searchArtist(query) {
		const SEARCH_BASE_URL = "https://api.spotify.com/v1/search";
		const FETCH_URL = `${SEARCH_BASE_URL}?q=${query}&type=artist&limit=1`;
		return this.request(FETCH_URL).then(({ artists: { items } }) => items[0]);
	}

	searchTracks(artist) {
		const ARTIST_BASE_URL = "https://api.spotify.com/v1/artists";
		const ARTIST_URL = `${ARTIST_BASE_URL}/${artist.id}/top-tracks?country=ES&`;
		return this.request(ARTIST_URL);
	}

	search() {
		const artist = BeatlesData;
		const { tracks } = TracksData;
		this.setState({ artist });
		this.setState({ tracks });
		// this.searchArtist(this.state.query).then(artist => {
		// 	this.setState({ artist });
		// 	this.searchTracks(artist).then(data => {
		// 		this.setState({ tracks: data.tracks });
		// 	});
		// });
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
				{this.state.artist ? (
					<div>
						<Profile artist={this.state.artist} />
						<section id="gallery">Gallery</section>
					</div>
				) : (
					<div />
				)}
			</div>
		);
	}
}

export default App;
