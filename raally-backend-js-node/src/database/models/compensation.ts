import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const compensation = sequelize.define(
    'compensation',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      type: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "hourly",
            "salaried"
          ]],
        }
      },
      workAvailability: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 5,
          max: 60,
        }
      },
      monetary: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {

        }
      },
      paidTimeOff: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      otherBenefits: {
        type: DataTypes.TEXT,
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

  compensation.associate = (models) => {
    models.compensation.belongsTo(models.person, {
      as: 'person',
      constraints: true,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.compensation.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.compensation.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.compensation.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return compensation;
}
