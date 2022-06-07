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
import Timeline from './components/admin/Timeline';
import Project from './components/admin/Project';
import Loader from "./components/loader/Loader";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.login);
  const { loading, user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch])

  return (
    <BrowserRouter>
      {
        loading ? <Loader /> : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home
                timelines={user.timeline}
                skills={user.skills}
              />} />
              <Route path="/about" element={<About about={user.about} />} />
              <Route path="/projects" element={<Projects projects={user.projects} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account" element={isAuthenticated ? <AdminPanel /> : <Login />} />
              <Route
                path="/admin/timeline"
                element={isAuthenticated ? <Timeline /> : <Login />}
              />
              <Route
                path="/admin/project"
                element={isAuthenticated ? <Project /> : <Login />}
              />
            </Routes>
            <Footer />
          </>
        )
      }

    </BrowserRouter>
  );
}

export default App;
