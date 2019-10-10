import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
	if (!selectedSong) {
		return <div>Select A Song</div>;
	}
	return <div>{selectedSong.title}</div>;
};

const mapStateToProps = ({ selectedSong }) => ({ selectedSong });

export default connect(mapStateToProps)(SongDetail);
