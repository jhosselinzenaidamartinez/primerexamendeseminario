import ToDoModel from "../models/ToDoModel.js";
var inittest = async () => {
    var tareamodel = new ToDoModel();
    tareamodel.createTarea("Test", "Prueba primera1",new Date(),"1503",1);
    tareamodel.createTarea("Test2", "Prueba primera2",new Date(),"0114",0);
    //tareamodel.createTarea("Test3", "Prueba primera3",new Date(),"0844");
    //tareamodel.createTarea("Test4", "Prueba primera4",new Date(),"1410");
    console.log(await tareamodel.getTarea());
};
inittest();