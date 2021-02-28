import mongoose from "../connection/connect.js";
class ToDoModel{
    constructor(){
        this.Schema = mongoose.Schema;
        this.TodoSchema = new this.Schema({
            /**name S description S date D hour S done B */
            name: String,
            description: String,
            date: Date,
            hour: String,
            done: Boolean
        });
        this.mymodel = mongoose.model("tarea",this.TodoSchema);
    }

    createTarea(name, description, date, hour, done){
        var tarea = {
            name,
            description,
            date,
            hour,
            done
        };
        var newtarea = new this.mymodel(tarea);
        return new Promise((resolve,reject)=>{
            newtarea.save().then((docs)=>{
                console.log("TAREA REGISTRADA");
                resolve(docs);
            });
        });
    }

    getTarea(){
        return new Promise((resolve,reject)=>{
            this.mymodel.find({},(err,docs)=>{
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
        
    }

    updateTarea(id, tareaUpdate){
        return new Promise((resolve, reject)=>{
            this.mymodel.update({_id: id},{$set: tareaUpdate}, (err,docs)=>{
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });    
        });
        
    }
    updateDone(id, updateDone){
        return new Promise((resolve, reject)=>{
            this.mymodel.update({_id: id},{done: updateDone}, (err,docs)=>{
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });    
        });
        
    }

    deleteTarea(id){
        return new Promise((resolve,reject)=>{
            this.mymodel.remove({_id:id}).then((err,docs)=>{
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
    }

    getModel(){
        return this.mymodel;
    }
};
export default ToDoModel;