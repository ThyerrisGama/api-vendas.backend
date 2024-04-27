import {ProductRepository} from "../typeorm/repositories/productsRepository"
import AppError from "@shared/http/errors/AppError";
import Product from "../typeorm/entities/products";



interface IRequest{
  id: string
  name: string;
}

class ShowProductsService{
  public async execute({id, name}:IRequest): Promise<Product[] | undefined> {
    const products = await ProductRepository.findBy({
      id: id,
      name: name
    });
    if(!products){
      throw new AppError('product not found');
    }
       return products;
  }
}

export default ShowProductsService;
