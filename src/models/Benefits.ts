import {JSONSchema, Model} from 'objection'

class Benefits extends Model {
    id!: string
    name!: string
    amount!: boolean
    value: string

    static tableName = 'benefits';

    static jsonSchema = {
        type: 'object',
        required: ['name'],
        properties: {
            id: {
                type: 'string'
            },
            name: {
                type: 'string'
            },
            amount: {
                type: 'boolean',
                default: true
            },
            value: {
                type: 'string'
            }
        }
    }
}

export default Benefits