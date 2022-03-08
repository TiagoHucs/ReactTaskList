import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

export class CreateTaskController{

    constructor(private createTaskUseCase: CreateTaskUseCase){}


    async handle(req: Request, res: Response): Promise<Response>{
        const { title, text } = req.body;
        
        try{
            await this.createTaskUseCase.execute({
                title,
                text
            })
            
            return res.status(201).send()
        } catch (err: any) {
            return res.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
        
    }

}