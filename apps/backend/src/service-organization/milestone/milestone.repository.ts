import { Repository } from "typeorm";
import { EntityRepository } from "typeorm/decorator/EntityRepository";

import { MilestoneEntity } from "./milestone.entity";

@EntityRepository(MilestoneEntity)
export class MilestoneRepository extends Repository<MilestoneEntity> {}
