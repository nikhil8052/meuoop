// import Header from './components/user/Header';
// import Sidebar from './components/user/Sidebar';
// import Footer from './components/user/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import MainContent from './components/user/MainContent';
import './components/user/styles/user.css';
import HomeContent from './components/user/pages/HomeContent';


export default function Home() {
  return (
    <>
         <HomeContent />
    </>
  );
}
