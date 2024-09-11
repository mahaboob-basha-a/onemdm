import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import compensation from 'src/modules/compensation/compensationReducers';
import person from 'src/modules/person/personReducers';
import jobTitle from 'src/modules/jobTitle/jobTitleReducers';
import project from 'src/modules/project/projectReducers';
import assignment from 'src/modules/assignment/assignmentReducers';
import dashboard from 'src/modules/dashboard/dashboardReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    compensation,
    person,
    jobTitle,
    project,
    assignment,
    dashboard,
  });
