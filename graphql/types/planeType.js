import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

const PlaneType = new GraphQLObjectType({
  name: 'Plane',
  fields: () => ({
    id: { type: GraphQLInt },
    registration: { type: GraphQLString },
    airline: { type: GraphQLString },
    model: { type: GraphQLString },
    numberOfRows: { type: GraphQLInt },
    numberOfSeatsPerRow: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export default PlaneType;
