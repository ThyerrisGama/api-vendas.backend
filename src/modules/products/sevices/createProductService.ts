import {ProductRepository} from "../typeorm/repositories/productsRepository"
import { AppDataSource } from "@shared/typeorm/data-source";
import AppError from "@shared/http/errors/AppError";
import Product from "../typeorm/entities/products";


interface IRequest{
  name: string;
  price: number;
  quantity: number;
}

class CreateProductService{
  public async execute({name, price, quantity}:IRequest): Promise<Product | void> {
    const productsExists = await ProductRepository.findBy({name: name});

    if (productsExists) {
      throw new AppError('there is already one products with this name')
    }
    AppDataSource.initialize().then(async () => {
       const product = new Product();
       product.name = name
       product.price = price
       product.quantity = quantity

       await AppDataSource.manager.save(product)

       return product;
    })

  }
}

export default CreateProductService;
