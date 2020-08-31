import React from "react";
import "./App.css";
import MainMenu from "./Components/MainMenu";

// <App>
//  <MainMenu>
//    <MainMenuHeader>
//    <MainMenuItems>
//      for(<MainMenuItem/>)
//  if(category.length > 0 && <SubMenu>)
//    <SubMenuHeader>
//    <SubMenuItems>
//      for(<SubMenuItem/>)
function App() {
  return (
    <div className="App">
      <MainMenu />
    </div>
  );
}

export default App;
