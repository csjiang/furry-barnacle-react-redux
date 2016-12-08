import { SET_LYRICS, ARTIST_QUERY, SONG_QUERY } from '../constants';
import axios from 'axios';

export const setLyrics = text => ({
  type: SET_LYRICS,
  text
});

export const searchLyrics = (artist, song) => {
  return dispatch => {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      })
  };
};

export const receiveArtistInput = event => ({
  type: ARTIST_QUERY,
  event
});

export const receiveSongInput = event => ({
  type: SONG_QUERY,
  event
});

export const receiveLyricsSubmit = event => {

  event.preventDefault();

  return (dispatch, getState) => {

  	if (getState().lyrics.artistQuery && getState().lyrics.songQuery) {
  		dispatch(searchLyrics(getState().lyrics.artistQuery, getState().lyrics.songQuery));
    	}
	};
};

    
