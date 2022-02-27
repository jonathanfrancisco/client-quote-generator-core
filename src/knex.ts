import Knex from "knex"
import { Model } from "objection"
import knexConfig from "../knexfile"
import appConfig from './appConfig';

class KnexLoader {
    constructor() {

    }
    public async initialize() {
        const knex = Knex(knexConfig[appConfig.ENVIRONMENT])
        Model.knex(knex)
        console.log('# ObjectionJS with KnexJS Initialized... #')
    }
}

export default KnexLoader