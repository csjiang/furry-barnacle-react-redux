import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  RECEIVE_SONGS,
  SONG_INPUT,
  SUBMIT_ERROR
} from '../constants';

import {convertSong} from '../utils';

const initialPlaylistsState = {
  selected: {},
  list: [],
  songId: 1,
  error: false
};

export default function (state = initialPlaylistsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_PLAYLISTS:
      newState.list = action.playlists;
      break;

    case RECEIVE_PLAYLIST:
      newState.selected = action.playlist;
      newState.selected.songs = newState.selected.songs.map(convertSong);
      break;

    case SONG_INPUT:
      newState.songId = action.event.target.value;
      newState.error = false;
      break;

    case SUBMIT_ERROR: 
      newState.error = true;
      break;

    default:
      return state;

  }

  return newState;

}