import { Request, Response } from "express";
import { Task } from "../../entities/Task";
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

    async findAll(req: Request, res: Response): Promise<Response>{

        try{
            let tsks = await this.createTaskUseCase.get();
            return res.status(200).json(tsks)
        } catch (err: any) {
            return res.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
        
    }
}