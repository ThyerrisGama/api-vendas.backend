import { AppDataSource  } from "@shared/typeorm/data-source"
import product from "../entities/products"


export const ProductRepository = AppDataSource.getRepository(product).extend({
      findByName(name: string) {
      return this.createQueryBuilder("products")
          .where("product.name = :name", { name })
          .getMany()
  },
})
