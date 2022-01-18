import "./App.scss";
import { DatePicker, Spin } from "antd";

function onChange(date, dateString) {
  console.log(date, dateString);
}

function App() {
  return (
    <div className="app">
      <h2>Aplicación MERN</h2>
      <h3>Titulo de prueba</h3>
      <DatePicker onChange={onChange} />
      <div className="example">
        <Spin />
      </div>
    </div>
  );
}

export default App;
