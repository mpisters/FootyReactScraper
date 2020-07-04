import React, {Component} from 'react';
import axios from 'axios';
import scrapeFooty from './scrape';

class App extends Component {
  state = {
    scores: [],
    columnNames: [],
  };

  async componentDidMount() {
    const scores = await axios.get('/api/scrape/')
        .then(response => {
          if (response.data) {
            let scores = scrapeFooty(response.data.htmlPage);
            let columnNames = Object.keys(scores[0])
            this.setState((state) => {
              return {scores, columnNames};
            });
            return scores;
          }
        })
        .catch(console.error);
    console.log(scores);
    await axios.post('/api/scores/', {data: scores}).then((response) => {
      console.log('It worked', response);
    });
  }

  getTeamValues(team) {
    return Object.values(team);
  }

  render() {
    return <div className="container">
      <h1>Scraped Footy</h1>
      {this.scores}
      <table className="table">
        <thead>
        <tr>
          {this.state.columnNames.map((name, key) => {
            return <th key={key}>{name}</th>;
          })}
        </tr>
        </thead>
        <tbody>
        {this.state.scores.map((team, key) => {
          return <tr key={key}>{this.getTeamValues(team).map((value, key) => {
            return <td key={key}>{value}</td>;
          })}</tr>;
        })}
        </tbody>
      </table>
    </div>;
  }
}

export default App;
