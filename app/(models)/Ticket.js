import mongoose, { Schema } from 'mongoose'

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
    {
        title: String,
        description: String,
        catgeory: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean,
    
    
    },
    {
        timeStamps: true,
    }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema)
export default Ticket

