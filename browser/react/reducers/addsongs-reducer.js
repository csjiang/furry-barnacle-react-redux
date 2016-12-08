import {

} from '../constants';

const initialAddSongState = {

};

export default function (state = initialAddSongState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {


    case SONG_SUBMIT:
      action.event.preventDefault();

      const playlistId = state.playlists.selected.id;
      const songId = state.songId;
      
      newState.selected = convertAlbum(action.album);
      break;

    default:
      return state;

  }

  return newState;

}