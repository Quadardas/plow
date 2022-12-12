import { EAvgTime, ETaskPriorities, ETypeWorker, EWorkerExp } from "@/enums/treeCriteria.enum";

export const WORKERS = [
  {
    id: 0,
    tasks: [],
    info: {
      exp: EWorkerExp.Middle,
      type: ETypeWorker.Backend,
      avgTime: EAvgTime.Less,
    }
  },
  {
    id: 1,
    tasks: [
      {
        id: 0,
        name: 'сделать сайт',
        description: 'asdasdadwdawawdawddw',
        type: ETypeWorker.Backend,
        priority: ETaskPriorities.Medium,
      }
    ],
    info: {
      exp: EWorkerExp.Middle,
      type: ETypeWorker.Backend,
      avgTime: EAvgTime.Less,
    }
  },
  {
    id: 2,
    tasks: [
      {
        id: 1,
        name: 'сделать сайт',
        description: 'asdasdadwdawawdawddw',
        type: ETypeWorker.Backend,
        priority: ETaskPriorities.Highest,
      },
      {
        id: 2,
        name: 'сделать сайт',
        description: 'asdasdadwdawawdawddw',
        type: ETypeWorker.Backend,
        priority: ETaskPriorities.High,
      }
    ],
    info: {
      exp: EWorkerExp.Senior,
      type: ETypeWorker.Frontend,
      avgTime: EAvgTime.More,
    }
  }
];