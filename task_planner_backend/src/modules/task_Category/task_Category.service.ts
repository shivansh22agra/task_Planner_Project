import { Inject, Injectable } from "@nestjs/common";
//import { taskCategoryEntity } from "src/db/entity/task.entity";
import { Repository } from "typeorm/repository/Repository";
import { Request, Response } from "express";
import { TaskCategoryEntity } from "src/db/entity/task.category.entity";
@Injectable()
export class TaskCategoryService {

    constructor(
        @Inject("TASKCATEGORY_REPOSITORY")

        private taskCategoryEntity: Repository<TaskCategoryEntity>,
    ) { }
    async fetchArchive(req: Request, res: Response) {
        const data = await this.taskCategoryEntity.
            //createQueryBuilder('task').where('task.taskCategory_is_archived = true').getMany();
            find({ where: { 'taskCategory_is_archived': true } });
        res.send({
            status: true,
            data: data
        })
    }
    async gettaskCategory(req: Request, res: Response) {
        // try {
        // const data = await
        // this.taskCategoryEntity.createQueryBuilder("taskCategory").getMany();
        // if (data != null) {
        // data !== undefined

        // return res.send({
        //     status: true,
        //     data: data
        // });
        //  }
        // }
        // catch (err) {
        //     return res.send({
        //         status: false,
        //         data: err
        //     });
        // }
        return res.json({
            status: true,
            data: await this.taskCategoryEntity.find()
        })
    }
    async createtaskCategory(req: Request, res: Response) {
        const {
            taskCategory_title,
            taskCategory_description,
            taskCategory_scheduled_at,

        } = req.body;
        const taskCategoryEntity = new TaskCategoryEntity();
        taskCategoryEntity.taskCategory_id = taskCategory_title;
        taskCategoryEntity.taskCategory_description = taskCategory_description;
        taskCategoryEntity.taskCategory_scheduled_at = taskCategory_scheduled_at;
        taskCategoryEntity.save().then((data: TaskCategoryEntity) => {
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
        const { taskCategory_id } = req.body;
        const taskCategoryEntity = new TaskCategoryEntity();
        taskCategoryEntity.taskCategory_id = taskCategory_id;
        taskCategoryEntity.remove().then((data: TaskCategoryEntity) => {
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
        const { taskCategory_id, taskCategory_title, taskCategory_description, taskCategory_scheduled_at } = req.body;
        const taskCategoryEntity = new TaskCategoryEntity();
        taskCategoryEntity.taskCategory_id = taskCategory_id;
        taskCategoryEntity.taskCategory_title = taskCategory_title;
        taskCategoryEntity.taskCategory_description = taskCategory_description;
        taskCategoryEntity.taskCategory_scheduled_at = taskCategory_scheduled_at;

        await taskCategoryEntity.save().then((data: TaskCategoryEntity) => {
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