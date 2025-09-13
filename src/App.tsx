import Header from "./components/Header/Header.tsx";
import Button from "./components/Button/Button.tsx";
import Tabs from "./components/Tabs/Tabs.tsx";
import { foodData } from "./Data/Data.tsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.tsx";
import { AppProvider } from "./AppContext";

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
              <Button variant="primary" icon={"arrowBendDown"}>
                Order Now
              </Button>
            </div>
          </div>
        </section>
        {/* ordering */}
        <AppProvider>
          <section className="max-w-[1400px] mx-auto my-0 py-10 grid grid-cols-2">
            <div>description and image</div>
            {/* customization tabs */}
            <Tabs data={foodData} />
          </section>
          {/* checkout */}
          <section className="max-w-[1400px] mx-auto my-0 py-10">
            <ShoppingCart />
          </section>
        </AppProvider>
      </main>
    </>
  );
}

export default App;
