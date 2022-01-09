import { Request, Response } from "express";
import { CreateUserInput } from "../schemas/user.schema";
import { createUserService } from "../services/user.service";
import log from "../utils/logger.util";

const createUserController = async (req: Request<{}, {}, CreateUserInput['body']>, res: Response) => {

try {
 //TODO: Check if email exists..
//  const emailExists = await findUser(req.body);
//  if(emailExists){
//      return res.status(409).json({message: 'Email exits'})
//  }

 const user = await createUserService(req.body);
 res.status(200).json({ user });

} catch (e: any) {
    log.error(e.message)
    res.status(400).json({message: e.message, error: e})
}
}

export default createUserController;
