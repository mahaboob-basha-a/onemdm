import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import DashboardService from '../../services/dashboardService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.assignmentRead,
    );

    const dashboardService = new DashboardService(req);

    let payload = {
      totalElapsedTime: 0,
      currentUsageDataByHours: {},
      currentUsageDataByPeople: {},
      currentIdlePeopleByRole: {},
      numberOfPeople: {}
    };

    let payloadValues;

    await Promise.all([dashboardService.getUsageByHoursData(),
                 dashboardService.getNumberOfPeoplePerRole(),
                 dashboardService.getUsageByPeopleData(),
                 dashboardService.getIdlenessPerRoleData()]).then((values) => {
                  payloadValues = values;                  
                 });

    payload = generatePayload(dashboardService.getGatheringTime(), payloadValues);

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};

function generatePayload(elapsedTime, values) {
  const usageByHours = values[0];
  const countPerRole = values[1];
  const usageByPeople = values[2];
  const idlenessPerRole = values[3];

  const usageDataByHours = {
    elapsedTime: usageByHours.elapsedTime,
    idle: usageByHours.totalAvailableHours - usageByHours.assignedHours,
    busy: usageByHours.assignedHours 
  };

  const usageDataByPeople = {
    ...usageByPeople
  };

  const idlePeopleByRole = {
    elapsedTime: idlenessPerRole.elapsedTime,
    projectManager: idlenessPerRole.projectManager.usage,
    technicalLead: idlenessPerRole.technicalLead.usage,
    seniorDeveloper: idlenessPerRole.seniorDeveloper.usage,
    intermediateDeveloper: idlenessPerRole.intermediateDeveloper.usage,
    juniorDeveloper: idlenessPerRole.juniorDeveloper.usage
  };

  const numberOfPeople = {
    ...countPerRole
  };

  return {
    totalElapsedTime: elapsedTime,
    currentUsageDataByHours: usageDataByHours,
    currentUsageDataByPeople: usageDataByPeople,
    currentIdlePeopleByRole: idlePeopleByRole,
    numberOfPeople: numberOfPeople
  };
} 