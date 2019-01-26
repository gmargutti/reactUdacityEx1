import React, { Component } from 'react'

class ListProfiles extends Component {
  render(){
    let profiles = this.props.profiles;
    let users = this.props.users;
    let movies = this.props.movies;
  	return(
    	<div className='list-profiles'>
	      {profiles.map((profile) => (
			<p key={profile.id}>{users[profile.userID].name}'s favorite movie is {movies[profile.favoriteMovieID].name}</p>
  		  ))}
      	</div>
    ) 
  }
}

export default ListProfiles