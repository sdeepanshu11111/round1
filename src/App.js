import LineChart from "./LineChart";
import BarChart from "./BarChart";

function App() {
  return (
    <div className="App">
      <div style={{ margin: "42px 24px" }} className="line-chart-wraper">
        <LineChart />
      </div>

      <div style={{ margin: "42px 24px" }} className="bar-chart-wraper">
        <BarChart />
      </div>
    </div>
  );
}

export default App;
