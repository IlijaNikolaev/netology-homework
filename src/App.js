import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from "./Card/Card";

function App() {
  return (
    <div className="App">
      <div className="d-flex align-items-start">
        <Card className="mr-3">
          <img src="/images/blank.png" alt="blank image" style={{maxHeight:'200px'}}/>
        </Card>
        <Card/>
      </div>
    </div>
  );
}

export default App;
