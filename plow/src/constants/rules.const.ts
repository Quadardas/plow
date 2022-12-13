import { EAvgTime, ETaskCount, ETaskPriorities, ETreeResult, ETypeWorker, EWorkerExp } from "@/enums/treeCriteria.enum";
import type { ITreeRule } from "@/models/rule.model";

export const RULES: Array<ITreeRule> = [
  {
    id: 0,
    exp: EWorkerExp.Middle,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Highest,
    result: ETreeResult.Apply,
    type: ETypeWorker.Backend,
  
  },
  {
    id: 1,
    exp: EWorkerExp.Middle,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Highest,
    result: ETreeResult.Apply,
    type: ETypeWorker.Backend,
  }
]