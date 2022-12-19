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
    exp: EWorkerExp.Junior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.Backend,
  },{
    id: 2,
    exp: EWorkerExp.Senior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Highest,
    result: ETreeResult.Apply,
    type: ETypeWorker.Backend,
  },
  {
    id: 3,
    exp: EWorkerExp.Junior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Highest,
    result: ETreeResult.Apply,
    type: ETypeWorker.Frontend,
  },
  {
    id: 4,
    exp: EWorkerExp.Middle,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Highest,
    result: ETreeResult.Apply,
    type: ETypeWorker.Frontend,
  },
  {
    id: 5,
    exp: EWorkerExp.Senior,
    tasksCount: ETaskCount.Low,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Highest,
    result: ETreeResult.Apply,
    type: ETypeWorker.Frontend,
  },
  {
    id: 6,
    exp: EWorkerExp.Middle,
    tasksCount: ETaskCount.High,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Highest,
    result: ETreeResult.Apply,
    type: ETypeWorker.Backend,
  }, 
  {
    id: 7,
    exp: EWorkerExp.Junior,
    tasksCount: ETaskCount.High,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Highest,
    result: ETreeResult.Apply,
    type: ETypeWorker.Backend,
  },{
    id: 8,
    exp: EWorkerExp.Senior,
    tasksCount: ETaskCount.High,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Highest,
    result: ETreeResult.Apply,
    type: ETypeWorker.Backend,
  },
  {
    id: 9,
    exp: EWorkerExp.Junior,
    tasksCount: ETaskCount.High,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Highest,
    result: ETreeResult.Apply,
    type: ETypeWorker.Frontend,
  },
  {
    id: 10,
    exp: EWorkerExp.Middle,
    tasksCount: ETaskCount.High,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.Frontend,
  },
  {
    id: 11,
    exp: EWorkerExp.Senior,
    tasksCount: ETaskCount.High,
    avgTime: EAvgTime.Less,
    priority: ETaskPriorities.Low,
    result: ETreeResult.Apply,
    type: ETypeWorker.Frontend,
  }  
]