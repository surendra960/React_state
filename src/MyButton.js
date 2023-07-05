import { useState } from "react";

function MyButton() {
    const[count,setCount] = useState(0);

    function handleClick() {
    //   for(let i=0;i<=10;i++){
    //     console.log(i+'</br>')
    //   }

     setCount(count+1);
    //  console.log("You have clicked me number of time is",count);
    }
    
  
    return (
      <button onClick={handleClick}>
        Clicked me {count} times
      </button>
    );
  }

  export default MyButton