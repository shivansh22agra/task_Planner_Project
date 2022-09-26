import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/db/entity/database.module";
import { taskProvider } from "./task_Category.provider";
import { TaskCategoryService } from "./task_Category.service";
import { TaskCategoryController } from "./task_Category_controller";

@Module({
    imports: [DatabaseModule],
    controllers: [TaskCategoryController],
    providers: [...taskProvider, TaskCategoryService],
    exports: [...taskProvider, TaskCategoryService],
})

export class taskCategoryModule{}