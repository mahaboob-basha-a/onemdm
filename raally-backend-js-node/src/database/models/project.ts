import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const project = sequelize.define(
    'project',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      projectId: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      type: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "managed-project",
            "non-managed-project",
            "team-augmentation"
          ]],
        }
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
        {
          unique: true,
          fields: ['projectId', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
        {
          unique: true,
          fields: ['name', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  project.associate = (models) => {



    
    models.project.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.project.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.project.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return project;
}
