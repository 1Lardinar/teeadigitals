import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

// Tiny History-API router: zero dependencies, clean URLs, SPA navigation.
const RouterCtx = createContext({ path: "/", navigate: () => {} });

export function Router({ children }) {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((to) => {
    const url = new URL(to, window.location.origin);
    if (url.pathname + url.search === window.location.pathname + window.location.search) {
      window.scrollTo({ top: 0 });
      return;
    }
    window.history.pushState({}, "", url.pathname + url.search + url.hash);
    setPath(url.pathname);
    window.scrollTo({ top: 0 });
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);
  return <RouterCtx.Provider value={value}>{children}</RouterCtx.Provider>;
}

export const useRouter = () => useContext(RouterCtx);

export function Link({ to, children, onClick, ...rest }) {
  const { navigate } = useRouter();
  const external = /^(https?:|mailto:|tel:)/.test(to);
  const handle = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || external || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || rest.target === "_blank") return;
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  );
}

export function NavLink({ to, children, end = false, ...rest }) {
  const { path } = useRouter();
  const active = end || to === "/" ? path === to : path === to || path.startsWith(to + "/");
  return (
    <Link to={to} aria-current={active ? "page" : undefined} {...rest}>
      {children}
    </Link>
  );
}

// "/services/:slug" style matching.
export function matchRoute(path, routes) {
  const clean = path.length > 1 ? path.replace(/\/+$/, "") : path;
  for (const route of routes) {
    const keys = [];
    const re = new RegExp(
      "^" + route.path.replace(/:([A-Za-z]+)/g, (_, k) => (keys.push(k), "([^/]+)")) + "$"
    );
    const m = clean.match(re);
    if (m) {
      const params = {};
      keys.forEach((k, i) => (params[k] = decodeURIComponent(m[i + 1])));
      return { route, params };
    }
  }
  return null;
}
