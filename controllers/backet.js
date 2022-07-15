const { Node, Participant, Round } = require('../models/Bracket')
const mongoose = require('mongoose')

exports.bracketing = async (req, res, next)=>{

    const players = ["Jean", "Antoine", "Maxime", "Fred", "Charles", "Steve","Max", "Emmanuel"];
    const bracketSize = 8;
    const tournamentSize = 8;
    const tournamentId = 1;
    let nodeRootId = "";
    let rounds =  Math.log(tournamentSize)/Math.log(2)-1;

    const bracketArr = [
        { 
            tournamentId:tournamentId,
            node: "node01", 
            childrens:[ "node02", "node03" ],
            round: "Grand Final",
            participants:[]
        },
        {
            tournamentId:tournamentId,
            node: "node02", 
            childrens:[ "node04", "node05" ],
            round:"Semi final",
            participants:[]

        },
        {
            tournamentId:tournamentId,
            node: "node03", 
            childrens:[ "node06", "node07" ] ,
            round:"Semi final",
            participants:[]

        },
        
    ];



    Node.insertMany(bracketArr,(error, bracket)=>{
        if(error)console.log(error)
        if(bracket){
        console.log("🚀 ~ file: backet.js ~ line 35 ~ Node.insertMany ~ bracket", bracket)
        for(let i = 0; i < rounds; i++){
            const round = new Round({
                tournamentId : tournamentId,
                number: i
            });
            round.save((error, roundSaveresult)=>{
                if(error)console.log(error)
                if(roundSaveresult){
                    console.log("🚀 ~ file: backet.js ~ line 47 ~ round.save ~ roundSaveresult", roundSaveresult)
                    
                    return 
                }
            })
            
                }
        }
    })


    return

    const node = new Node({
        tounamentId: tournamentId,
        round: "Grand Final",
        childrens:[]
       })
    try {
       await node.save((error, ParentNode)=>{
        if(error) console.log(error)
        if(ParentNode){
            nodeRootId = mongoose.Types.ObjectId.isValid(ParentNode._id);

            console.log("🚀 ~ file: backet.js ~ line 19 ~ node.save ~ nodeRootId", nodeRootId)
                 Node.findById(ParentNode._id, (error, findParentNode)=>{
                    if(error)console.log(error)
                    if(findParentNode){
try {
    const leftChildrenNode = new Node({
        tounamentId: tournamentId,
        round: "Semi Final",
        parent: findParentNode._id,
        childrens:[]
    })
    const rightChildrenNode = new Node({
        tounamentId: tournamentId,
        round: "Semi Final",
        parent: findParentNode._id,
        childrens:[]
    });
    //Left children
    leftChildrenNode.save((error, leftChildrenNode)=>{
if(error) console.log(error)
if(leftChildrenNode){
    Node.findOneAndUpdate({ _id: findParentNode }, {$push:{childrens : leftChildrenNode._id}},{useFindAndModify: false},(error, updateParentNode)=>{
if(error)console.log(error)
if(updateParentNode){
    console.log("🚀 ~ file: backet.js ~ line 45 ~ Node.findOneAndUpdate ~ updateParentNode", updateParentNode)
    Node.findOneAndUpdate({_id: leftChildrenNode._id},{parent: updateParentNode._id}, (error, nodeUpdateWithParent)=>{
        if(error)console.log(error)
if(nodeUpdateWithParent){
console.log("🚀 ~ file: backet.js ~ line 52 ~ Node.findOneAndUpdate ~ nodeUpdateWithParent", nodeUpdateWithParent)

}
    } )
}
    });

}
    });
    //Right children
    rightChildrenNode.save((error, rightChildrenNode)=>{
        if(error) console.log(error)
        if(rightChildrenNode){
            Node.findOneAndUpdate({ _id: findParentNode }, {$push:{childrens : rightChildrenNode._id}},{useFindAndModify: false},(error, updateParentNode)=>{
        if(error)console.log(error)
        if(updateParentNode){
            console.log("🚀 ~ file: backet.js ~ line 45 ~ Node.findOneAndUpdate ~ updateParentNode", updateParentNode)
            Node.findOneAndUpdate({_id: rightChildrenNode._id},{parent: updateParentNode._id}, (error, nodeUpdateWithParent)=>{
                if(error)console.log(error)
        if(nodeUpdateWithParent){
        console.log("🚀 ~ file: backet.js ~ line 52 ~ Node.findOneAndUpdate ~ nodeUpdateWithParent", nodeUpdateWithParent)
        
        }
            } )
        }
            });
      
        }
            }) 
} catch (error) {
console.log("🚀 ~ file: backet.js ~ line 29 ~ Node.findById ~ error", error)
    
}


                    }
                })                
        }
       })
      
    } catch (error) {
    console.log("🚀 ~ file: backet.js ~ line 13 ~ exports.bracketing= ~ error", error)
        
    }

}