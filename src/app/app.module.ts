import { TeachersModule } from './../teachers/teachers.module';
import { Module } from '@nestjs/common';
import { StudentsModule } from 'src/students/students.module';



@Module({
  imports: [StudentsModule, TeachersModule],
})
export class AppModule {}
