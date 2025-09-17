import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Dasboard from "./pages/dashboard/Dasboard";
import MyDetail from "./pages/myDetail/MyDetail";

import Vacations from "./pages/vacations/Vacations";

import Login from "./pages/Auth/Login";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dasboard />} />
          <Route path="my-detail" element={<MyDetail />} />
          <Route path="Vacations" element={<Vacations />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
