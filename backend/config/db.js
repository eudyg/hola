import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const DB = 'mongodb+srv://eudy:admin@cluster0.1blkr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
/*process.env.MONGODB_URI.replace(
  '<admin>',
  process.env.MONGODB_PASSWORD
)*/

const connectDB = async () => {
  const conn = await mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })

  console.log(
    `Database conneccted successfully on ${conn.connection.host}`.cyan.underline
      .bold
  )
}

export default connectDB
