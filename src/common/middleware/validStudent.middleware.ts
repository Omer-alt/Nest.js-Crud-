import { Injectable, NestMiddleware, HttpException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { students } from "../../db";

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
    
    use(req: Request, res: Response, next: NextFunction) {
        const studentId = req.params.idStudent;
        const existStudent = students.some( student =>{
            return student.id === studentId
        })

        if(!existStudent ){
            throw new HttpException("not found student", 400)
        }
        next()       
    }
}