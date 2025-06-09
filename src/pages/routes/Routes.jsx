import { Routes, Route } from "react-router-dom";
import pages from ".";

const AppRoutes = () => {
  return (
    <Routes>
      {pages.map(({ path, component: Component, name }) => (
        <Route key={name} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
