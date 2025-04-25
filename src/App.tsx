import { useState } from 'react'

function App() {

  const [count, setCount] = useState("")
  const [finalAdd,setFinalAdd]=useState(0);
  const [errorMessage,setErrorMessage]=useState("");

  const setAddition=()=>{
    if(count!==""){
      const result:any=count.match(/-?\d+/g)?.map(Number);
      console.log(result);
      const ng=result.filter((num:number)=>num<0);
      console.log();
      try {   
        if(ng.length>0){
          throw new Error("negative numbers not allowed"+ng.join(','));        
        }else{
          const sum=result.reduce((acc:any,num:any)=>acc+num,0);
          setFinalAdd(sum);
          setErrorMessage("")
        }
      } catch (error:any) {
        setErrorMessage(error.message);
        setFinalAdd(0); // Clear previous result
      }
    }
  }

  return (
    <div style={{maxWidth: "1280px",margin: "auto",left:0,right:0,top:0,position:"absolute",padding: "2rem",textAlign: "center"}}>
      <h1>Calculate Addition</h1>
      <div className="card">
        <input data-testid="inputValue" id="inputValue" type="text" onChange={(e)=>setCount(e.target.value)}/>
        <button onClick={setAddition}>Add</button>
        <div data-testid="result">{finalAdd}</div>
        <div data-testid="errorMsg">{errorMessage}</div>
      </div>
    </div>
  )
}

export default App;
