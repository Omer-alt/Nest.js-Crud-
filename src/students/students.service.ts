import { FindStudentResponse, StudentResponse, CreateStudentDto, UpdateStudentDto } from './dto/student.dto';
import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import { v4 as uuid} from 'uuid'

@Injectable()
export class StudentService {
    private students = students

    getStudents (): FindStudentResponse[]{
        return this.students
    }

    getStudentById(studentId: string): StudentResponse{
        console.log(studentId)
        return this.students.find(student => {
           return student.id === studentId
        })
    }

    createStudent(payload: CreateStudentDto): StudentResponse {
        let newStudent = {
            id: uuid(),
            ...payload
        }
        this.students.push(newStudent)
        return newStudent
    }

    updateStudent(payload: UpdateStudentDto, studentId: string): StudentResponse{
        let updateStudent: StudentResponse;
        
        const updateList  =  this.students.map(student =>{
            if (student.id === studentId){
                updateStudent = {
                    id: studentId,
                    ...payload
                }
                return updateStudent
            }else {
                return student
            }
        })
        
        this.students = updateList;
        return updateStudent
    }

    getStudentsByTeacherId(teacherId: string): FindStudentResponse[]{
        return this.students.filter(student => student.teacher === teacherId)

    }
    
    updateStudentTeacher(idTeacher: string, idStudent: string, payload: UpdateStudentDto):  FindStudentResponse{
        let updateStudent: StudentResponse;
        
        const updateList  =  this.students.map(student =>{
            if (student.id === idStudent && student.teacher === idTeacher){
                updateStudent = {
                    id: idStudent,
                    ...payload
                }
                return updateStudent
            }else {
                return student
            }
        })
        
        this.students = updateList;
        return updateStudent
    }
}
