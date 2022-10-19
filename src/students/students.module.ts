import { ValidStudentMiddleware } from './../common/middleware/validStudent.middleware';
import { StudentService } from './students.service';
import { StudentsController } from './students.Controller';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';


@Module({
    controllers: [StudentsController],
    providers: [StudentService],
    exports: [StudentService]
})
export class StudentsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path: "/students/:idStudent",
            method: RequestMethod.GET
        });

        consumer.apply(ValidStudentMiddleware).forRoutes({
            path: "/students/:idStudent",
            method: RequestMethod.PUT
        })
    }
}
