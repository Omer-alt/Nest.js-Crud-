
export class FindStudentResponse {
    id: string;
    name: string;
    teacher: string
}

export class StudentResponse {
    id: string;
    name: string;
    teacher: string
}

export class CreateStudentDto {
    name: string;
    teacher: string
}
 
export class UpdateStudentDto {
    name: string;
    teacher: string
}