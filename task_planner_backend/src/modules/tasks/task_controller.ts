import { Controller, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

import { TaskService } from "./tasks.service";

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Post('create_task')
    async createtask(@Req() req: Request,@Res() res: Response){
        return await this.taskService.createtask(req, res);
    }
}