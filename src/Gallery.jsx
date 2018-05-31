import React, { Component } from "react";
import "./App.css";

class Gallery extends Component {
	render() {
		const { tracks } = this.props;
		return (
			<section id="gallery">
				{tracks.map((track, i) => {
					const trackImg = track.album.images[0].url;
					return (
						<div key={i} className="track">
							<img src={trackImg} alt="track" className="track-img" />
							<p className="track-text">{track.name}</p>
						</div>
					);
				})}
			</section>
		);
	}
}

export default Gallery;
