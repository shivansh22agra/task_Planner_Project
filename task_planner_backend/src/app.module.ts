import { Module } from "@nestjs/common";
import { DatabaseModule } from "./db/entity/database.module";
import { taskModule } from "./modules/tasks/tasks.Module";
import { taskCategoryModule } from "./modules/task_Category/task_Category.Module";

@Module({
    imports: [
        DatabaseModule,
         taskModule,
         taskCategoryModule
    ]
})

export class AppModule { }