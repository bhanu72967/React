import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemProvider } from "./components/ItemContext";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";

function App() {
  return (
    <ItemProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/edit/:id" element={<EditItem />} />
        </Routes>
      </Router>
    </ItemProvider>
  );
}

export default App;
