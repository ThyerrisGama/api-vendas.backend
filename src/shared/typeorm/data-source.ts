import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: ["/**/entity/*.ts"],
    migrations: ["/**/migrations/*.ts"],
})
