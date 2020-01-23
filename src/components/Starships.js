import React from 'react'

export class Starships extends React.Component {
    constructor(props) {
        super();
        this.state = {
            starships: [],
        };
    /*
        fetch("https://swapi.co/api/films")
        .then(res => res.json())
        .then(data => {
          this.setState({ films: data });
        })
        .catch(console.log);*/
      }
    
      componentDidMount() {
        fetch("https://swapi.co/api/starships/")
        .then(results => {
            return results.json();
        }).then (data => { 
            let starships = data.results.map((star) => {
                return (
                    <div key={star.results} className="allFilms">
                        <h2>{star.name}</h2>
                        <p>Model: {star.model}</p>
                    </div>
                )
            })
            this.setState({starships: starships});
            console.log("state",this.state);
        })
      }
    
      render() {
         // console.log("this is renderrr.... " + (i++), this.state);
        return (
    <div className="container2">
        <div className="container1">
            {this.state.starships}
        </div>
    </div>
        );
        }
    
        shouldComponentUpdate() {
            return true;
        }
}