import _ = require("lodash");

import { AbstractEntity } from "./common/abstract.entity";
import { AbstractDto } from "./common/dto/AbstractDto";

declare global {
  interface Array<T> {
    toDtos<B extends AbstractDto>(this: AbstractEntity<B>[]): B[];
  }
}

Array.prototype.toDtos = function <B extends AbstractDto>(options?: any): B[] {
  return <B[]>_(this)
    .map((item) => item.toDto(options))
    .compact()
    .value();
};
