import { StudentService } from './students.service'
import { Controller, Get, Post, Put, Body, Param, ParseUUIDPipe } from '@nestjs/common'
import { CreateStudentDto, FindStudentResponse, StudentResponse, UpdateStudentDto } from './dto/student.dto'

@Controller('students')
export class StudentsController {

    constructor( private readonly studentService: StudentService) {}

    @Get()
    getStudents(): FindStudentResponse[] {
        return this.studentService.getStudents()
    }

    @Get('/:idStudent')
    getStudent(
        @Param('idStudent', new ParseUUIDPipe()) idStudent: string
    ): StudentResponse {
        return this.studentService.getStudentById(idStudent)
    }

    @Post()
    createStudent(
        @Body() body:CreateStudentDto
    ): FindStudentResponse{
        const {name, teacher} = body
        console.log(name)
        return this.studentService.createStudent(body)
    }

    @Put('/:idStudent')
    updateStudent(
        @Param('idStudent', new ParseUUIDPipe()) idStudent: string,
        @Body() body: UpdateStudentDto
        
    ): FindStudentResponse{
        return this.studentService.updateStudent(body, idStudent)
    }

}