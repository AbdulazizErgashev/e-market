import { Routes, Route } from "react-router-dom";
import pages from ".";
import PrivateRoute from "../../components/PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {pages.map(({ path, component: Component, name }) => {
        if (path === "/" || path === "/products") {
          return (
            <Route
              key={name}
              path={path}
              element={
                <PrivateRoute>
                  {" "}
                  <Component />{" "}
                </PrivateRoute>
              }
            />
          );
        }
        return <Route key={name} path={path} element={<Component />} />;
      })}
    </Routes>
  );
};

export default AppRoutes;
