import "./App.css";

import { useState } from "react";

// components
import UserDetail from "./components/UserDetail/UserDetail";

function App() {
  const [inputUserName, setInputUserName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const fetchData = async (url) => {
    setLoading(true);

    try {
      const res = await fetch(url);

      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("Usuário não encontrado");
        } else {
          throw new Error("Ocorreu um erro ao buscar os dados");
        }
      }

      const data = await res.json();

      setUserData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setUserData(null);
    }

    setLoading(false);
    setInputUserName("");
  };

  const searchUser = () => {
    if (inputUserName === "") {
      console.log("Preencher campo");
      return;
    }

    const url = `https://api.github.com/users/${inputUserName}`;

    fetchData(url);
  };

  return (
    <>
      <h1>Buscador de usuário</h1>
      <label>
        <input
          type="text"
          placeholder="Busque pelo usuário"
          required
          onChange={(event) => setInputUserName(event.target.value)}
          value={inputUserName}
        />
        <button onClick={searchUser} disabled={loading}>
          Buscar
        </button>
      </label>
      {error && <p>{error}</p>}
      {userData ? (
        <UserDetail user={userData} />
      ) : (
        <p>Digite o nome e tenha detalhes sobre o usuário.</p>
      )}
      {loading && <p>Carregando dados...</p>}
    </>
  );
}

export default App;
