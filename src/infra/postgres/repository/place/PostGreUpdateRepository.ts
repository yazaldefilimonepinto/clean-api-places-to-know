import { Place } from "@/infra/postgres/entities";
import { IPostGreUpdateRepository } from "@/infra/helpers/repos/place";

import { EntityRepository, Repository } from "typeorm";
import { PlaceDTO } from "@/data/contracts/dtos";

@EntityRepository(Place)
export class PostGreUpdateRepository extends Repository<Place> implements IPostGreUpdateRepository{
  async update(place: PlaceDTO):Promise<any>{
    await this.save(place);
  }
}



















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































