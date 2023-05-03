import type { ETaskPriorities, ETypeWorker } from "@/enums/treeCriteria.enum";
import type { IWorker } from "./worker.model";
import type { IDictionary } from "./dictionary.model";

export interface ITask {
  TaskKey: number;
  Name: string;
  Description: string;
  OpenDate: string;
  PlannedCloseDate: string;
  FactCloseDate?:string;
  PriorityKey: number;
  PriorityName: ETaskPriorities;
  PrioriyShName?:string;
  NodeKey: number;
  NodeName: string;
  NodeShName: string;
  worker?:ITaskWorker;
  type: IDictionary;
}

export interface ITaskWorker{
  Name: string;
  Surname: string;
  Patron: string;
  PhysKey: number;
  RoleKey: number;
}