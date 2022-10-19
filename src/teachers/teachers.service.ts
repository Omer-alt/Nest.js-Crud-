import { FindTeacherResponse } from './dto/teacher.dto';
import { teachers } from './../db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TeachersService {
    private teachers = teachers

    getTeachers(): FindTeacherResponse[] {
        return this.teachers
    }

    getTeacherById( teacherId: string): FindTeacherResponse{
        return this.teachers.find(teacher => {
           return teacher.id === teacherId
        })
    }

}
