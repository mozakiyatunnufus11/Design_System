import React from "react";
import ContainerFunctional from "./ContainerFunctional";
import ContainerClass from "./ContainerClass";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <ContainerFunctional>
        Ini adalah Container yang dibuat dengan Functional Component.
      </ContainerFunctional>

      <br />

      <ContainerClass>
        Ini adalah Container yang dibuat dengan Class Component.
      </ContainerClass>
    </div>
  );
}

export default App;
