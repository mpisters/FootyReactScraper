let scrapeFooty = (htmlPage) => {
  let divElement = document.createElement('div');
  divElement.innerHTML = htmlPage;
  let banner = divElement.querySelectorAll('section#banner')[0];
  let schema = banner.querySelector('table');
  let columnHeaders = schema.getElementsByTagName('th');
  let columnNames = getColumnNames(columnHeaders);
  let tbody = schema.getElementsByTagName('tbody')[0];
  let rows = tbody.getElementsByTagName('tr');
  let scores = getScores(rows, columnNames);
  return scores;
};

let getColumnNames = (columnHeaders) => {
  let columnNames = [];
  for (let item of columnHeaders) {
    columnNames.push(item.textContent);
  }
  return columnNames;
};


let getScores = (rows, keys) => {
  let formattedKeys = keys.map(name => name.replace(/\./g, ""))
  let scores = [];
  for (let row of rows) {
    let values = row.childNodes;
    let team = {};
    for (let i = 0; i < values.length; i++) {
      let value = values[i];
      team[formattedKeys[i]] = value.textContent;
    }
    scores.push(team);
  }
  return scores;
};

export default scrapeFooty;

