import { Module } from "@nestjs/common";
import { DatabaseModule } from "./db/entity/database.module";
import { taskModule } from "./modules/tasks/tasks.Module";

@Module({
    imports: [
        DatabaseModule, taskModule
    ]
})

export class AppModule { }