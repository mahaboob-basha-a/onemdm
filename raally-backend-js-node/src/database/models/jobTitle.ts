import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const jobTitle = sequelize.define(
    'jobTitle',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      effectiveDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('effectiveDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('effectiveDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,    
        validate: {
          len: [0, 255],
        },    
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['importHash', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  jobTitle.associate = (models) => {
    models.jobTitle.belongsTo(models.person, {
      as: 'person',
      constraints: true,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.jobTitle.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.jobTitle.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.jobTitle.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return jobTitle;
}
