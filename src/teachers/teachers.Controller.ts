import { TeachersService } from './teachers.service';
import { Controller, Get, Post, Put, Param } from '@nestjs/common'
import { FindTeacherResponse } from './dto/teacher.dto';
import { FindStudentResponse, StudentResponse } from 'src/students/dto/student.dto';

@Controller('teachers')
export class TeacherController {

    constructor(private teacherService: TeachersService){}

    @Get()
    getTeachers(): FindTeacherResponse[] {
        return this.teacherService.getTeachers()
    }

    @Get('/:idTeacher')
    getTeacher(

        @Param() params: { idTeacher: string}

    ): FindTeacherResponse {

        console.log(params);
        return this.teacherService.getTeacherById(params.idTeacher)
    }

}