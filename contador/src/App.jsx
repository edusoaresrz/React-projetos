import "./App.css";

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Exercicio de contador</h1>
      <p>Valor do contador: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter > 0 && (
        <button onClick={() => setCounter(counter - 1)}>-</button>
      )}
    </>
  );
}

export default App;
