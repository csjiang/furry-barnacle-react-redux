import React, {Component} from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

const mapStateToProps = (state, ownProps) => {
  const myPlainObject = Object.assign(
    {}, state.player, {
      playlists: state.playlists.list
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

export default connectToStore(Sidebar);