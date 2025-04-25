import { useState } from 'react'

function App() {

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

export default App
