import React, {Component} from 'react';
import HighCharts from 'highcharts';
import axios from 'axios';

class Analysis extends Component {
  async getScores() {
    console.log('GET the scores');
    return await axios.get('/api/scores/').then((response) => {return response});
  }

  async componentDidMount() {
    const scoresResponse = await this.getScores();
    console.log(scoresResponse.data);
    HighCharts.chart('scores', {
      title: {text: 'Scores per team'},
    });
  }

  render() {
    return <div className="analysis-page">
      <h1>Analysis</h1>
      <div id="scores"></div>
    </div>;
  }
}

export default Analysis;
