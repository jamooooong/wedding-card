import { Link } from "react-router-dom";
import Greeting from "./components/Greeting";
import Calendar from "./components/Calendar";
import HowToCome from "./components/HowToCome";
import Info from "./components/Info";
import Footer from "../../shared/components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="mx-auto flex min-h-screen w-full max-w-lg flex-col">
        <Greeting />
        <Calendar />
        <HowToCome />
        <Info />

        <Link to="/guestbook" className="fixed right-4 bottom-4 z-50">
          <button className="rounded-xl bg-blue-500 px-6 py-2 text-white shadow-md hover:bg-blue-600">
            방명록 남기기 ✍️
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
