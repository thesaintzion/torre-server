import { Request, Response } from "express";
import { searchService } from "../services/search.service";
import log from "../utils/logger.util";

const searchPeopleController = async (req: Request, res: Response) => {

try {

 const result = await  searchService(req.body);
 
 res.status(200).send(result);
 
} catch (e: any) {
    log.error(e.message)
    res.status(400).json({message: e.message, error: e})
}
}

export default searchPeopleController;
