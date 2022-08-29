const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");
const { Nation, Club } = require("../models");

//let nation = null;

const NationType = new GraphQLObjectType({
    name: "NationType",
    description: "The nation type",
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
    }    
});

const ClubType = new GraphQLObjectType({
    name: "ClubType",
    description: "The club type",
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
    }    
});

const PlayerType = new GraphQLObjectType({
    name: "PlayerType",
    description: "The player type",
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        common_name: { type: GraphQLString },
        position: { type: GraphQLString },
        nationId: { type: GraphQLInt },
        clubId: { type: GraphQLInt },
        nation: { 
            type: NationType,
            resolve(parent) {
                return Nation.findOne({ id: parent.nationId }, 'name');
            }
            /* async resolve(parent) {
                const nation = Nation.findOne({ id: parent.nationId }, function(err, obj) {
                    let {name} = obj;
                    console.log(name)
                    return name;
                });
                console.log('hola');
                return 'hola';                
            } */
        },
        club: {
            type: ClubType,
            resolve(parent) {
                return Club.findOne({ id: parent.clubId }, 'name');
            }
        },
        meta: { type: GraphQLString}
    }    
});



module.exports = {
    PlayerType,
    ClubType,
    NationType
};