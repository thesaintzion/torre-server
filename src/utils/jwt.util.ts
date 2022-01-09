import jwt from "jsonwebtoken";
import config from "config";

export const signJwtUtil = (
  object: Object,
  privateToken: string,
  options?: jwt.SignOptions | undefined
) => {
  const signingKey = Buffer.from(privateToken, "base64").toString("ascii");

  return jwt.sign(object, signingKey, { ...(options && options) });
};

export const verifyJwtUtil = (token: string, publicToken: string) => {
  const publicKey = Buffer.from(publicToken, "base64").toString("ascii");

  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
};
