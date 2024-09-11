import Error400 from '../../errors/Error400';
import lodash from 'lodash';
import { QueryTypes, UniqueConstraintError } from 'sequelize';
import { IRepositoryOptions } from './IRepositoryOptions';

/**
 * Abstracts some basic Sequelize operations.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
export default class SequelizeRepository {
  /**
   * Cleans the database.
   */
  static async cleanDatabase(database) {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error(
        'Clean database only allowed for test!',
      );
    }

    await database.sequelize.sync({ force: true });
  }

  /**
   * Returns the currentUser if it exists on the options.
   */
  static getCurrentUser(options: IRepositoryOptions) {
    return (options && options.currentUser) || { id: null };
  }

  /**
   * Returns the tenant if it exists on the options.
   */
  static getCurrentTenant(options: IRepositoryOptions) {
    return (
      (options && options.currentTenant) || { id: null }
    );
  }

  /**
   * Returns available and assigned hours.
   */
  static async getUsageByHoursData(options: IRepositoryOptions) {
    const tenant = this.getCurrentTenant(
      options,
    );

    const availability = await options.database.sequelize.query(
      "SELECT personId, MAX(effectiveDate), workAvailability FROM compensations WHERE tenantId = '" + tenant.id + "' GROUP BY personId",
      {  
        raw: true,
        type: QueryTypes.SELECT
      });

    const totalAvailableHours = availability.reduce((partialSum, row) => partialSum + row.workAvailability, 0);

    const assignedHours = await options.database.sequelize.query(
      "SELECT SUM(hoursPerWeek) as assignedHours FROM assignments WHERE (endDate IS NULL OR endDate < '8/31/2022') AND tenantId = '" + tenant.id + "'",
      {
        raw: true,
        type: QueryTypes.SELECT
      }
    )

    return { totalAvailableHours: totalAvailableHours, assignedHours: assignedHours[0].assignedHours};
  }

  /**
   *  Returns the number of people per each role in the company.
   */
  static async getNumberOfPeoplePerRole(options: IRepositoryOptions) {
    const tenant = this.getCurrentTenant(
      options,
    );

    const people = await options.database.sequelize.query(
      "SELECT personId, title, MAX(effectiveDate) as date FROM jobTitles WHERE tenantId = '" + tenant.id + "' GROUP BY personId",
      {
        raw: true,
        type: QueryTypes.SELECT
      });

    const emptyCountPerRole = {
      projectManager: 0,
      technicalLead: 0,
      seniorDeveloper: 0,
      intermediateDeveloper: 0,
      juniorDeveloper: 0
    }
    
    const countPerRole = people.reduce((partialCount, row) => {
      switch(row.title) {
        case 'Project Manager':
          partialCount.projectManager += 1;
          break;
        case 'Technical Lead':
          partialCount.technicalLead += 1;
          break;
        case 'Senior Developer':
          partialCount.seniorDeveloper += 1;
          break;
        case 'Intermediate Developer':
          partialCount.intermediateDeveloper += 1;
          break;
        case 'Junior Developer':
          partialCount.juniorDeveloper += 1;
          break;
      }

      return partialCount;
    }, emptyCountPerRole)

    return countPerRole;
  }

  /**
   * Returns available and assigned hours.
   */
  static async getUsageByPeopleData(options: IRepositoryOptions) {
    const tenant = this.getCurrentTenant(
      options,
    );

    const availability = await options.database.sequelize.query(
      "SELECT fullName, availability.workAvailability, assignedHours.assignedHours, jobTitles.title FROM people \
        LEFT JOIN (SELECT personId, MAX(effectiveDate), workAvailability FROM compensations WHERE tenantId = '" + tenant.id + "' GROUP BY personId) as availability ON people.Id = availability.personId \
        LEFT JOIN (SELECT personId, SUM(hoursPerWeek) as assignedHours FROM assignments WHERE (endDate IS NULL OR endDate < '8/31/2022') AND tenantId = '" + tenant.id + "' GROUP BY personId) AS assignedHours ON people.Id = assignedHours.personId \
        LEFT JOIN (SELECT personId, title, MAX(effectiveDate) as date FROM jobTitles WHERE tenantId = '" + tenant.id + "' GROUP BY personId) AS jobTitles ON people.Id = jobTitles.personId \
      WHERE tenantId = '" + tenant.id + "' AND workAvailability > 0",
      {  
        raw: true,
        type: QueryTypes.SELECT
      });

    const emptyUsageByPeople = {
      fullyBusy: 0,
      partlyIdle: 0,
      fullyIdle: 0
    }
    
    const usageByPeople = availability.reduce((partialCount, row) => {
      const workAvailability = row.workAvailability;
      const assignedHours = row.assignedHours ? row.assignedHours : 0;

      if (assignedHours === 0 && workAvailability > 0) {
        partialCount.fullyIdle += 1;
      } else if (workAvailability > assignedHours) {
        partialCount.partlyIdle += 1;
      } else {
        partialCount.fullyBusy += 1;
      }

      return partialCount;
    }, emptyUsageByPeople)

    return usageByPeople;
  }

  /**
   * Returns idleness per role.
   */
   static async getIdlenessPerRoleData(options: IRepositoryOptions) {
    const tenant = this.getCurrentTenant(
      options,
    );

    const availability = await options.database.sequelize.query(
      "SELECT fullName, availability.workAvailability, assignedHours.assignedHours, jobTitles.title FROM people \
        LEFT JOIN (SELECT personId, MAX(effectiveDate), workAvailability FROM compensations WHERE tenantId = '" + tenant.id + "' GROUP BY personId) as availability ON people.Id = availability.personId \
        LEFT JOIN (SELECT personId, SUM(hoursPerWeek) as assignedHours FROM assignments WHERE (endDate IS NULL OR endDate < '8/31/2022') AND tenantId = '" + tenant.id + "' GROUP BY personId) AS assignedHours ON people.Id = assignedHours.personId \
        LEFT JOIN (SELECT personId, title, MAX(effectiveDate) as date FROM jobTitles WHERE tenantId = '" + tenant.id + "' GROUP BY personId) AS jobTitles ON people.Id = jobTitles.personId \
      WHERE tenantId = '" + tenant.id + "' AND workAvailability > 0",
      {  
        raw: true,
        type: QueryTypes.SELECT
      });

    const emptyCountPerRole = {
      projectManager: {
        availableHours: 0,
        assignedHours: 0,
        usage: 100,
      },
      technicalLead: {
        availableHours: 0,
        assignedHours: 0,
        usage: 100,
      },
      seniorDeveloper: {
        availableHours: 0,
        assignedHours: 0,
        usage: 100,
      },
      intermediateDeveloper: {
        availableHours: 0,
        assignedHours: 0,
        usage: 100,
      },
      juniorDeveloper: {
        availableHours: 0,
        assignedHours: 0,
        usage: 100
      }
    }
    
    const usageByPeople = availability.reduce((partialCount, row) => {
      const workAvailability = row.workAvailability;
      const assignedHours = row.assignedHours ? row.assignedHours : 0;

      switch(row.title) {
        case 'Project Manager':
          partialCount.projectManager.availableHours += workAvailability;
          partialCount.projectManager.assignedHours += assignedHours;
          break;
        case 'Technical Lead':
          partialCount.technicalLead.availableHours += workAvailability;
          partialCount.technicalLead.assignedHours += assignedHours;
          break;
        case 'Senior Developer':
          partialCount.seniorDeveloper.availableHours += workAvailability;
          partialCount.seniorDeveloper.assignedHours += assignedHours;
          break;
        case 'Intermediate Developer':
          partialCount.intermediateDeveloper.availableHours += workAvailability;
          partialCount.intermediateDeveloper.assignedHours += assignedHours;
          break;
        case 'Junior Developer':
          partialCount.juniorDeveloper.availableHours += workAvailability;
          partialCount.juniorDeveloper.assignedHours += assignedHours;
          break;
      }

      return partialCount;
    }, emptyCountPerRole)

    usageByPeople.projectManager.usage = Math.round(100 * usageByPeople.projectManager.assignedHours / usageByPeople.projectManager.availableHours);
    usageByPeople.technicalLead.usage = Math.round(100 * usageByPeople.technicalLead.assignedHours / usageByPeople.technicalLead.availableHours);
    usageByPeople.seniorDeveloper.usage = Math.round(100 * usageByPeople.seniorDeveloper.assignedHours / usageByPeople.seniorDeveloper.availableHours);
    usageByPeople.intermediateDeveloper.usage = Math.round(100 * usageByPeople.intermediateDeveloper.assignedHours / usageByPeople.intermediateDeveloper.availableHours);
    usageByPeople.juniorDeveloper.usage = Math.round(100 * usageByPeople.juniorDeveloper.assignedHours / usageByPeople.juniorDeveloper.availableHours);

    return usageByPeople;
  }

  /**
   * Returns the transaction if it exists on the options.
   */
  static getTransaction(options: IRepositoryOptions) {
    return (options && options.transaction) || undefined;
  }

  /**
   * Creates a database transaction.
   */
  static async createTransaction(database) {
    return database.sequelize.transaction();
  }

  /**
   * Commits a database transaction.
   */
  static async commitTransaction(transaction) {
    return transaction.commit();
  }

  /**
   * Rolls back a database transaction.
   */
  static async rollbackTransaction(transaction) {
    return transaction.rollback();
  }

  static handleUniqueFieldError(
    error,
    language,
    entityName,
  ) {
    if (!(error instanceof UniqueConstraintError)) {
      return;
    }

    const fieldName = lodash.get(error, 'errors[0].path');
    throw new Error400(
      language,
      `entities.${entityName}.errors.unique.${fieldName}`,
    );
  }
}
