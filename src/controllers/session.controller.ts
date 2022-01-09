import { Request, Response } from "express";
import { createSessionService } from "../services/session.service";
import { validatePasswordService } from "../services/user.service";
import { signJwtUtil } from "../utils/jwt.util";
import log from "../utils/logger.util";
import config from 'config';

const accessTokenPrivateKey = config.get<string>('accessTokenPrivateKey');
const accessTokenTtl = config.get<string>('accessTokenTtl');

const refreshTokenPrivateKey = config.get<string>('refreshTokenPrivateKey');
const refreshTokenTtl = config.get<string>('refreshTokenTtl');

export const createSessionController = async (req: Request, res: Response) => {
  try {
      const {password, email} = req.body;

    // 01. validate the user password
     const user =  await validatePasswordService({email, password});

     if(!user){
        return res.status(400).json({ message: 'Invalid email or password'}); 
     }


    // 02. create session
    const session = await createSessionService(user._id, req.get('user-agent') || '');


    // 03. access token 
    const accessToken = signJwtUtil({...user, session: session._id}, accessTokenPrivateKey, { expiresIn: accessTokenTtl });


    // 04. refresh token 
    // const refreshToken = signJwtUtil({...user, session: session._id}, refreshTokenPrivateKey, { expiresIn: refreshTokenTtl });

    // return refresh and access tokens


  return res.send({ accessToken, refreshToken: '' });



  } catch (e: any) {
    log.error(e.name);
    res.status(400).json({ message: e.message, error: e });
  }
};
