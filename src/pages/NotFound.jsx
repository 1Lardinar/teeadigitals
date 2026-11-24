import { Link } from "../router.jsx";
import { NotFoundArt } from "../components/Illustrations.jsx";
import { useSEO } from "../components/UI.jsx";

export default function NotFound() {
  useSEO("Page not found", "The page you are looking for could not be found.");
  return (
    <section className="nf">
      <div className="wrap center-block">
        <NotFoundArt />
        <h1>This footprint leads nowhere.</h1>
        <p className="sub">The page you are looking for has moved or does not exist.</p>
        <div className="row" style={{ justifyContent: "center" }}>
          <Link className="btn" to="/">Back to home</Link>
          <Link className="btn ghost dark" to="/contact">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
