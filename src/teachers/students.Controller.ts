import { UpdateStudentDto } from './../students/dto/student.dto';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { StudentService } from '../students/students.service'

@Controller('teachers/:idTeacher/students')
export class StudentTeacherController {

    constructor(private readonly studentService: StudentService){}

    @Get()
    getTeacherStudent(
        @Param() Param :{idTeacher: string}
    ){
        return this.studentService.getStudentsByTeacherId(Param.idTeacher)
    }

    @Put('/:idStudent')
    updateStudent(
        @Param() params: {idStudent: string, idTeacher: string},
        @Body() body:UpdateStudentDto
    ){
        const {idStudent,idTeacher} = params
        return this.studentService.updateStudentTeacher(idTeacher,idStudent,body)
    }

}