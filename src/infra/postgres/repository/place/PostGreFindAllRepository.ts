import { Place } from "@/infra/postgres/entities";
import { IPostGreFindAllRepository } from "@/infra/helpers/repos/place";

import { EntityRepository, Repository } from "typeorm";
import { PlaceDTO } from "@/data/contracts/dtos";

@EntityRepository(Place)
export class PostGreFindAllRepository extends Repository<Place> implements IPostGreFindAllRepository{
  async All():Promise<PlaceDTO[]>{
    return await this.find()
  }
}



















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































