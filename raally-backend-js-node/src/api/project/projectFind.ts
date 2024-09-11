import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import ProjectService from '../../services/projectService';
import AssignmentService from '../../services/assignmentService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.projectRead,
    );

    const payload = await new ProjectService(req).findById(
      req.params.id,
    );

    const assignmentPayload = await new AssignmentService(req).findAndCountAll({
      filter: {
        project: req.params.id,
        isActive: true
      }
    });

    await ApiResponseHandler.success(req, res, {...payload, teamMembers: assignmentPayload});
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
