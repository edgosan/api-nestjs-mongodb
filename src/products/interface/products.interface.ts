import { Document } from 'mongoose'

export interface Products extends Document {
    readonly name: String;
    readonly description: String;
    readonly imageURL: String;
    readonly price: number;
    readonly createdAT: Date;
}