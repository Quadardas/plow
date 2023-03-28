import { ETaskPriorities, ETypeWorker } from "@/enums/treeCriteria.enum";
import type { ITask } from "@/models/task.model";

export const tasks:Array<ITask> = [
	{        
		id: 0,
		name: 'сделать сайт биба и боба',
		description: 'asdasdadwdawawdawddw',
		type: ETypeWorker.Backend,
		priority: ETaskPriorities.Medium,         
	}
]