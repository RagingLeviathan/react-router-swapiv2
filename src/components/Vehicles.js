import React from 'react'

export class Vehicles extends React.Component {
    constructor(props) {
        super();
        this.state = {
            vehicles: [],
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
        fetch("https://swapi.co/api/vehicles/")
        .then(results => {
            return results.json();
        }).then (data => { 
            let vehicles = data.results.map((veh) => {
                return (
                    <div key={veh.results} className="allFilms">
                        <h2>{veh.name}</h2>
                        <p>Model: {veh.model}</p>
                    </div>
                )
            })
            this.setState({vehicles: vehicles});
            console.log("state",this.state);
        })
      }
    
      render() {
         // console.log("this is renderrr.... " + (i++), this.state);
        return (
    <div className="container2">
        <div className="container1">
            {this.state.vehicles}
        </div>
    </div>
        );
        }
    
        shouldComponentUpdate() {
            return true;
        }
}