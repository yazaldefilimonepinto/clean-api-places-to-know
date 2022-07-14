import { Place } from "@/infra/postgres/entities";
import { IPostGreDeleteRepository } from "@/infra/helpers/repos/place";

import { EntityRepository, Repository } from "typeorm";
import { PlaceDTO } from "@/data/contracts/dtos";

@EntityRepository(Place)
export class PostGreDeleteRepository extends Repository<Place> implements IPostGreDeleteRepository{
  async deletePlace({ id }:PlaceDTO | any):Promise<any>{
    await this.delete(id);

  }
}


















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































