import Knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../knexfile';
import appConfig from './appConfig';

class KnexLoader {
  public async initialize() {
    const knex = Knex(knexConfig[appConfig.ENVIRONMENT]);
    Model.knex(knex);
  }
}

export default KnexLoader;
