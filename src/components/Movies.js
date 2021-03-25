import React from 'react'
import ApiHandler from '../api/ApiHandler';

class Movies extends React.Component {
    
    constructor() {
        super();
        this.state = {
            avatars: [],
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
                    this.state.avatars.push(ele.avatar)
                }
            )
            this.forceUpdate()
            console.log(this.state.avatars)
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
            {this.state.avatars.map(
                (ele) => (
                    <li class="movie" ><img src={ele} ></img></li>
                )
            )}
          </ul>

        </div>
      )
    }
}

export default Movies;