import React from "react";
import Form from "./components/Form";
import MyContextProvider from "./contexts/MyContextProvider";

function App() {

  return (
    <MyContextProvider>
      <Form />
    </MyContextProvider>
  );
}

export default App;
