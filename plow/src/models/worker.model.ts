import type { EAvgTime, ETaskCount, ETypeWorker, EWorkerExp } from "@/enums/treeCriteria.enum";
import type { ITask } from "./task.model";

export interface IWorker {
  id: number;
  name: string;
  //tasks: Array<ITask>;
   tasks: Array<number>;
  info: IWorkerInfo;
}

export interface IWorkerInfo {
  type: ETypeWorker;
  exp: EWorkerExp;
  avgTime: EAvgTime;
  tasksEnum?: ETaskCount;
}