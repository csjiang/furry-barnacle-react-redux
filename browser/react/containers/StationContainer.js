import React, { Component } from 'react';
import { connect } from 'react-redux';
import Station from '../components/Station';
import { toggleSong } from '../action-creators/player';
import { convertSong } from '../utils';

const mapStateToProps = (state, ownProps) => {
  const selectedSongs = state.songs
  .filter(
    song => song.genre === ownProps.params.genreName)
  .map(convertSong)

  return {
  	genre: ownProps.params.genreName,
  	songs: selectedSongs,
  	currentSong: state.player.currentSong,
  	isPlaying: state.player.isPlaying
  };
};

const mapDispatchToProps = dispatch => {
  return {
  	toggleOne: (song, list) => dispatch(toggleSong(song, list))
  };
};

const connectToStore = connect(
	  mapStateToProps,
	  mapDispatchToProps
  );

export default connectToStore(Station);