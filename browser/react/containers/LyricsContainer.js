import React from 'react';
import { connect } from 'react-redux';

import Lyrics from '../components/Lyrics';
import { searchLyrics, receiveLyricsSubmit, receiveArtistInput, receiveSongInput } from '../action-creators/lyrics';

const mapStateToProps = state => {

  const myPlainObject = Object.assign({}, state.lyrics);
  return myPlainObject;
};

const mapDispatchToProps = dispatch => {
  return {

    handleSubmit: event => dispatch(receiveLyricsSubmit(event)),

    setArtist: event => dispatch(receiveArtistInput(event)),

    setSong: event => dispatch(receiveSongInput(event)),

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lyrics);