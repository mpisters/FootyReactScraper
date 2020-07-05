let scrapeFooty = (htmlPage) => {
  let divElement = document.createElement('div');
  divElement.innerHTML = htmlPage;
  let banner = divElement.querySelectorAll('section#banner')[0];
  let scoreOverview = banner.querySelector('table');
  let columnHeaders = scoreOverview.getElementsByTagName('th');
  let columnNames = getColumnNames(columnHeaders);
  let tbody = scoreOverview.getElementsByTagName('tbody')[0];
  let rows = tbody.getElementsByTagName('tr');
  let nextGamesDiv = divElement.getElementsByClassName('next-games-holder')[0];
  let dateDiv = nextGamesDiv.getElementsByClassName('date')[0];
  let date = new Date(dateDiv.textContent);
  let nextMatchesDiv = nextGamesDiv.getElementsByClassName('info')[0];
  let scores = getScores(rows, columnNames);
  let nextMatches = getNextGames(nextMatchesDiv);
  return {scores, nextMatches: {date, matches: nextMatches}};
};

let getColumnNames = (columnHeaders) => {
  let columnNames = [];
  for (let item of columnHeaders) {
    columnNames.push(item.textContent);
  }
  return columnNames;
};

let getNextGames = (nextMatchesDiv) => {
  let times = [];
  let matches = [];
  let chidlren = nextMatchesDiv.childNodes;
  for (let child of chidlren){
    if (child.classList.contains("time")){
      times.push(child.textContent)
    } else if (child.classList.contains('match')){
      matches.push(child.textContent)
    }
  }
  return times.map((item, key) => {return {time: item, match:matches[key]}})
}
let getScores = (rows, keys) => {

  let scores = [];
  for (let row of rows) {
    let values = row.childNodes;
    let team = {};
    for (let i = 0; i < values.length; i++) {
      let value = values[i];
      team[keys[i]] = value.textContent;
    }
    scores.push(team);
  }
  return scores;
};

export default scrapeFooty;

