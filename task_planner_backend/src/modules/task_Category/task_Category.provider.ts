import { TaskCategoryEntity } from "src/db/entity/task.category.entity";
import { TaskEntity } from "src/db/entity/task.entity";
import { createConnection } from "typeorm";
import { Connection } from "typeorm/connection/Connection";

export const taskProvider = [
    {
        provide: 'TASKCATEGORY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(TaskCategoryEntity),
            inject: ['DATABASE_CONNECTION'],
    },

];
