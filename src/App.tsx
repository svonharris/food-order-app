import Button from "./components/Button/Button.tsx";
import "./index.css";

function App() {
  return (
    <>
      <main>
        {/* hero */}
        <section>
          <h1>Slurp</h1>
          <Button title={"Order Now"} />
        </section>
        {/* ordering */}
        <section className="columns-2 gap-8">
          <div>description and image</div>
          <div>customization tabs</div>
        </section>
        {/* checkout */}
        <section></section>
      </main>
    </>
  );
}

export default App;
