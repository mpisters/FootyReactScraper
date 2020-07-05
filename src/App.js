import React, {Component} from 'react';
import axios from 'axios';
import scrapeFooty from './scrape';
import ScoreOverview from './ScoreOverview';
import NextMatches from './NextMatches';

class App extends Component {
  state = {
    scores: [],
    columnNames: [],
    nextMatches: [],
  };

  async componentDidMount() {
    const footyData = await axios.get('/api/scrape/')
        .then(response => {
          if (response.data) {
            let footyData = scrapeFooty(response.data.htmlPage);
            let columnNames = Object.keys(footyData.scores[0]);
            this.setState((state) => {
              return {scores: footyData.scores, columnNames, nextMatches: footyData.nextMatches};
            });
            return footyData;
          }
        })
        .catch(console.error);
    // await axios.post('/api/scores/', {data: scores}).then((response) => {
    //   console.log('It worked', response);
    // });
  }

  getNextMatchesTitle(nextMatches) {
    if (nextMatches && nextMatches.date) {
      return <h3>Next matches - {this.state.nextMatches.date.toLocaleDateString()}</h3>;
    } else {
      return <h3>Next Matches</h3>;
    }
  }

  render() {
    return <div className="container">
      <h1>Scraped Footy</h1>
      <ScoreOverview columnNames={this.state.columnNames} scores={this.state.scores}/>
      {this.getNextMatchesTitle(this.state.nextMatches)}
      <NextMatches nextMatches={this.state.nextMatches}/>
    </div>;
  }
}

export default App;
