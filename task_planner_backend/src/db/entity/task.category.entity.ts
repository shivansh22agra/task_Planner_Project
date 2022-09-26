//import { taskCategoryModule } from "src/modules/taskCategory_Category/taskCategory_Category.Module";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
//import { TaskEntity } from "./task.entity";

@Entity('taskCategory')
export class TaskCategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    taskCategory_id: number;


    @Column({
        nullable: true,

    })
    taskCategory_title: string;
    @Column({
        nullable: true,

    })
    taskCategory_description: string;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
        nullable: false,
    })
    taskCategory_created_at: Date;
    @Column({
        //   type: "string",
        default: "Hello",
        nullable: true,
    })
    taskCategory_scheduled_at: string;
    @Column({
        default: true,
        nullable: true
    })
    taskCategory_is_archived: boolean;


}