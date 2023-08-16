import React, { useState } from 'react';

const Counter = () => {
const [count, setCount] = useState(0);

const UpdateCounter = (update) => {
    if(update === 'inc'){
        setCount(count+1);
    }else{
        setCount(count-1);
    };
};

return(
    <>
        <div>
            <p>Krishna Bhadkoliya</p>
            <p>Display count : {count}</p>
            <button onClick={()=>UpdateCounter("inc")}>Increment</button>
            <button onClick={()=>UpdateCounter("dec")}>Decrement</button>
        </div>
    </>
   );
};

export default Counter;