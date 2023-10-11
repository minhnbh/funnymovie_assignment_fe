import { MainLayout } from "@app/components";
import React, { Suspense, useCallback } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AUTH_NAVIGATION, IRoute, MAIN_NAVIGATION } from "@routes/constants";
import { getAccessToken } from "@utils/authStorage";

const AppContainer: React.FC = () => {
  const token = getAccessToken();

  const RouteView = useCallback(
    (routeData: IRoute[], isChild = false) =>
      routeData.map(({ key, Component, path, routes }) => (
        <Route
          key={key}
          element={
            <Suspense>
              <Component />
            </Suspense>
          }
          path={path}
        >
          {routes && RouteView(routes, true)}
        </Route>
      )),
    []
  );

  return (
    <main>
      <Routes>
        {token && (
          <Route element={<MainLayout />}>{RouteView(MAIN_NAVIGATION)}</Route>
        )}
        <Route path="/" element={<Navigate to={"/login"} replace />} />
        {RouteView(AUTH_NAVIGATION)}
        <Route path="*" element={<Navigate to={"/login"} replace />} />
      </Routes>
    </main>
  );
};

export default AppContainer;
