import React from 'react';
import { connect } from 'react-redux';

import AddSong from '../components/AddSong';
import {addSongToPlaylist, receiveSongSubmit, receiveSongInput} from '../action-creators/playlists';

const mapStateToProps = state => {
  const myPlainObject = Object.assign({}, {
    songs: state.songs,
    error: state.playlists.error
  });
  return myPlainObject;
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatches a change to our central `state.user` in the redux store
    handleSubmit: event => dispatch(receiveSongSubmit(event)),

    handleChange: event => dispatch(receiveSongInput(event)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSong);