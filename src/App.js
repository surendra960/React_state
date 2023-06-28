// import logo from './logo.svg';
import './App.css';

import {useState} from "react" ;

function App() {
  const [Data, setData] = useState(0)

    function counting_change()
    {
      setData(Data+1);
      if(Data >=10)
      {
        setData(Data-10);
      }
    }
  return (

    <div className="App">
      <h1>{Data}</h1>
      <button onClick={counting_change}>Click Me</button>
    </div>
  );
}

export default App;
