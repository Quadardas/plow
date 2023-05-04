import { EAvgTime, ETaskCount, ETreeResult } from "@/enums/treeCriteria.enum";
import type { ITask } from "@/models/task.model";
import type { IWorkerInfo } from "@/models/worker.model";
import type { ITreeRule } from "@/models/rule.model";
import { RULES } from "@/constants/rules.const";

export class DecideTree {
  public startMethod(task: ITask, workers: Array<IWorkerInfo>): IWorkerInfo | ETreeResult {
    const rules = this.getTreeRules();
    return this.decide(workers, rules, task);
  }

  private getTasksLength(length: number): ETaskCount {
    if (!length) {
      return ETaskCount.Low
    }

    if (length >= 3) {
      return ETaskCount.High
    }
    return ETaskCount.Low
  }

  public getAvgTimeValue(time: number) {
    if (!time) {
      return EAvgTime.Less;
    } 

    if (time > 180) {
      return EAvgTime.More
    }

    return EAvgTime.Less
  }

  private getTreeRules(): Array<ITreeRule> {
    return RULES;
  }

  private decide(workers: Array<IWorkerInfo>, rules: Array<ITreeRule>, task: ITask): IWorkerInfo | ETreeResult {
    if (!rules || !workers || !task) {
      return ETreeResult.Uncalculated;
    } 
    
    rules = rules.filter((rule) => rule.priority === task.PriorityName && rule.type === task.type.Name);
    workers = workers.filter((worker) => worker.DutyName === task.type.Name);

    const fastWorker = workers.filter((worker)=>
    worker.avgTime === EAvgTime.Less)?.[0];
    
    if (fastWorker){
      return fastWorker;
    }
    return workers.filter((worker) => 
      !!rules.find((rule) => 
        rule.exp === worker.ExpName && 
        rule.avgTime === worker.avgTime && 
        this.getTasksLength(worker.tasks?.length) === rule.tasksCount
      )
    )?.[0] ?? ETreeResult.Uncalculated;
  }
}