import Roles from 'src/security/roles';
import Plans from 'src/security/plans';
import Storage from 'src/security/storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      compensationImport: {
        id: 'compensationImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      compensationCreate: {
        id: 'compensationCreate',
        allowedRoles: [],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      compensationEdit: {
        id: 'compensationEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      compensationDestroy: {
        id: 'compensationDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      compensationRead: {
        id: 'compensationRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      compensationAutocomplete: {
        id: 'compensationAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      personImport: {
        id: 'personImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      personCreate: {
        id: 'personCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      personEdit: {
        id: 'personEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      personDestroy: {
        id: 'personDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      personRead: {
        id: 'personRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      personAutocomplete: {
        id: 'personAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      jobTitleImport: {
        id: 'jobTitleImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      jobTitleCreate: {
        id: 'jobTitleCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      jobTitleEdit: {
        id: 'jobTitleEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      jobTitleDestroy: {
        id: 'jobTitleDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      jobTitleRead: {
        id: 'jobTitleRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      jobTitleAutocomplete: {
        id: 'jobTitleAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      projectImport: {
        id: 'projectImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      projectCreate: {
        id: 'projectCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      projectEdit: {
        id: 'projectEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      projectDestroy: {
        id: 'projectDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      projectRead: {
        id: 'projectRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      projectAutocomplete: {
        id: 'projectAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      assignmentImport: {
        id: 'assignmentImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      assignmentCreate: {
        id: 'assignmentCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      assignmentEdit: {
        id: 'assignmentEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      assignmentDestroy: {
        id: 'assignmentDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      assignmentRead: {
        id: 'assignmentRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      assignmentAutocomplete: {
        id: 'assignmentAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
