export default function (sequelize, DataTypes) {
  const globalSettings = sequelize.define(
    'globalSettings',
    {
      useRateLimit: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
      paranoid: false,
    },
  );
  
  globalSettings.removeAttribute('id');

  return globalSettings;
}
