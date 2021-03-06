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
    toggle: () => dispatch(toggleSong()),
    next: () => dispatch(next()),
    prev: () => dispatch(previous()),
  };
};

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectToStore(Player);
