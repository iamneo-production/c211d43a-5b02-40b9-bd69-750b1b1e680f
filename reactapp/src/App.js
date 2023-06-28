import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import AddAdmin from "./Components/Admin/AddAdmin";
import EditAdmin from "./Components/Admin/EditAdmin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/admin/add" element={<AddAdmin />} />
          <Route path="/admin/edit/:adminid" element={<EditAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
