import React, {Component} from 'react';
import { connect } from 'react-redux';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedAlbum: state.albums.selected,
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

export default connectToStore(Album);