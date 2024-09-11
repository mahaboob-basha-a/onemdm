import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';

export default class DashboardService {
  options: IServiceOptions;
  private timeToGather: number;

  constructor(options) {
    this.options = options;
    this.timeToGather = 0;
  }

  async getUsageByHoursData() {
    const totalElapsedTime = this.timeToGather;
    const startTime = process.hrtime();
    
    const responseData = await SequelizeRepository.getUsageByHoursData(this.options);
    
    const stopTime = process.hrtime(startTime);
    const elapsedTime = stopTime[0] * 1000 + stopTime[1] / 1000000;
    this.timeToGather = totalElapsedTime + elapsedTime;
    
    return responseData;
  }

  async getNumberOfPeoplePerRole() {
    const totalElapsedTime = this.timeToGather;
    const startTime = process.hrtime();

    const responseData = await SequelizeRepository.getNumberOfPeoplePerRole(this.options);
    
    const stopTime = process.hrtime(startTime);
    const elapsedTime = stopTime[0] * 1000 + stopTime[1] / 1000000
    this.timeToGather = totalElapsedTime + elapsedTime;
    
    return responseData;
  }

  async getUsageByPeopleData() {
    const totalElapsedTime = this.timeToGather;
    const startTime = process.hrtime();

    const responseData = await SequelizeRepository.getUsageByPeopleData(this.options);
    
    const stopTime = process.hrtime(startTime);
    const elapsedTime = stopTime[0] * 1000 + stopTime[1] / 1000000
    this.timeToGather = totalElapsedTime + elapsedTime;

    return responseData;
  }

  async getIdlenessPerRoleData() {
    const totalElapsedTime = this.timeToGather;
    const startTime = process.hrtime();

    const responseData = await SequelizeRepository.getIdlenessPerRoleData(this.options);
    
    const stopTime = process.hrtime(startTime);
    const elapsedTime = stopTime[0] * 1000 + stopTime[1] / 1000000
    this.timeToGather = totalElapsedTime + elapsedTime;
    
    return responseData;
  }

  getGatheringTime() {
    return this.timeToGather;
  }
}
