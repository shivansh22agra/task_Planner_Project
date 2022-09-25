import { Inject, Injectable } from "@nestjs/common";
import { TaskEntity } from "src/db/entity/task.entity";
import { Repository } from "typeorm/repository/Repository";
import { Request, Response } from "express";
@Injectable()
export class TaskService {

    constructor(
        @Inject("TASK_REPOSITORY")

        private taskEntity: Repository<TaskEntity>,
    ) { }
    async fetchArchive(req: Request, res: Response) {
        const data = await this.taskEntity.
            //createQueryBuilder('task').where('task.task_is_archived = true').getMany();
            find({ where: { 'task_is_archived': true } });
        res.send({
            status: true,
            data: data
        })
    }
    async gettask(req: Request, res: Response) {
        try {
            const data = await
                this.taskEntity.createQueryBuilder("task").getMany();
            if (data != null) {
                //data !== undefined

                return res.send({
                    status: true,
                    data: data
                });
            }
        }
        catch (err) {
            return res.send({
                status: false,
                data: err
            });
        }
        // return res.json({
        //     status:true,
        //     data:await this.taskEntity.find()
        // })
    }
    async createtask(req: Request, res: Response) {
        const {
            task_title,
            task_description,
            task_scheduled_at,

        } = req.body;
        const taskEntity = new TaskEntity();
        taskEntity.task_title = task_title;
        taskEntity.task_description = task_description;
        taskEntity.task_scheduled_at = task_scheduled_at;
        taskEntity.save().then((data: TaskEntity) => {
            return res.send({
                status: true,
                data: data
            });
        }).catch((err) => {
            return res.send({
                status: false,
                data: err
            });
        });



    }
    async deleteTask(req: Request, res: Response) {
        const { task_id } = req.body;
        const taskEntity = new TaskEntity();
        taskEntity.task_id = task_id;
        taskEntity.remove().then((data: TaskEntity) => {
            return res.send({
                status: true,
                data: data
            });
        }).catch((err) => {
            return res.send({
                status: false,
                data: err
            });
        });
    }
    async updateTask(req: Request, res: Response) {
        const { task_id, task_title, task_description, task_scheduled_at } =  req.body;
        const taskEntity = new TaskEntity();
        taskEntity.task_id = task_id;
        taskEntity.task_title = task_title;
        taskEntity.task_description = task_description;
        taskEntity.task_scheduled_at = task_scheduled_at;

     await   taskEntity.save().then((data: TaskEntity) => {
            return res.send({
                status: true,
                data: data
            });
        }).catch((err) => {
            return res.send({
                status: false,
                data: err
            });
        });
    }

}