import './App.css';
import NavMenu from "./components/common/NavMenu";

function App() {
  return (
    <div className="App page">
      <div className="sidebar">
        <NavMenu/>
        <main>
          <article className="content px-4">
            <p>Boobs</p>
          </article>
        </main>
      </div>
    </div>
  );
}

export default App;
