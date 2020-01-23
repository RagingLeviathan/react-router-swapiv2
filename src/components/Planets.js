import React from 'react'

export class Planets extends React.Component {
    constructor(props) {
        super();
        this.state = {
            planets: [],
        };
      }
    
      componentDidMount() {          
          fetch("https://swapi.co/api/planets/")
          .then(results => {
            return results.json();
        }).then (data => { 
            let planets = data.results.map((pla) => {
                return (
                    <div key={pla.results} className="allFilms">
                        <h2>{pla.name}</h2>
                        <p>Rotation Period: {pla.rotation_period}</p>
                        <p>Orbital Period: {pla.orbital_period}</p>
                        <p>Diameter: {pla.diameter}</p>
                        <p>Climate: {pla.climate}</p>
                        <p>Gravity: {pla.gravity}</p>
                        <p>Terrain: {pla.terrain}</p>
                    </div>
                )
            })
            this.setState({planets: planets});
            console.log("state",this.state);
        })
      }
    
      render() {
         // console.log("this is renderrr.... " + (i++), this.state);
        return (
    <div className="container2">
        <div className="container1">
            {this.state.planets}
        </div>
    </div>
        );
        }
    
        shouldComponentUpdate() {
            return true;
        }
}