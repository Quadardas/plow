import { EAvgTime, ETaskCount, ETaskPriorities, ETreeResult, ETypeWorker, EWorkerExp } from '@/enums/treeCriteria.enum';
import type { ITreeRule } from '@/models/rule.model';

export const RULES: Array<ITreeRule> = [
  {
    id: 0,
    exp: EWorkerExp.Junior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.Frontend
  },

]