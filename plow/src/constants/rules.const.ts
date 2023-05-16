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
  {
    id: 1,
    exp: EWorkerExp.Junior,
    tasksCount: ETaskCount.High,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Discard,
    type: ETypeWorker.Frontend
  },
  {
    id: 2,
    exp: EWorkerExp.Junior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.Frontend
  },
  {
    id: 3,
    exp: EWorkerExp.Middle,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.Frontend
  },
  {
    id: 4,
    exp: EWorkerExp.Middle,
    tasksCount: ETaskCount.High,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Discard,
    type: ETypeWorker.Frontend
  },
  {
    id: 5,
    exp: EWorkerExp.Middle,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.Frontend
  },
  {
    id: 6,
    exp: EWorkerExp.Senior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.Frontend
  },
  {
    id: 7,
    exp: EWorkerExp.Senior,
    tasksCount: ETaskCount.High,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Discard,
    type: ETypeWorker.Frontend
  },
  {
    id: 8,
    exp: EWorkerExp.Senior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.Frontend
  },
  {
    id: 9,
    exp: EWorkerExp.Junior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.Backend
  },
  {
    id: 10,
    exp: EWorkerExp.Junior,
    tasksCount: ETaskCount.High,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Discard,
    type: ETypeWorker.Backend
  },
  {
    id: 11,
    exp: EWorkerExp.Junior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.Backend
  },
  {
    id: 12,
    exp: EWorkerExp.Middle,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.Backend
  },
  {
    id: 13,
    exp: EWorkerExp.Middle,
    tasksCount: ETaskCount.High,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Discard,
    type: ETypeWorker.Backend
  },
  {
    id: 14,
    exp: EWorkerExp.Middle,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.Backend
  },
  {
    id: 15,
    exp: EWorkerExp.Senior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.Backend
  },
  {
    id: 16,
    exp: EWorkerExp.Senior,
    tasksCount: ETaskCount.High,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Discard,
    type: ETypeWorker.Backend
  },
  {
    id: 17,
    exp: EWorkerExp.Senior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.Backend
  },
  {
    id: 18,
    exp: EWorkerExp.Junior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.QA
  },
  {
    id: 19,
    exp: EWorkerExp.Junior,
    tasksCount: ETaskCount.High,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Discard,
    type: ETypeWorker.QA
  },
  {
    id: 20,
    exp: EWorkerExp.Junior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.QA
  },
  {
    id: 21,
    exp: EWorkerExp.Middle,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.QA
  },
  {
    id: 22,
    exp: EWorkerExp.Middle,
    tasksCount: ETaskCount.High,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Discard,
    type: ETypeWorker.QA
  },
  {
    id: 23,
    exp: EWorkerExp.Middle,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.QA
  },
  {
    id: 24,
    exp: EWorkerExp.Senior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.QA
  },
  {
    id: 25,
    exp: EWorkerExp.Senior,
    tasksCount: ETaskCount.High,
    avgTime: EAvgTime.More,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Discard,
    type: ETypeWorker.QA
  },
  {
    id: 26,
    exp: EWorkerExp.Senior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.QA
  },

]