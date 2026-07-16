import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import userModel from "../models/user.js"

export const login = async (req, res) => {
    try {
        const { email, password, role_type } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                error: "Missing required fields",
            });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                error: "Invalid credentials",
            });
        }

        if (role_type === "admin" && user.role !== "ADMIN") {
            return res.status(401).json({
                error: "Not authorized as admin",
            });
        }

        if (role_type === "employee" && user.role !== "EMPLOYEE") {
            return res.status(401).json({
                error: "Not authorized as employee",
            });
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return res.status(400).json({
                error: "Invalid credentials",
            });
        }

        const payload = {
            email: user.email,
            role: user.role,
            userId: user._id.toString(),
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        return res.status(200).json({
            user: payload,
            token,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

export const session = async (req, res) => {
    const { session } = req.session
    return res.json({ user: session })
}

export const changePassword = async (req, res) => {
    try {
        const { session } = req.session
        const { currentPassword, newPassword } = req.body
        if (!currentPassword || !newPassword) {
            return res.status(400).json({ error: "Both passwords are required" })
        }
        const user = await userModel.findById(session.userId)
        if (!user) {
            return res.status(400).json({ error: "user not found" })
        }
        const isValid = await bcrypt.compare(currentPassword, user.password);

        if (!isValid) {
            return res.status(400).json({
                error: "Password is Incorrect",
            });
        }
        const hash = await bcrypt.hash(newPassword, 10)
        await userModel.findByIdAndUpdate(session.userId, { password: hash })
        return res.status(200).json({ success: true })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}