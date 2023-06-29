import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Components/Admins/Admin";
import AddAdmin from "./Components/Admins/AddAdmin";
import EditAdmin from "./Components/Admins/EditAdmin";

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
