export default (app) => {
  app.put(
    `/global-settings`,
    require('./globalSettingsSave').default,
  );
};
