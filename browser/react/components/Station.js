import React from 'react';
import {Link} from 'react-router';
import Songs from './Songs';

const Station = props => {

	const station = props.genre;
	
	return (
		<div id='station'>
		<h3>{station} Station</h3>
		<Songs 
		songs={props.songs}
        currentSong={props.currentSong}
        isPlaying={props.isPlaying}
        toggleOne={props.toggleOne}/>
		</div>
	);
};

export default Station;