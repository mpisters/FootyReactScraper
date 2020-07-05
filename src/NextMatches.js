import React, {Component} from 'react';

class NextMatches extends Component {
  getMatchValues(team) {
    return Object.values(team);
  }

  getMatches(matchObject) {
    console.log(matchObject);

    return matchObject.matches;
  }

  returnMatches(matches) {
    if (matches) {
      return <tbody>
      {this.getMatches(this.props.nextMatches).map((match, key) => {
        return <tr key={key}>{this.getMatchValues(match).map((value, key) => {
          return <td key={key}>{value}</td>;
        })}</tr>;
      })}
      </tbody>;
    } else {
      return <tbody></tbody>;
    }
  }

  render() {
    return <table className="table">
      <thead>
      <tr>
        <th>Time</th>
        <th>Teams</th>
      </tr>
      </thead>
      {this.returnMatches(this.props.nextMatches.matches)}
    </table>;
  }
}

export default NextMatches;
