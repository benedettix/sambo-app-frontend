import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home/Home";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { routeConfig } from "./config/routeConfig";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import ProgramsPage from "./pages/ProgramsPage/ProgramsPage";
import Blog from "./pages/Blog/Blog";
import BlogPostPage from "./pages/BlogPostPage/BlogPostPage";
import Contacts from "./pages/Contacts/Contacts";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Schedule from "./pages/Schedule/Schedule";

import AddBlogPage from "./adminPages/AddBlogPage/AddBlogPage";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import { setAdmin } from "./Redux/features/loginSlice/loginSlice";
import { useDispatch } from "react-redux";
import EditBlogPage from "./adminPages/EditBlogPage/EditBlogPage";
import CookieModal from "./components/CookieModal/CookieModal";
import Loader from "./components/Loader/Loader";
import { setLoader } from "./Redux/features/loaderSlice/loaderSlice";
import ShowContactsPage from "./adminPages/ShowContactsPage/ShowContactsPage";
import PhotoGaleryPage from "./pages/PhotoGaleryPage/PhotoGaleryPage";
import Ratings from "./pages/Ratings/Ratings";

function App() {
  const searchValue = useSelector((state) => state.searchStore.searchValue);
  const isStart = useSelector((state) => state.searchStore.isStart);
  const pages = useSelector((state) => state.pageStore.pageList);
  const admin = useSelector((state) => state.adminStore.admin);
  const [IsCheckingUserFinished, setIsCheckingUserFinished] = useState(false);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  useEffect(() => {
    //MOglo se koristiti useSearchParams da ga iskoristimo na blog page samo da iskoristimo njegove parametre za search da pokaze ali nema veze.

    for (let i = 0; i < pages.length; i++) {
      if (searchValue.toLowerCase() === "naslovna") {
        navigate("/");
      } else if (
        searchValue.length > 3 &&
        pages[i].toLowerCase().includes(searchValue.toLowerCase())
      ) {
        navigate(`/${pages[i]}`);
        break;
      } else if (searchValue === "" && isStart) {
        navigate("/");
      } else if (
        searchValue.toLowerCase() !== pages[i].toLowerCase() &&
        isStart
      ) {
        navigate("/page-not-found");
      }
    }
  }, [searchValue]);

  useEffect(() => {
    handleUserLogin();
  }, []);
  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    dispatch(setLoader(true));
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 250));

      // Toggle loading state
      dispatch(setLoader(false));
    };

    loadData();
  });
  let location = useLocation();
  const handleUserLogin = () => {
    if (!localStorage.hasOwnProperty("adminOn")) {
      // navigate("/");
    } else {
      dispatch(setAdmin(JSON.parse(localStorage.getItem("adminOn"))));
    }
    setIsCheckingUserFinished(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Navigation />
      <Loader />
      {!localStorage.hasOwnProperty("cookie") ? <CookieModal /> : null}

      {IsCheckingUserFinished && (
        <Routes>
          <Route path={routeConfig.HOME.url} element={<Home />} />
          <Route path={routeConfig.ABOUT.url} element={<About />} />
          <Route path={routeConfig.PROGRAM.url} element={<ProgramsPage />} />
          <Route path={routeConfig.BLOG.url} element={<Blog />} />
          <Route path={routeConfig.RATINGS.url} element={<Ratings />} />
          <Route
            path={routeConfig.PHOTOGALERY.url}
            element={<PhotoGaleryPage />}
          />
          <Route path="/blogovi/:id" element={<BlogPostPage />} />
          {/* ADMIN */}
          {admin?.username && (
            <>
              <Route path="/blogovi/dodajblog" element={<AddBlogPage />} />
              <Route
                path="/blogovi/editujblog/:id"
                element={<EditBlogPage />}
              />
              <Route path="/prikazikontakte" element={<ShowContactsPage />} />
            </>
          )}
          {/* ADMIN */}

          <Route path={routeConfig.CONTACTS.url} element={<Contacts />} />
          <Route
            path={routeConfig.PAGENOTFOUND.url}
            element={<PageNotFound />}
          />
          <Route path={routeConfig.SCHEDULE.url} element={<Schedule />} />
          <Route path={routeConfig.ADMIN.url} element={<AdminLogin />} />
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;
