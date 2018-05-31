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

	renderTrackSymbol(track) {
		const pause = <span>| |</span>;
		const play = <span>&#9655;</span>;
		if (!this.state.playing) return play;
		return this.state.playingUrl === track.preview_url ? pause : play;
	}

	render() {
		const { tracks } = this.props;
		return (
			<section id="gallery">
				{tracks.map((track, i) => {
					const trackImg = track.album.images[0].url;
					return (
						<div key={i} className="track">
							<img src={trackImg} alt="track" className="track-img" />
							<div className="track-play" onClick={() => this.playAudio(track.preview_url)}>
								<div className="track-play-inner">{this.renderTrackSymbol(track)}</div>
							</div>
							<p className="track-text">{track.name}</p>
						</div>
					);
				})}
			</section>
		);
	}
}

export default Gallery;
