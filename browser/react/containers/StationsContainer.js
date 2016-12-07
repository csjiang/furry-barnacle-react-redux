import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stations from '../components/Stations';

const sortSongsByGenre = (songs) => {
	let stationsByGenre = [];
	let existingStations = [];
	songs.forEach(function(item,index,arr){
		if (existingStations.indexOf(item.genre) !== -1) {
			const indexToAdd = stationsByGenre.findIndex(function(elem){
				return elem.name===item.genre
			});
			stationsByGenre[indexToAdd].songs.push(item);
		} else {
			stationsByGenre.push({name: item.genre,
								  songs: [item]
								});
			existingStations.push(item.genre);
		}
	});

	return stationsByGenre;

}

const mapStateToProps = state => {
  return {
  	stations: sortSongsByGenre(state.songs)

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