import React from "react";
// import { Login } from "./pages/login";
import { SidebarWithHeader } from "./component/sidebarwithheader";
// import { Heading, Link, Wrap } from "@chakra-ui/react";
//import { Header } from "./component/Header";
import { StackBox } from "./component/body";
import Dashboard from "./component/Dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { StudentProfile } from "./component/profile";
import { Upload } from "./component/uploadingimage";
import QuizHome from "./component/quizhome";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Router } from "@material-ui/icons";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Headers user={user} /> */}
      <Routes>
        <Route
          path="/Home"
          element={<SidebarWithHeader children={<StackBox />} />}
        />
        <Route
          path="/Performance"
          element={<SidebarWithHeader children={<Dashboard />} />}
        />
        <Route
          path="/profile"
          element={<SidebarWithHeader children={<StudentProfile />} />}
        />
        <Route
          path="/quizzes"
          element={<SidebarWithHeader children={<QuizHome />} />}
        />
      </Routes>
    </BrowserRouter>
    // // <div>
    // //   {/* <SidebarWithHeader children={<StackBox />} /> */}
    // //   {/* <SidebarWithHeader children={<Dashboard />} /> */}

    // //   {/* <Header /> */}
    // //   {/* <Student /> */}
    // // </div>
    //   <div>
    //     <SidebarWithHeader children={<QuizHome />} />
    //   </div>
  );
};

export default App;
