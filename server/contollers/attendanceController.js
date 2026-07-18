import attendanceModel from "../models/attendance.js"
import employeeModel from "../models/employee.js"

export const clockInOut = async (req, res) => {
    try {
        const session = req.session
        const employee = await employeeModel.findOne({ userId: session.userId })
        if (!employee) {
            return res.status(404).json({ error: "employee not found" })
        }
        if (employee.isDeleted) {
            return res.status(403).json({ error: "your account is deactivated" })
        }
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const existing = await attendanceModel.findOne({ employeeId: employee._id, date: today })
        const now = new Date()
        if (!existing) {
            const isLate = now.getHours() >= 9 && now.getMinutes() > 0
            const attendance = await attendanceModel.create({
                employeeId: employee._id,
                date: tday,
                checkIn: now,
                status: isLate ? "LATE" : "PRESENT",
            })
            return res.status(200).json({ success: true, type: "CHECK_IN", data: attendance })
        }
        else if (!existing.checkOut) {
            const checkInTime = new Date(existing.checkIn).getTime()
            const diffMs = now.getTime() - checkInTime
            const timeInHours = diffMs / (1000 * 60 * 60)
            existing.checkOut = now
            const workingHours = parseFloat(timeInHours.toFixed(2))
            const dayType = "Half Day"
            if (workingHours >= 8) {
                dayType = "Full Day"
            }
            if (workingHours >= 6) {
                dayType = "Three Quarter Day"
            }
            if (workingHours >= 4) {
                dayType = "Half Day"
            }
            else {
                dayType = "Short Day"
            }
            existing.workingHours = workingHours
            existing.dayType = dayType
            await existing.save()
            return res.status(200).json({ success: true, type: "CHECK_OUT", data: existing })
        }
        else {
            return res.status(200).json({ success: true, type: "CHECK_OUT", data: existing })
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const getAttendance = async (req, res) => {
    try {
        const session = req.session
        const employee = await employeeModel.findOne({ userId: session.userId })
        if (!employee) {
            return res.status(404).json({ error: "employee not found" })
        }
        const limit = parseInt(req.query.limit || 30)
        const history = (await attendanceModel.find({ employeeId: employee._id })).sort({ date: -1 }).limit(limit)
        return res.status(200).json({ data: history, employee: { isDeleted: employee.isDeleted } })
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
}