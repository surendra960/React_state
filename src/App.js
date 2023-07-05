// import reac,{ useState } from "react";
// // import handelClick from "handelClick";



//     handelClick() {
      
//        setCount(count+1);
//       };


//       function App() {
//       functionconst[count,setCount] = useState(0);
        
//      return (
      
//     <div className="App">
//       <button click = 'handelClick'> Clicked me{count}</button> // it will reflect changes diff. diff on each call & click

//       <br></br>
//       <button click = 'handelClick'> Clicked me{count}</button> 
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import MyButton from "./MyButton";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <span> <h2>These buttuns update by sigle click  </h2> </span>
      <button onClick={handleClick}>Clicked me {count}</button>
      
      <button onClick={handleClick}>Clicked me {count}</button>
      <br />
      <h2>Now these two button sahre same component but they keeps there own vaue</h2>
      <MyButton></MyButton>
      <MyButton></MyButton>
    </div>
  );
}

export default App;
