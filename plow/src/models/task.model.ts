import type { ETaskPriorities, ETypeWorker } from "@/enums/treeCriteria.enum";
import type { IWorker } from "./worker.model";

export interface ITask {
  id: number;
  name: string;
  description: string;
  type: ETypeWorker;
  priority: ETaskPriorities;
  timeSpent?: number;
  worker?:number;
}
