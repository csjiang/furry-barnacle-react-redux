import React, {Component} from 'react';
import { connect } from 'react-redux';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  const myPlainObject = Object.assign(
    {}, state.player, {
      selectedPlaylist: state.playlists.selected
    });
  return myPlainObject;
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

export default connectToStore(Playlist);