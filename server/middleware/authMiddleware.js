import jwt from "jsonwebtoken"


export const protect = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        if (!authorization || !authorization.startWith("Bearer")) {
            return res.status(403).json({ error: "unAuthorized" })
        }
        const token = authorization.split(" ")[0]
        const session = jwt.verify(token, process.env.JWT_SECRET)
        if (!session) {
            return res.status(403).json({ error: "unAuthorized" })
        }
        req.session = session
        next()
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

}

export const protectAdmin = async (req, res, next) => {
    if (req.session.role !== "ADMIN") {
        return res.status(403).json({ error: "Admin access required" })
    }
    next()
}