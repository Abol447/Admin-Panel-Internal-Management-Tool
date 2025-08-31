import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Dasboard from "./pages/dashboard/Dasboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dasboard />} />
      </Route>
    </Routes>
  );
}

export default App;
