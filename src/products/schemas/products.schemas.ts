import { Schema } from 'mongoose'

export const ProductsSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    imageURL: String,
    price: Number,
    createdAT: {
        type: Date,
        default: Date.now
    }
})