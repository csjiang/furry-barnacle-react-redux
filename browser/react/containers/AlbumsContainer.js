import React, {Component} from 'react';
import { connect } from 'react-redux';
import Albums from '../components/Albums';

const mapStateToProps = state => {
  return {
    albums: state.albums.list
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);


export default connectToStore(Albums);