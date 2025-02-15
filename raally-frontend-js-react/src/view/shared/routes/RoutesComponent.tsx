import authSelectors from 'src/modules/auth/authSelectors';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import EmailUnverifiedRoute from 'src/view/shared/routes/EmailUnverifiedRoute';
import PrivateRoute from 'src/view/shared/routes/PrivateRoute';
import PublicRoute from 'src/view/shared/routes/PublicRoute';
import CustomLoadable from 'src/view/shared/CustomLoadable';
import ProgressBar from 'src/view/shared/ProgressBar';
import routes from 'src/view/routes';
import EmptyTenantRoute from 'src/view/shared/routes/EmptyTenantRoute';
import EmptyPermissionsRoute from 'src/view/shared/routes/EmptyPermissionsRoute';

function RoutesComponent(props) {
  const isInitialMount = useRef(true);

  const authLoading = useSelector(
    authSelectors.selectLoadingInit,
  );
  const layoutLoading = useSelector(
    layoutSelectors.selectLoading,
  );
  const loading = authLoading || layoutLoading;
  const currentUser = useSelector(
    authSelectors.selectCurrentUser,
  );
  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      ProgressBar.start();
      return;
    }

    if (!loading) {
      ProgressBar.done();
    }
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Switch>
      {routes.publicRoutes.map((route) => (
        <PublicRoute
          key={route.path}
          exact
          path={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}

      {routes.emailUnverifiedRoutes.map((route) => (
        <EmailUnverifiedRoute
          key={route.path}
          exact
          path={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}

      {routes.emptyTenantRoutes.map((route) => (
        <EmptyTenantRoute
          key={route.path}
          exact
          path={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}

      {routes.emptyPermissionsRoutes.map((route) => (
        <EmptyPermissionsRoute
          key={route.path}
          exact
          path={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}

      {routes.privateRoutes.map((route) => (
        <PrivateRoute
          key={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          permissionRequired={route.permissionRequired}
          path={route.path}
          component={CustomLoadable({
            loader: route.loader,
          })}
          exact={Boolean(route.exact)}
        />
      ))}

      {routes.simpleRoutes.map((route) => (
        <Route
          key={route.path}
          exact
          path={route.path}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}
    </Switch>
  );
}

export default RoutesComponent;
