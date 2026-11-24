import { Router, matchRoute, useRouter } from "./router.jsx";
import { CookieBanner, Footer, Header, ScrollTop } from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Vision from "./pages/Vision.jsx";
import { ServicesPage, ServiceDetail } from "./pages/Services.jsx";
import Industries from "./pages/Industries.jsx";
import WhyUs from "./pages/WhyUs.jsx";
import Academy from "./pages/Academy.jsx";
import { Insights, Post } from "./pages/Insights.jsx";
import Updates from "./pages/Updates.jsx";
import Contact from "./pages/Contact.jsx";
import { Privacy, Terms } from "./pages/Legal.jsx";
import NotFound from "./pages/NotFound.jsx";

const ROUTES = [
  { path: "/", Page: Home },
  { path: "/about", Page: About },
  { path: "/vision", Page: Vision },
  { path: "/services", Page: ServicesPage },
  { path: "/services/:slug", Page: ServiceDetail },
  { path: "/industries", Page: Industries },
  { path: "/why-us", Page: WhyUs },
  { path: "/academy", Page: Academy },
  { path: "/insights", Page: Insights },
  { path: "/insights/:slug", Page: Post },
  { path: "/updates", Page: Updates },
  { path: "/contact", Page: Contact },
  { path: "/privacy", Page: Privacy },
  { path: "/terms", Page: Terms },
];

function Routes() {
  const { path } = useRouter();
  const hit = matchRoute(path, ROUTES);
  const Page = hit ? hit.route.Page : NotFound;
  return <Page {...(hit ? hit.params : {})} key={path} />;
}

export default function App() {
  return (
    <Router>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes />
      </main>
      <Footer />
      <CookieBanner />
      <ScrollTop />
    </Router>
  );
}
