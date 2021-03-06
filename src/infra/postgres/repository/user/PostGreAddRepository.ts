import { User } from "@/infra/postgres/entities";
import { IPostGreAddRepository } from "@/infra/helpers/repos";

import { EntityRepository, Repository } from "typeorm";
import { UserDTO } from "@/data/contracts/dtos";

@EntityRepository(User)
export class PostGreAddRepository extends Repository<User> implements IPostGreAddRepository{
  async add(data:UserDTO):Promise<UserDTO>{
    const user = this.create(data);
    await this.save(user);

    return user
  }
}



















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































