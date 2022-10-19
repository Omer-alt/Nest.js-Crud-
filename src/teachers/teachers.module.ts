import { StudentsModule } from './../students/students.module';
import { StudentTeacherController } from './students.Controller';
import { TeacherController } from './teachers.Controller';
import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';

@Module({
    imports: [StudentsModule],
    controllers: [TeacherController, StudentTeacherController],
    providers: [TeachersService]
})
export class TeachersModule {}
