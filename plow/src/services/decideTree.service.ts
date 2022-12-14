import { EAvgTime, ETaskCount, ETreeResult } from "@/enums/treeCriteria.enum";
import type { ITask } from "@/models/task.model";
import type { IWorker } from "@/models/worker.model";
import { WORKERS } from "@/constants/workers.const";
import type { ITreeRule } from "@/models/rule.model";
import { RULES } from "@/constants/rules.const";

export class DecideTree {
  public startMethod(task: ITask): IWorker | ETreeResult {
    const workers = (this.getWorkers())?.map((worker) => (
      { 
        ...worker, 
        info: {
          ...worker.info,
          tasksEnum: worker.tasks?.length <= 3 ? ETaskCount.Low : ETaskCount.High
        }, 
      }
    ));
    const rules = this.getTreeRules();
    
    return this.decide(workers, rules, task);
  }

  private getWorkers(): Array<IWorker> {
    return WORKERS;
  }

  private getTreeRules(): Array<ITreeRule> {
    return RULES;
  }

  private decide(workers: Array<IWorker>, rules: Array<ITreeRule>, task: ITask): IWorker | ETreeResult {
    if (!rules || !workers || !task) {
      return ETreeResult.Uncalculated;
    } 
    

    rules = rules.filter((rule) => rule.priority === task.priority && rule.type === task.type);
    workers = workers.filter((worker) => worker.info.type === task.type);

    const fastWorker = workers.filter((worker)=>
    worker.info.avgTime === EAvgTime.Less)?.[0];
    
    if (fastWorker){
      return fastWorker;
    }

    return workers.filter((worker) => 
      rules.find((rule) => 
        rule.exp === worker.info.exp && 
        rule.avgTime === worker.info.avgTime && 
        worker.info.tasksEnum === rule.tasksCount
      )
    )?.[0] ?? ETreeResult.Uncalculated;
  }
}