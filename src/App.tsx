import Button from "./components/Button/Button.tsx";
// import { PiArrowBendRightDownFill } from "react-icons/pi";

import "./index.css";

function App() {
  return (
    <>
      <header className="h-10">
        <div className="logoBox bg-purple-600 h-40 w-30 absolute top-0"></div>
      </header>
      <main>
        {/* hero */}
        <section className="relative h-[60vh]">
          <h1 className="text-center">Slurp</h1>
          <p className="text-center max-w-[500px] mt-10 mx-auto">
            Bacon ipsum dolor amet venison jowl pancetta ground round. Kielbasa
            fatback salami tenderloin pork, sausage andouille ham pastrami
            shankle rump ground round meatball.
          </p>
          <div className="bg-gray-400 h-[300px] w-[500px] absolute right-0">
            image of food
          </div>
          <div className="absolute bottom-1">
            <Button title={"Order Now"} icon={"arrowBendRight"} />
          </div>
        </section>
        {/* ordering */}
        <section className="columns-2 gap-8">
          {/* <div>description and image</div> */}
          {/* <div>customization tabs</div> */}
        </section>
        {/* checkout */}
        <section></section>
      </main>
    </>
  );
}

export default App;
