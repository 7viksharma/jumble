import React from "react";
import { Login } from "./pages/login";
import { SidebarWithHeader } from "./component/sidebarwithheader";
import { Heading, Wrap } from "@chakra-ui/react";
//import { Header } from "./component/Header";
import { StackBox } from "./component/body";

function App() {
  return (
    <div>
      <SidebarWithHeader children={<StackBox />} />
      {/* <Header /> */}
      {/* <Student /> */}
    </div>
  );
}

export default App;
