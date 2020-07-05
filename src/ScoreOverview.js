import React, {Component} from 'react';

class ScoreOverview extends Component {
  getTeamValues(team) {
    return Object.values(team);
  }

  render() {
    return <table className="table">
      <thead>
      <tr>
        {this.props.columnNames.map((name, key) => {
          return <th key={key}>{name}</th>;
        })}
      </tr>
      </thead>
      <tbody>
      {this.props.scores.map((team, key) => {
        return <tr key={key}>{this.getTeamValues(team).map((value, key) => {
          return <td key={key}>{value}</td>;
        })}</tr>;
      })}
      </tbody>
    </table>;

  }
}

export default ScoreOverview;
