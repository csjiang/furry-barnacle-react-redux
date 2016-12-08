import React from 'react';
import { connect } from 'react-redux';
import AddSong from '../components/AddSong';
import store from '../store';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';

class AddSongContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({
      songId: 1,
      error: false
    }, store.getState());
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  const mapStateToProps = (state, ownProps) =>
  {
    return {
      songs:
      error: 
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      handleChange
      handleSubmit
    }
  }

  const connectToStore = connect (
    mapStateToProps,
    mapDispatchToProps
  );


  componentDidMount() {

    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });

    store.dispatch(loadAllSongs());

  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {

    evt.preventDefault();

    const playlistId = this.state.playlists.selected.id;
    const songId = this.state.songId;

    store.dispatch(addSongToPlaylist(playlistId, songId))
      .catch(() => this.setState({ error: true }));

  }

  render() {

    const songs = this.state.songs;
    const error = this.state.error;

    return (
      <AddSong
        {...this.props}
        songs={songs}
        error={error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
}

export default AddSongContainer;
