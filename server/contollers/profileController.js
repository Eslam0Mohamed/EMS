import employeeModel from "../models/employee.js"

export const getProfile = async (req, res) => {
    try {
        const session = req.session
        const employee = await employeeModel.findByOne({ userId: session.userId })
        if (!employee) {
            return res.status(404).json({ firstName: "Admin", lastName: "", email: session.email })
        }
        return res.status(200).json({ employee })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
export const updateProfile = async (req, res) => {
    const session = req.session
    const employee = await employeeModel.findOne({ userId: session.userId })
    if (!employee) {
        return res.status(404).json({ error: "employee not found" })
    }
    if (employee.isDeleted) {
        return res.status(404).json({ error: "your account is deactivated" })
    }
    await employeeModel.findByIdAndUpdate(employee._id, { bio: req.body.bio })
    return res.status(204).json({ success:true})
}