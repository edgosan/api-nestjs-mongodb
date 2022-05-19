import { Injectable } from '@nestjs/common';
import { Model, model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { Products } from './interface/products.interface'
import { CreateProductDTO } from './dto/products.dto'
import { async } from 'rxjs';

@Injectable()
export class ProductsService {

    constructor(@InjectModel('Products') private readonly productsmodel: Model<Products>) {}

    async getProducts(): Promise<Products[]> {
        const products = await this.productsmodel.find()
        return products;
    }

    async getProduct(productID: String): Promise<Products>{
        const products = await this.productsmodel.findById(productID);
        return products;
    }

    async createProducts(createProductDTO: CreateProductDTO): Promise<Products>{
        const products = new this.productsmodel(createProductDTO);
        return await products.save();
    }

    async deleteProducts(productID: string): Promise<Products>{
        const deleteProducts = await this.productsmodel.findByIdAndDelete(productID);
        return deleteProducts;
    }

    async updateProducts(productID: string, createProductDTO: CreateProductDTO): Promise<Products>{
        const updateProducts = await this.productsmodel.findByIdAndUpdate(productID,createProductDTO, {new: true});
        return updateProducts;
    }

}
