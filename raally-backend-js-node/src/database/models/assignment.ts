import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const assignment = sequelize.define(
    'assignment',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      hoursPerWeek: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          max: 40,
        }
      },
      startDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('startDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('startDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('endDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('endDate'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      role: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "project-manager",
            "technical-team-lead",
            "lead-developer",
            "developer",
            "qa",
            "designer"
          ]],
        }
      },
      notes: {
        type: DataTypes.TEXT,
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

  assignment.associate = (models) => {
    models.assignment.belongsTo(models.person, {
      as: 'person',
      constraints: true,
      foreignKey: {
        allowNull: false,
      },
    });

    models.assignment.belongsTo(models.project, {
      as: 'project',
      constraints: true,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.assignment.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.assignment.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.assignment.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return assignment;
}
