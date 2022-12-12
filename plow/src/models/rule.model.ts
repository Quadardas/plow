import type { EAvgTime, ETaskCount, ETaskPriorities, ETreeResult, ETypeWorker, EWorkerExp } from "@/enums/treeCriteria.enum";

export interface ITreeRule {
  id: number,
  avgTime: EAvgTime;
  exp: EWorkerExp;
  type: ETypeWorker;
  priority: ETaskPriorities;
  tasksCount: ETaskCount;
  result: ETreeResult;
}