import Stars from "./components/Stars/Stars";

function App() {
  let stars = 5;
  return (
    <div className="App">
      {(stars < 6 && stars > 0) && <Stars count={stars}/>}
    </div>
  );
}

export default App;
