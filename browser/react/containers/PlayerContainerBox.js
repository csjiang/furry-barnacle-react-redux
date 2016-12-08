import React, {Component} from 'react';
import { connect } from 'react-redux';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';

const mapStateToProps = (state, ownProps) => {
  const myPlainObject = Object.assign({}, state.player);
  return myPlainObject;
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: (song, list) => dispatch(toggleSong(song, list)),
    next: () => dispatch(next()),
    prev: () => dispatch(prev()),
  };
};

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectToStore(Player);