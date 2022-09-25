import { TaskEntity } from "src/db/entity/task.entity";
import { createConnection } from "typeorm";
import { Connection } from "typeorm/connection/Connection";

export const taskProvider = [
    {
        provide: 'TASK_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(TaskEntity),
            inject: ['DATABASE_CONNECTION'],
    },

];
