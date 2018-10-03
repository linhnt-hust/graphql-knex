export const typeDef = `
    extend type Query {
        getAllPersons: [Person]
        findPerson(id:Int): Person
    }

    extend type Mutation {
        createPerson(input: PersonInput): Person
        updatePerson(id: ID!, input: PersonInput): Person
    }

    input PersonInput {
        name: String,
        age: Int,
        gender: String,
    }

    type Person {
        id: ID,
        name: String,
        age: Int,
        gender: String,
    }
`;