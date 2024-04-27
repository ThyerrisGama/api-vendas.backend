import {ProductRepository} from "../typeorm/repositories/productsRepository"
import AppError from "@shared/http/errors/AppError";
import Product from "../typeorm/entities/products";
import { AppDataSource } from "@shared/typeorm/data-source";


interface IRequest{
  id: string
  name: string;
  price: number;
  quantity: number;
}

class UpdateProductsService{
  public async execute({id, name, price, quantity}:IRequest): Promise<Product | void> {
    const productid = await ProductRepository.findOneBy({id: id});
    const productname = await ProductRepository.findOneBy({name: name});
    if(!productid || !productname ){
      throw new AppError('product not found');
    }

    const productsExists = await ProductRepository.findOneBy({name: name});

    if (productsExists && productname.name != name) {
      throw new AppError('there is already one products with this name')
    }


    productid.name = name
    productid.price = price
    productid.quantity = quantity

     await ProductRepository.save(productid)


     return productid;
  }
}
export default UpdateProductsService;
