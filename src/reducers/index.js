import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'Whot', duration: '3:20' },
		{ title: 'Whet', duration: '1:20' },
		{ title: 'Whit', duration: '0:20' },
		{ title: 'Whut', duration: '5:20' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})