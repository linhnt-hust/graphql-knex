import { PersonModel } from '../../models/person';

export const resolver = {
    Query: {
        getAllPersons: () => PersonModel.getAllPersons(),
        findPerson: (_, { id }) => PersonModel.findPerson(id).first(),
    },
    Mutation: {
        createPerson(root, { input }) {
            return PersonModel.createPerson(input);
        },
        updatePerson(root, { id, input }) {
            if (id) {
                return PersonModel.updatePerson(id, input);
            }
            return false;
        },
        // insertPersons(root, { input }) {
        //     return PersonModel.insertPersons(input);
        // }
    }
}
