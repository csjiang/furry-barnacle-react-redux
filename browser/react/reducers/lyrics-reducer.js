import {
  SET_LYRICS,
  ARTIST_QUERY,
  SONG_QUERY
} from '../constants';

const initialLyricsState = {
  text: null,
  artistQuery: '',
  songQuery: ''
};

export default function (state = initialLyricsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_LYRICS:
      newState.text = action.text;
      break;

    case ARTIST_QUERY:
      newState.artistQuery = action.event.target.value;
      break;

    case SONG_QUERY:
      newState.songQuery = action.event.target.value;
      break;

    default:
      return state;

  }

  return newState;

}