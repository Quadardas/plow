import type { EAvgTime, ETaskCount, ETypeWorker, EWorkerExp } from @/enums/treeCriteria.enum;
import type { ITask } from  ./ task.model;

export interface IWorker {
  id: number;
  name: string;
  //tasks: Array<ITask>;
  tasks: Array<number>;
  info: IWorkerInfo;
}

export interface IWorkerInfo {
  DutyKey: number;
  DutyName: ETypeWorker;
  ExpName: EWorkerExp;
  Login: string;
  Name: string;
  Patron: string;
  PhysKey: number;
  RoleKey: number;
  Surname: string;
  avgTime: EAvgTime;
  Role: string;
  UserRoleKey: number;
  UserRoleName: string;
  tasks: Array<ITask>;
}