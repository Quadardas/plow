import { EAvgTime, ETaskCount, ETaskPriorities, ETreeResult, ETypeWorker, EWorkerExp } from "@/enums/treeCriteria.enum";
import type { ITreeRule } from "@/models/rule.model";

export const RULES: Array<ITreeRule> = [
  {
    "id": 0,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 1,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 2,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 3,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 4,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 5,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 6,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 7,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 8,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 9,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 10,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 11,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 12,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 13,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 14,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 15,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 16,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 17,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 18,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 19,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 20,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 21,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 22,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 23,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 24,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 25,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 26,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 27,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 28,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 29,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 30,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 31,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 32,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 33,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 34,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 35,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 36,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 37,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 38,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 39,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 40,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 41,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 42,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 43,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 44,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 45,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 46,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 47,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 48,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 49,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 50,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 51,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 52,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 53,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 54,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 55,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 56,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 57,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 58,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 59,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 60,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 61,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 62,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 63,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 64,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 65,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 66,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 67,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 68,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 69,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 70,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 71,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 72,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 73,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 74,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 75,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 76,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 77,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 78,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 79,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 80,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 81,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 82,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 83,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 84,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 85,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 86,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 87,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 88,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 89,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 90,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 91,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 92,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 93,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 94,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 95,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 96,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 97,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 98,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 99,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 100,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 101,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 102,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 103,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 104,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 105,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 106,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 107,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 108,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 109,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 110,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 111,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 112,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 113,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 114,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 115,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 116,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 117,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 118,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 119,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 120,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 121,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 122,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 123,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 124,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 125,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 126,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 127,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 128,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 129,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 130,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 131,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 132,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 133,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 134,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 135,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 136,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 137,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 138,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 139,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 140,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 141,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 142,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 143,
    "exp": "EWorkerExp.Frontend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 144,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 145,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 146,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 147,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 148,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 149,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 150,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 151,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 152,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 153,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 154,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 155,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 156,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 157,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 158,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 159,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 160,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 161,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 162,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 163,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 164,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 165,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 166,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 167,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 168,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 169,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 170,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 171,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 172,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 173,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 174,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 175,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 176,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 177,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 178,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 179,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 180,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 181,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 182,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 183,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 184,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 185,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 186,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 187,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 188,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 189,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 190,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 191,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 192,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 193,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 194,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 195,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 196,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 197,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 198,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 199,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 200,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 201,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 202,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 203,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 204,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 205,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 206,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 207,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 208,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 209,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 210,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 211,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 212,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 213,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 214,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 215,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 216,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 217,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 218,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 219,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 220,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 221,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 222,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 223,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 224,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 225,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 226,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 227,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 228,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 229,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 230,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 231,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 232,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 233,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 234,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 235,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 236,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 237,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 238,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 239,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 240,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 241,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 242,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 243,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 244,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 245,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 246,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 247,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 248,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 249,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 250,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 251,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 252,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 253,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 254,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 255,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 256,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 257,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 258,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 259,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 260,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 261,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 262,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 263,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 264,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 265,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 266,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 267,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 268,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 269,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 270,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 271,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 272,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 273,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 274,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 275,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 276,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 277,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 278,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 279,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 280,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 281,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 282,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 283,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 284,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 285,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 286,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 287,
    "exp": "EWorkerExp.Backend",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 288,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 289,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 290,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 291,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 292,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 293,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 294,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 295,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 296,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 297,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 298,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 299,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 300,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 301,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 302,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 303,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 304,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 305,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 306,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 307,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 308,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 309,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 310,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 311,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 312,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 313,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 314,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 315,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 316,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 317,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 318,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 319,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 320,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 321,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 322,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 323,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 324,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 325,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 326,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 327,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 328,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 329,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 330,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 331,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 332,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 333,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 334,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 335,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 336,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 337,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 338,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 339,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 340,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 341,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 342,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 343,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 344,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 345,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 346,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 347,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 348,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 349,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 350,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 351,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 352,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 353,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 354,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 355,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 356,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 357,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 358,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 359,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 360,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 361,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 362,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 363,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 364,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 365,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 366,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 367,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 368,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 369,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 370,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 371,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 372,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 373,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 374,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 375,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 376,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 377,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 378,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 379,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 380,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 381,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 382,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 383,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 384,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 385,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 386,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 387,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 388,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 389,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 390,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 391,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 392,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 393,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 394,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 395,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 396,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 397,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 398,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 399,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 400,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 401,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 402,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 403,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 404,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 405,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 406,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 407,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 408,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 409,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 410,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 411,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 412,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 413,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 414,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 415,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 416,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 417,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 418,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 419,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 420,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 421,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 422,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 423,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 424,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 425,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 426,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 427,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 428,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 429,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 430,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 431,
    "exp": "EWorkerExp.Analytics",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 432,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 433,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 434,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 435,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 436,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 437,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 438,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 439,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 440,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 441,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 442,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 443,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 444,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 445,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 446,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 447,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 448,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 449,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 450,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 451,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 452,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 453,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 454,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 455,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 456,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 457,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 458,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 459,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 460,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 461,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 462,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 463,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 464,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 465,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 466,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 467,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 468,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 469,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 470,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 471,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 472,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 473,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 474,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 475,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 476,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 477,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 478,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 479,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 480,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 481,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 482,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 483,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 484,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 485,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 486,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 487,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 488,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 489,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 490,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 491,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 492,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 493,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 494,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 495,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 496,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 497,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 498,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 499,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 500,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 501,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 502,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 503,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 504,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 505,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 506,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 507,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 508,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 509,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 510,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 511,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 512,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 513,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 514,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 515,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 516,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 517,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 518,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 519,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 520,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 521,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 522,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 523,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 524,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 525,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 526,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 527,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 528,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 529,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 530,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 531,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 532,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 533,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 534,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 535,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 536,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 537,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 538,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 539,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 540,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 541,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 542,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 543,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 544,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 545,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 546,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 547,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 548,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 549,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 550,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 551,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 552,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 553,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 554,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 555,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 556,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 557,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 558,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 559,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 560,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 561,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 562,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 563,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 564,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 565,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 566,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 567,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 568,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 569,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 570,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 571,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 572,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 573,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 574,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 575,
    "exp": "EWorkerExp.QA",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 576,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 577,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 578,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 579,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 580,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 581,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 582,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 583,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 584,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 585,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 586,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 587,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 588,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 589,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 590,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 591,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 592,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 593,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 594,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 595,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 596,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 597,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 598,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 599,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 600,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 601,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 602,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 603,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 604,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 605,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 606,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 607,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 608,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 609,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 610,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 611,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 612,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 613,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 614,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 615,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 616,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 617,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 618,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 619,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 620,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 621,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 622,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 623,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Junior"
  },
  {
    "id": 624,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 625,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 626,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 627,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 628,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 629,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 630,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 631,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 632,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 633,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 634,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 635,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 636,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 637,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 638,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 639,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 640,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 641,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 642,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 643,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 644,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 645,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 646,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 647,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 648,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 649,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 650,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 651,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 652,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 653,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 654,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 655,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 656,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 657,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 658,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 659,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 660,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 661,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 662,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 663,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 664,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 665,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 666,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 667,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 668,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 669,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 670,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 671,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Middle"
  },
  {
    "id": 672,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 673,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 674,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 675,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 676,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 677,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 678,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 679,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 680,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 681,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 682,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 683,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 684,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 685,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 686,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 687,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 688,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 689,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 690,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 691,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 692,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 693,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 694,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 695,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.More",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 696,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 697,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 698,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 699,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 700,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 701,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Low",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 702,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 703,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 704,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 705,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 706,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 707,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Medium",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 708,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 709,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 710,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 711,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 712,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 713,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.High",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 714,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 715,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Apply",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 716,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 717,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Discard",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 718,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.Low",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  },
  {
    "id": 719,
    "exp": "EWorkerExp.Designer",
    "tasksCount": "ETaskCount.High",
    "avgTime": "EAvgTime.Less",
    "priority": "ETaskPriorities.Highest",
    "result": "ETreeResult.Uncalculated",
    "type": "ETypeWorker.Senior"
  }
]