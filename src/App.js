import * as React from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  const onChangeInput = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const onChangeCheck = (e) => {
    setChecked((previous) => !previous);
  };

  const onClick = () => {
    if (inputValue !== "" && checked) {
      alert("Enviado");
      console.log({ inputValue, checked });
    } else {
      alert("Completa todos lod campos");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Componentes Controlados</h1>
        <div>
          <label htmlFor="input">Input controlado</label>
          <input id="input" value={inputValue} onChange={onChangeInput} />
          <br />
          <p>
            <strong>Contenido del input:</strong> {inputValue}
          </p>
        </div>
        <div>
          <label htmlFor="checkbox">Checkbox controlado</label>
          <input type="checkbox" checked={checked} onChange={onChangeCheck} />
          <br />
          <p>
           <strong>Checked:</strong> {checked ? "true" : "false"}
          </p>
       </div>
      <button onClick={onClick}>Enviar</button>
      </header>
    </div>
  );
}

export default App;
