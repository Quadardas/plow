import type { ETaskPriorities, ETypeWorker } from "@/enums/treeCriteria.enum";

export interface ITask {
  id: number;
  name: string;
  description: string;
  type: ETypeWorker;
  priority: ETaskPriorities;
  timeSpent?: number;
}
