import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('fitness');

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),

    emailAndPassword: {
        enabled: true
    },

    user: {
        additionalFields: {
            age: {
                type: "number",
                input: true,
            },
            height: {
                type: "number",
                input: true,
            },
            weight: {
                type: "number",
                input: true,
            },
            fitnessGoal: {
                type: "string",
                input: true,
            },
            activityLevel: {
                type: "string",
                input: true,
            },
            bmi: {
                type: "number",
                input: true,
            },
        },
    }
});