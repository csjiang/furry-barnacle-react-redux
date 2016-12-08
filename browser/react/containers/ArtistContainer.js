import React, {Component} from 'react';
import { connect } from 'react-redux';
import Artist from '../components/Artist';

import {toggleSong} from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  const myPlainObject = Object.assign(
    {}, state.player, {
      albums: state.artists.selected.albums,
      songs: state.artists.selected.songs,
      selectedArtist: state.artists.selected,
      children: ownProps.children.props.children
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

export default connectToStore(Artist);