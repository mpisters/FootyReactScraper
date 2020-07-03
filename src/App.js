import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  async handleClick() {
    await axios.get('/api/scrape/')
        .then(response => {
          console.log("RESPONSE", response)
        })
        .catch(console.error);

  }

  render() {
    return <div className="container">
      <button onClick={this.handleClick}>Scrape Footy</button>
    </div>;
  }
}

export default App;
