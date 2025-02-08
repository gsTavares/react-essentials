import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(concept => <CoreConcept key={concept.title} {...concept} />)}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
