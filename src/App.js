import './App.css';
import Header from './components/Header';
import LakeBar from './components/lakeInfo/LakeBar';

// Instantiate data to be the json file object
let data = require('./algae_data.json')

function App() {

  // Create a list of each lake containing all of the lake's information
  var lakes = []
  for (const lake in data["lakes"]) {
    lakes.push(data["lakes"][lake])
  }

  // The HTML for the overall webpage
  return (
    <div className="App">
      {/*Creating the header component for the webpage*/}
      <Header title="Algae Forecaster"></Header>

      {/*Creating the header text for the webpage*/}
      <div class='d-flex m-3'>
        <h2>Lakes Near You</h2>
      </div>

      {/*Iterating through the lakes list to create a 'LakeBar' component for each lake*/}
      {
        lakes.map((x) => ( 
          <div class='pb-3'>
            <LakeBar lake={x}></LakeBar>
          </div>
        ))
      }
    </div>
  );
}

export default App;
