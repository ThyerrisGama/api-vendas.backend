import {ProductRepository} from "../typeorm/repositories/productsRepository"
import Product from "../typeorm/entities/products";




class ListProductsService{
  public async execute(): Promise<Product[] | {}> {
    const products = await ProductRepository.find();


       return products;
  }
}

export default ListProductsService;
