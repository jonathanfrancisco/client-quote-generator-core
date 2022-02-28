import {JSONSchema, Model} from 'objection'

class Benefits extends Model {
    id!: string
    name!: string
    amount!: boolean
    value: string
    defaultBenefit!: boolean

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
            },
            defaultBenefit: {
                type: 'boolean',
                default: false
            }
        }
    }
}

export default Benefits