import "./styles/app.scss";

import Header from "./components/Header";
import Checklist from "./components/Checklist";
import Bottom from "./components/Bottom";

function App() {
  return (
    <div className="app">
      <div className="app__box">
        <Header />
        <Checklist />
        <Bottom />
      </div>
    </div>
  );
}

export default App;
