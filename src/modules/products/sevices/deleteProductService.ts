import {ProductRepository} from "../typeorm/repositories/productsRepository"
import AppError from "@shared/http/errors/AppError";


interface IRequest{
  id: string
}

class DeleteProductsService{
  public async execute({id}:IRequest): Promise<void> {
    const productsid = await ProductRepository.findOneBy({id: id});
    if(!productsid){
      throw new AppError('product not found');
    }

     await ProductRepository.remove(productsid)


  }
}
export default DeleteProductsService;
