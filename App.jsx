import { useState } from "react";

const App = () =>{
const state = useState();
const [num ,inc] = useState(0);

const increase = () =>{
 inc(num + 1) ;
 console.log(state);

}



return( <>
<div>

<h1>{num}</h1>
<button onClick = {increase}>click me</button>
</div>
</>
)
}
export default App;

