import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/db/entity/database.module";
import { taskProvider } from "./tasks.provider";
import { TaskService } from "./tasks.service";
import { TaskController } from "./task_controller";

@Module({
    imports: [DatabaseModule],
    controllers: [TaskController],
    providers: [...taskProvider, TaskService],
    exports: [...taskProvider, TaskService],
})

export class taskModule{}