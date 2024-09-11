import Permissions from 'src/security/permissions';
import config from 'src/config';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: ['/','/dashboard'],
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/compensation',
    loader: () =>
      import('src/view/compensation/list/CompensationListPage'),
    permissionRequired: permissions.compensationRead,
    exact: true,
  },
  {
    path: '/compensation/new',
    loader: () =>
      import('src/view/compensation/form/CompensationFormPage'),
    permissionRequired: permissions.compensationCreate,
    exact: true,
  },
  {
    path: '/compensation/importer',
    loader: () =>
      import(
        'src/view/compensation/importer/CompensationImporterPage'
      ),
    permissionRequired: permissions.compensationImport,
    exact: true,
  },
  {
    path: '/compensation/:id/edit',
    loader: () =>
      import('src/view/compensation/form/CompensationFormPage'),
    permissionRequired: permissions.compensationEdit,
    exact: true,
  },
  {
    path: '/compensation/:id',
    loader: () =>
      import('src/view/compensation/view/CompensationViewPage'),
    permissionRequired: permissions.compensationRead,
    exact: true,
  },

  {
    path: '/person',
    loader: () =>
      import('src/view/person/list/PersonListPage'),
    permissionRequired: permissions.personRead,
    exact: true,
  },
  {
    path: '/person/new',
    loader: () =>
      import('src/view/person/form/PersonFormPage'),
    permissionRequired: permissions.personCreate,
    exact: true,
  },
  {
    path: '/person/importer',
    loader: () =>
      import(
        'src/view/person/importer/PersonImporterPage'
      ),
    permissionRequired: permissions.personImport,
    exact: true,
  },
  {
    path: '/person/:id/edit',
    loader: () =>
      import('src/view/person/form/PersonFormPage'),
    permissionRequired: permissions.personEdit,
    exact: true,
  },
  {
    path: '/person/:id',
    loader: () =>
      import('src/view/person/view/PersonViewPage'),
    permissionRequired: permissions.personRead,
    exact: true,
  },

  {
    path: '/job-title',
    loader: () =>
      import('src/view/jobTitle/list/JobTitleListPage'),
    permissionRequired: permissions.jobTitleRead,
    exact: true,
  },
  {
    path: '/job-title/new',
    loader: () =>
      import('src/view/jobTitle/form/JobTitleFormPage'),
    permissionRequired: permissions.jobTitleCreate,
    exact: true,
  },
  {
    path: '/job-title/importer',
    loader: () =>
      import(
        'src/view/jobTitle/importer/JobTitleImporterPage'
      ),
    permissionRequired: permissions.jobTitleImport,
    exact: true,
  },
  {
    path: '/job-title/:id/edit',
    loader: () =>
      import('src/view/jobTitle/form/JobTitleFormPage'),
    permissionRequired: permissions.jobTitleEdit,
    exact: true,
  },
  {
    path: '/job-title/:id',
    loader: () =>
      import('src/view/jobTitle/view/JobTitleViewPage'),
    permissionRequired: permissions.jobTitleRead,
    exact: true,
  },

  {
    path: '/project',
    loader: () =>
      import('src/view/project/list/ProjectListPage'),
    permissionRequired: permissions.projectRead,
    exact: true,
  },
  {
    path: '/project/new',
    loader: () =>
      import('src/view/project/form/ProjectFormPage'),
    permissionRequired: permissions.projectCreate,
    exact: true,
  },
  {
    path: '/project/importer',
    loader: () =>
      import(
        'src/view/project/importer/ProjectImporterPage'
      ),
    permissionRequired: permissions.projectImport,
    exact: true,
  },
  {
    path: '/project/:id/edit',
    loader: () =>
      import('src/view/project/form/ProjectFormPage'),
    permissionRequired: permissions.projectEdit,
    exact: true,
  },
  {
    path: '/project/:id',
    loader: () =>
      import('src/view/project/view/ProjectViewPage'),
    permissionRequired: permissions.projectRead,
    exact: true,
  },

  {
    path: '/assignment',
    loader: () =>
      import('src/view/assignment/list/AssignmentListPage'),
    permissionRequired: permissions.assignmentRead,
    exact: true,
  },
  {
    path: '/assignment/new',
    loader: () =>
      import('src/view/assignment/form/AssignmentFormPage'),
    permissionRequired: permissions.assignmentCreate,
    exact: true,
  },
  {
    path: '/assignment/importer',
    loader: () =>
      import(
        'src/view/assignment/importer/AssignmentImporterPage'
      ),
    permissionRequired: permissions.assignmentImport,
    exact: true,
  },
  {
    path: '/assignment/:id/edit',
    loader: () =>
      import('src/view/assignment/form/AssignmentFormPage'),
    permissionRequired: permissions.assignmentEdit,
    exact: true,
  },
  {
    path: '/assignment/:id',
    loader: () =>
      import('src/view/assignment/view/AssignmentViewPage'),
    permissionRequired: permissions.assignmentRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
