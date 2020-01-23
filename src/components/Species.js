import React from 'react'

export class Species extends React.Component {
    constructor(props) {
        super();
        this.state = {
            species: [],
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
        fetch("https://swapi.co/api/species/")
        .then(results => {
            return results.json();
        }).then (data => { 
            let species = data.results.map((spe) => {
                return (
                    <div key={spe.results} className="allFilms">
                        <h2>{spe.name}</h2>
                        <p>Classification: {spe.classification}</p>
                    </div>
                )
            })
            this.setState({species: species});
            console.log("state",this.state);
        })
      }
    
      render() {
         // console.log("this is renderrr.... " + (i++), this.state);
        return (
    <div className="container2">
        <div className="container1">
            {this.state.species}
        </div>
    </div>
        );
        }
    
        shouldComponentUpdate() {
            return true;
        }
}