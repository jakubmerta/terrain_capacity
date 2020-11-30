import "./App.css";
import { getCapacitySum } from "./mappers/capacity";
import { terrainList } from "./enums/terrain";

function App() {
  const sumCapacity = getCapacitySum(terrainList);
  return (
    <div className="layout">
      <div className="card">
        <h2>Capacity</h2>
        <p>The capacity of your terrain is {sumCapacity}</p>
      </div>
    </div>
  );
}

export default App;
