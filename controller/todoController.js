import ToDoModel from "../models/ToDoModel.js"
var tarea = new ToDoModel();
class TodoController {
    constructor() {}
    //services
    async createTarea(request, response) {
        var data = request.body;
        var result = await tarea.createTarea(
            data.name,
            data.description,
            new Date(),
            data.hour,
            data.done
        );
        response.status(200).json(result);
    }
    async getTarea(request,response){
        var result = await tarea.getTarea();
        response.status(200).json(result);
    }
    async updateTarea(request,response){
        var id = request.params.id;
        var updatedata = request.body;
        var result = await tarea.updateTarea(id, updatedata);
        response.status(200).json(result);
    }
    async deleteTarea(request,response){
        var id =request.params.id;
        var result = await tarea.deleteTarea(id);
        response.status(200).json(result);
    }
    async updateDone(request,response){
        var id = request.params.id;
        var updatedone = request.body.done;
        var result = await tarea.updateDone(id, updatedone);
        response.status(200).json(result);
    }
}
export default TodoController;