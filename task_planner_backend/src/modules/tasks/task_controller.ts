import { Controller, Post, Put, Req, Res, Get, Delete } from "@nestjs/common";
import { Request, Response } from "express";
import { get } from "http";

import { TaskService } from "./tasks.service";

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Get('fetcharchive')
    async getArchive(@Req() req: Request, @Res() res: Response) {
        return await this.taskService.fetchArchive(req, res);
    }
    @Get('get')
    async gettask(@Req() req: Request, @Res() res: Response) {
        return await this.taskService.gettask(req, res);

    }
    @Put('update')
    async updatetask(@Req() req: Request, @Res() res: Response) {
        return await this.taskService.updateTask(req, res);
    }
    @Delete('delete')
    async deletetask(@Req() req: Request, @Res() res: Response) {
        return await this.taskService.deleteTask(req, res);
    }
    @Post('create_task')
    async createtask(@Req() req: Request, @Res() res: Response) {
        return await this.taskService.createtask(req, res);
    }
}