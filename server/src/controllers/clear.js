import { User } from '../models/user.model.js'; // Import your User model

// Controller function to clear all users from the database
export const clearDatabase = async (req, res) => {
    try {
        // Delete all users
        await User.deleteMany({});

        // If you have other collections, you can delete them similarly
        // await OtherModel.deleteMany({});

        res.status(200).json({
            success: true,
            message: "Database cleared successfully.",
        });
    } catch (error) {
        console.error("Error clearing database: ", error);
        res.status(500).json({
            success: false,
            message: "Server error, could not clear database.",
        });
    }
};
