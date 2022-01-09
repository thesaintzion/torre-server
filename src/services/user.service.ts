import { omit } from "lodash";
import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";

export const createUserService = async (input: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>>) => {
    try {
        const userExists = await UserModel.findOne({email: input.email});

        if(userExists){
            throw new Error('Email Exists');
        }

        const user = await UserModel.create(input);
        return omit(user.toJSON(), "password");

    } catch (e: any) {
        throw new Error(e)
    }
    
}


export const validatePasswordService = async ({email, password}: {email: string; password: string}) => {
    const user = await UserModel.findOne({ email });
  
    if (!user) {
      return false;
    }
  
    const isValid = await user.comparePassword(password);
  
    if (!isValid) return false;
  
    return omit(user.toJSON(), "password");
  }