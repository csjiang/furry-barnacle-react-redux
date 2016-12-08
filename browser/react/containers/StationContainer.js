import React, { Component } from 'react';
import { connect } from 'react-redux';
import Station from '../components/Station';
import { toggleSong } from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {

  return {
  	genre: ownProps.params.genreName,
  	songs: state.songs,
  	currentSong: state.player.currentSong,
  	isPlaying: state.player.isPlaying
  };
};

const mapDispatchToProps = dispatch => {
  return {
  	toggleOne: () => dispatch(toggleSong())
  };
};

const connectToStore = connect(
	  mapStateToProps,
	  mapDispatchToProps
  );

export default connectToStore(Station);