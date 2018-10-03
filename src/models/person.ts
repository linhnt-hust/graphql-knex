import { knex } from '../connectors';
import * as promise from 'bluebird';

class Person{
    getAllPersons() {
        return knex('persons').select();
    }

    findPerson(id: number) {
        if (id) {
            return knex('persons').where('id', id).select();
        }
        return false;
    }

    createPerson(input: object) {
        if (input) {
            return knex('persons').insert(input).then(function(result) {
                return knex('persons').where('id', result[0]).first();
            });
        }
        return false;
    }

    updatePerson(id: number, input: object) {
        if (id) {
            return knex('persons').where('id', id).update(input).then(function(result) {
                return knex('persons').where('id', id).first();
            });
        }
        return false;
    }
}


export const PersonModel = new Person();