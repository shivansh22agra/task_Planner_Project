import { Controller, Post, Put, Req, Res, Get, Delete } from "@nestjs/common";
import { Request, Response } from "express";
import { get } from "http";

import { TaskCategoryService, } from "./task_Category.service";

@Controller('taskCategory')
export class TaskCategoryController {
    constructor(private readonly taskCategoryService: TaskCategoryService) { }

    @Get('fetcharchive')
    async getArchive(@Req() req: Request, @Res() res: Response) {
        return await this.taskCategoryService.fetchArchive(req, res);
    }
    @Get('getCategory')
    async gettask(@Req() req: Request, @Res() res: Response) {
        return await this.taskCategoryService.gettaskCategory(req, res);

    }
    @Put('update')
    async updatetask(@Req() req: Request, @Res() res: Response) {
        return await this.taskCategoryService.updateTask(req, res);
    }
    @Delete('delete')
    async deletetask(@Req() req: Request, @Res() res: Response) {
        return await this.taskCategoryService.deleteTask(req, res);
    }
    @Post('create_taskCategory')
    async createtask(@Req() req: Request, @Res() res: Response) {
        return await this.taskCategoryService.createtaskCategory(req, res);
    }
}