import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLNonNull } from 'graphql';

// Define the SeatType
const SeatType = new GraphQLObjectType({
  name: 'Seat',
  fields: {
    row: { type: new GraphQLNonNull(GraphQLInt) },
    seat: { type: new GraphQLNonNull(GraphQLString) },
  },
});


export default SeatType;