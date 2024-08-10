import {useRoutes} from 'react-router-dom';
import Header from './components/header/Header';
import routes from './routes';
import Footer from './components/footer/Footer';


function App() {
  const router = useRoutes(routes)
  // function darkMode() {
  //   if (localStorage.theme === "dark" || !("theme" in localStorage)) {
  //     //add class=dark in html element
  //     document.documentElement.classList.add("dark");
  // } else {
  //     //remove class=dark in html element
  //     document.documentElement.classList.remove("dark");
  // }

  // if (localStorage.theme === "dark") {
  //     localStorage.theme = "light";
  // } else {
  //     localStorage.theme = "dark";
  // }
  // }
  return (
    <>
    <div className='px-4 bg-zinc-50'>
    <Header/>
    {router}
    <Footer/>
    </div>
    </>
  )
}

export default App