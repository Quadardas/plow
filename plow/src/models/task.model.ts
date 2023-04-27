import type { ETaskPriorities, ETypeWorker } from "@/enums/treeCriteria.enum";
import type { IWorker } from "./worker.model";

export interface ITask {
  TaskKey: number;
  Name: string;
  Description: string;
  OpenDate: string;
  PlannedCloseDate: string;
  FactCloseDate?:string;
  PriorityKey: ETaskPriorities;
  PriorityName: string;
  PrioriyShName?:string;
  NodeKey: number;
  NodeName: string;
  NodeShName: string;
  Worker?:number;
}
