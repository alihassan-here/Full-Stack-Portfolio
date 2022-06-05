import './App.css';
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";
import AdminPanel from './components/admin/AdminPanel';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.login);
  const { loading } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch])

  return (
    <BrowserRouter>
      {
        loading ? <div>Loading...</div> : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account" element={isAuthenticated ? <AdminPanel /> : <Login />} />
            </Routes>
            <Footer />
          </>
        )
      }

    </BrowserRouter>
  );
}

export default App;
