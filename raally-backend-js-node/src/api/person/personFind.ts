import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import PersonService from '../../services/personService';
import AssignmentService from '../../services/assignmentService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.personRead,
    );

    const payload = await new PersonService(req).findById(
      req.params.id,
    );

    const assignmentPayload = await new AssignmentService(req).findAndCountAll({
      filter: {
        person: req.params.id,
        isActive: true
      }
    });

    await ApiResponseHandler.success(req, res, {...payload, assignments: assignmentPayload});
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
