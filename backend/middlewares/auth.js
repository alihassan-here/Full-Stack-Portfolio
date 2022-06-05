import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';


export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "You are not logged in"
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "You are not logged in"
            });
        }
        req.user = user;
        next();

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

};