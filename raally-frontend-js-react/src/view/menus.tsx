import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: 'fas fa-th-large',
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: 'fas fa-credit-card',
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: 'fas fa-user-plus',
  },

  {
    path: '/audit-logs',
    icon: 'fas fa-history',
    label: i18n('auditLog.menu'),
    permissionRequired: null,
  },

  {
    path: '/settings',
    icon: 'fas fa-cog',
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/compensation',
    permissionRequired: permissions.compensationRead,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.compensation.menu'),
  },

  {
    path: '/person',
    permissionRequired: permissions.personRead,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.person.menu'),
  },

  {
    path: '/job-title',
    permissionRequired: permissions.jobTitleRead,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.jobTitle.menu'),
  },

  {
    path: '/project',
    permissionRequired: permissions.projectRead,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.project.menu'),
  },

  {
    path: '/assignment',
    permissionRequired: permissions.assignmentRead,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.assignment.menu'),
  },  
].filter(Boolean);
