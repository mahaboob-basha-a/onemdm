export default (app) => {
    app.get(
      `/tenant/:tenantId/dashboard`,
      require('./dashboardGetData').default,
    );
  };
  