import { GraphQLInputObjectType, GraphQLInt, GraphQLString } from 'graphql';

const PlaneInputType = new GraphQLInputObjectType({
  name: 'PlaneInput',
  description: 'Input type for creating or updating a plane',
  fields: () => ({
    registration: { type: GraphQLString },
    airline: { type: GraphQLString },
    model: { type: GraphQLString },
    numberOfRows: { type: GraphQLInt },
    numberOfSeatsPerRow: { type: GraphQLInt },
  }),
});

export default PlaneInputType;
