import { useState } from "react";
import { AppRoutes } from "./routes";
import { NavBar } from "./Components/nav-bar";

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ login: "taradam" });

  const handleLogout = () => setUser(null);

  return (
    <div className="App">
      <div className="App-layout">
        <NavBar
          user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}
        />
        <AppRoutes user={user} />
      </div>
    </div>
  );
}

export default App;
