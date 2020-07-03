import React, {Component} from 'react';
import axios from 'axios';
import scrapeFooty from './scrape';

class App extends Component {
  state = {
    scores: [],
    columnNames: []
  };

  async componentDidMount() {
    await axios.get('/api/scrape/')
        .then(response => {
          if (response.data) {
            this.setState((state) => {
              let scores = scrapeFooty(response.data.htmlPage)
              let columnNames = Object.keys(scores[0])
              return {scores, columnNames};
            });
          }
        })
        .catch(console.error);
  }

  render() {
    return <div className="container">
      <h1>Scraped Footy</h1>
      {this.scores}
      <table className="table">
        <thead>
        <tr>
          {this.state.columnNames.map((name, key) => {return <th key={key}>{name}</th>})}
        </tr>
        </thead>
        <tbody>
          {this.state.scores.map((team, key) => {return <tr key={key}>{JSON.stringify(team)}</tr>})}
        </tbody>
      </table>
    </div>;
  }
}

export default App;
