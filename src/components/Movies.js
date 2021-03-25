import React from 'react'
import ApiHandler from '../api/ApiHandler';

class Movies extends React.Component {
    
    constructor() {
        super();
        this.state = {
            movies: [],
            error: "",
        }
    }

    async componentDidMount() {

        let response = await ApiHandler.getMovies()

        if(response.error) {
            console.log(response.error)
        }
        else if (response.data) {
            //console.log(response.data[0].avatar)
            response.data.map(
                (ele) => {
                    this.state.movies.push({
                        name: ele.first_name,
                        avatar: ele.avatar
                     })
                }
            )
            console.log(this.state.avatars)
            this.forceUpdate()
        }
        else {
            console.log(response)
        }
    }
    
    render() {
      return (
        <div>

          <h1>Movies Page</h1>
          
          <ul>
            {this.state.movies.map(
                (ele, index) => (
                    <li className="movie" key={index}>
                        <div>Movie Name: {ele.name}</div>
                        <img src={ele.avatar} ></img>
                    </li>
                )
            )}
          </ul>

        </div>
      )
    }
}

export default Movies;