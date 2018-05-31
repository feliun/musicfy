import React, { Component } from "react";
import "./App.css";

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playingUrl: "",
			audio: null,
			playing: false,
		};
	}

	playAudio(url) {
		const audio = new Audio(url);
		if (!this.state.playing) {
			audio.play();
			return this.setState({
				playing: true,
				playingUrl: url,
				audio,
			});
		}
		if (url === this.state.playingUrl) {
			this.state.audio.pause();
			return this.setState({ playing: false });
		}
		this.state.audio.pause();
		audio.play();
		this.setState({
			playing: true,
			audio,
			playingUrl: url,
		});
	}

	render() {
		const { tracks } = this.props;
		return (
			<section id="gallery">
				{tracks.map((track, i) => {
					const trackImg = track.album.images[0].url;
					return (
						<div key={i} className="track">
							<img src={trackImg} alt="track" className="track-img" onClick={() => this.playAudio(track.preview_url)} />
							<p className="track-text">{track.name}</p>
						</div>
					);
				})}
			</section>
		);
	}
}

export default Gallery;
