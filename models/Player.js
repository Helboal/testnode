const { Schema, model } = require('mongoose');

const playerSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
    },
    common_name: {
        type: String,
    },
    position: {
        type: String,
    },
    nationId: {
        type: Number
    },
    clubId: {
        type: Number
    }
}, {    
    versionKey: false,
});

/* playerSchema.virtual("test", {
    ref: "Nation",
    localField: ["nation"],
    foreignField: ["id"],
    justOne: true    
}); */

module.exports = model("Player", playerSchema);