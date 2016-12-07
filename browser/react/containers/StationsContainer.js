import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stations from '../components/Stations';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
  );

export default connectToStore(Stations);