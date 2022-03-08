import { Request, Response } from "express";
import { ListTasksUseCase } from "./ListTasksUseCase"

export class ListTasksController{

    constructor(private listTasksUseCase: ListTasksUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{
        try{
            let tsks = await this.listTasksUseCase.execute();
            return res.status(200).json(tsks)
        } catch (err: any) {
            return res.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
        
    }
}