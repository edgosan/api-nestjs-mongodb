import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateProductDTO } from './dto/products.dto'

import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        const products = await this.productsService.createProducts(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'product Successfully Created',
            product: products
        });
    }

    @Get('/')
    async getProducts(@Res() res) {
        const products = await this.productsService.getProducts();
        return res.status(HttpStatus.OK).json({
            products
        })
    }

    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID ){
        const product = await this.productsService.getProduct(productID);
        if (!product) throw new NotFoundException('Product Does Not Exists');
        return res.status(HttpStatus.OK).json(product);
    }

    @Delete('/delete')
     async deleteProduct(@Res() res,  @Query('productID') productID ) {
        const productDeleted = await this.productsService.deleteProducts(productID);
        if (!productDeleted) throw new NotFoundException('Product Does Not Exists');
        return res.status(HttpStatus.OK).json({
            message: 'Product Deleted Successfully',
            productDeleted
        });
    }

    @Put('/update')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productID') productID ){
        const updateProduct = await this.productsService.updateProducts(productID, createProductDTO);
        if (!updateProduct) throw new NotFoundException('Product Does Not Exists');
        return res.status(HttpStatus.OK).json({
            message: 'Product Update Successfully',
            updateProduct
        });
    }
    
}
