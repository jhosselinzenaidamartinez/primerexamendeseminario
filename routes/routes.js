import express from "express";
import IndexController from "../controller/indexController.js";
import UserController from "../controller/userController.js";
import RolesController from "../controller/rolesContoller.js";
import ToDoController from "../controller/todoController.js";
import JsonWebTokenManagement from "../middleware/JsonWebTokenManagement.js";
import ToDoModel from "../models/ToDoModel.js";
import  RequestTimeout  from "http-errors";

var router = express.Router();
var indexControler = new IndexController();
var userController = new UserController();
var rolesController = new RolesController();
var jsonwebtokenmanagement = new JsonWebTokenManagement();
/* GET home page. */
/**
 * Endpoints de los usuarios
 * // Servicios de los usuarios
 */
router.get("/", indexControler.index);
router.post("/login", indexControler.login);
/**
 * SERVICIO PROTEGIDO
 */
router.get("/user", userController.getUsers);
/* FIN DE SERVICIO PROTEGIDO */
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
router.post("/addRol", userController.addRol);
router.post("/uploadAvatar/:id", userController.uploadAvatar);
router.get("/showavatar/:name", userController.getAvatar);
/* GET home page. */
/**
 * Endpoints de los usuarios
 * // Servicios de los ROLES
 */
router.post("/roles", rolesController.createRol);
router.get("/roles", rolesController.getRol);
router.get("/roles/:key", rolesController.getRol);
router.put("/roles/:id", rolesController.updateRol);
router.delete("/roles/:id", rolesController.deleteRol);
/*  
Implemente 
*/
var todoController = new ToDoController();
router.get("/tarea", todoController.getTarea);
router.post("/tarea", todoController.createTarea);
router.put("/tarea/:id", todoController.updateTarea);
router.delete("/tarea/:id", todoController.deleteTarea);
//router.put("/done/:id", todoController.updateDone);
router.put("/done/:id", todoController.updateDone);
export default router;
