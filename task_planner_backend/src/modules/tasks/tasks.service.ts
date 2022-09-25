import { Inject, Injectable } from "@nestjs/common";
import { TaskEntity } from "src/db/entity/task.entity";
import { Repository } from "typeorm/repository/Repository";
import { Request,Response } from "express";
@Injectable()
export class TaskService {

    constructor(
        @Inject("TASK_REPOSITORY")

        private taskEntity: Repository<TaskEntity>,
    ) { }
    async createtask(req:Request,res:Response){
        const {
            task_title,
            task_description,
            task_scheduled_at,

        }=req.body;
        const taskEntity=new TaskEntity();
        taskEntity.task_title=task_title;
        taskEntity.task_description=task_description;
        taskEntity.task_scheduled_at=task_scheduled_at;
        taskEntity.save().then((data:TaskEntity)=>{
            return res.send({
                status:true,
                data:data
            });
        }).catch((err)=>{
            return res.send({
                status:false,
                data:err
            });
        });
    
    

}}