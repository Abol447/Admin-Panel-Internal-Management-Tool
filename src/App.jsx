import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Dasboard from "./pages/dashboard/Dasboard";
import MyDetail from "./pages/myDetail/MyDetail";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dasboard />} />
        <Route path="my-detail" element={<MyDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
