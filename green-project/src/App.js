import { Route, Routes } from "react-router-dom";


import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Rgister />} />
          <Route path='/addProject' element={<AddProject />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:projectId' element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
