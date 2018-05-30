import React, { Component } from "react";
import "./App.css";

class Profile extends Component {
	render() {
		let artist = {
			name: "",
			followers: {
				total: "",
			},
			images: [
				{
					url: "",
				},
			],
			genres: [],
		};
		artist = this.props.artist ? this.props.artist : artist;
		return (
			<section id="profile">
				<img src={artist.images[0].url} id="profile-img" alt="profile" />
				<div id="profile-info">
					<div id="profile-name">{artist.name}</div>
					<div id="profile-followers">{artist.followers.total} followers</div>
					<div id="profile-genres">
						{artist.genres.map((genre, i) => {
							const text = i === artist.genres.length - 1 ? genre : `${genre}, `;
							return <span key={i}>{text}</span>;
						})}
					</div>
				</div>
			</section>
		);
	}
}

export default Profile;
