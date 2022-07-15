const mongoose = require('mongoose');

const nodeSchema = mongoose.Schema({
    //tournamentId:{type:mongoose.Types.ObjectId, ref:"Tournament", require:true},
    tournamentId: { type:String },
    node:{ type:String },
    childrens: { type: Array },
    round:{ type:String, require:true },
    participants: { type: Array }
}, { autoIndex: true });

const participantSchema = mongoose.Schema({
name: { type: String },
tournamentId: { type : String },
});

const roundSchema = mongoose.Schema({
    tounamentId: { type : Number, required:true },
    number:{ type: String }

});

const Node = mongoose.model("Node", nodeSchema);
const Participant = mongoose.model("Participants", participantSchema );
const Round = mongoose.model("Round", roundSchema)

module.exports =  { Node, Participant, Round  } 