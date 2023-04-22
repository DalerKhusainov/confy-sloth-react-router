import { Link, Outlet } from "react-router-dom";
import HeroImage from "../../../public/hero.jpg";

const Home = () => {
  return (
    <section className="section">
      <h2>home page</h2>
      {/* <img src="../../../public/hero.jpg" alt="chair image" /> */}
      {/* <HeroImage /> */}
      {/* <p>Text</p> */}
      <Outlet />
    </section>
  );
};
export default Home;
