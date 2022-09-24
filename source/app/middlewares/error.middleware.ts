import { NextFunction, Response, Request } from "express";
import { ApiError } from "../../utils/helpers/api.errors";

export const errorMiddleware = (
    error: Error & Partial<ApiError>,
    req: Request,
    res: Response,
    next: NextFunction 
) => {
    const statusCode = error?.statusCode ? error.statusCode : 500;
    res.status(statusCode).json({message: error.message})
}