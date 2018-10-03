import { config } from '../constants/Config';
import { database } from '../../knexfile';

export const knex = require('knex')(database[config.evironment]);

