import { ETaskPriorities, ETypeWorker } from "@/enums/treeCriteria.enum";
import type { ITask } from "@/models/task.model";

export const TASKS: Array<ITask> = [
	{        
		id: 3,
		name: 'сделать сайт биба и боба',
		description: 'asdasdadwdawawdawddw',
		type: ETypeWorker.Backend,
		priority: ETaskPriorities.Medium,   
		      
	},{
		id: 1,
        name: 'сделать сайт АБОБА',
        description: 'asdasdadwdawawdawddw',
        type: ETypeWorker.Frontend,
        priority: ETaskPriorities.Highest,
		worker: 1,
	},
	{
		id: 2,
        name: 'сделать сайт Максмарт',
        description: 'asdasdadwdawawdawddw',
        type: ETypeWorker.Frontend,
        priority: ETaskPriorities.High,
		worker: 2,
	},
	{

		id: 0,
        name: 'сделать сайт ОГУ',
        description: 'asdasdadwdawawdawddw',
        type: ETypeWorker.Backend,
        priority: ETaskPriorities.Medium,
		worker: 2,
	}
	
	
]