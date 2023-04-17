import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <h2>Home Page</h2>
      <Link to="About" className="btn">
        About
      </Link>
    </section>
  );
};
export default Home;
