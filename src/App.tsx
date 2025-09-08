import Header from "./components/Header/Header.tsx";
import Button from "./components/Button/Button.tsx";
import Tabs from "./components/Tabs/Tabs.tsx";
import Tab from "./components/Tab/Tab.tsx";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* hero */}
        <section className="relative">
          <div className="max-w-[1400px] mx-auto my-0 h-[75vh]">
            <h1 className="text-center">Slurp</h1>
            <p className="text-center max-w-[500px] mt-10 mx-auto">
              Bacon ipsum dolor amet venison jowl pancetta ground round.
              Kielbasa fatback salami tenderloin pork, sausage andouille ham
              pastrami shankle rump ground round meatball.
            </p>
            <div className="absolute bottom-1">
              <Button title={"Order Now"} icon={"arrowBendDown"} />
            </div>
          </div>

          <div className="bg-purple-600 h-[300px] w-[500px] absolute right-0 bottom-0">
            image of food
          </div>
        </section>
        {/* ordering */}
        <section className="max-w-[1400px] mx-auto my-0 py-10 grid grid-cols-2">
          <div>description and image</div>
          {/* customization tabs */}
          <Tabs />
          <Tab />
        </section>
        {/* checkout */}
        <section></section>
      </main>
    </>
  );
}

export default App;
