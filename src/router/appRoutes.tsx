import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Articles from "../components/articles/Articles";

const AppRoutes: FC = () => (
  <Routes>
    <Route path="/articles" element={<Articles />} />
    <Route path="/" element={<Navigate replace to="/articles" />} />
    {/*<Route path="/articles/:id" element={} />*/}
  </Routes>
);
export default AppRoutes;
