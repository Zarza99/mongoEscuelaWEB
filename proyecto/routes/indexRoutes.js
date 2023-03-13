"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _alumnoController = require("../controllers/alumnoController");
var _asignaturaController = require("../controllers/asignaturaController");
var _profesorController = require("../controllers/profesorController");
var router = (0, _express.Router)();

//PROFESORES
router.get('/', _profesorController.renderProfesores);

//Agregar profesores
router.post("/profesores/agregar", _profesorController.createProfesores);

//A buscar por id
router.get("/profesores/:id/update", _profesorController.renderEditProfesores);

//Actualizar
router.post("/profesores/:id/update", _profesorController.updateProfesores);

//Eliminar
router.get("/profesores/:id/delete", _profesorController.deleteProfesores);

//Función para status
router.get("/profesores/:id/statusProfesores", _profesorController.statusProfesores);

//ALUMNOS
router.get('/alumnos/agregar', _alumnoController.renderAlumnos);

//Agregar alumnos
router.post("/alumnos/agregar", _alumnoController.createAlumnos);

//A buscar por id
router.get("/alumnos/:id/update", _alumnoController.renderEditAlumnos);

//Actualizar
router.post("/alumnos/:id/update", _alumnoController.updateAlumnos);

//Eliminar
router.get("/alumnos/:id/delete", _alumnoController.deleteAlumnos);

//Función para status
router.get("/alumnos/:id/statusAlumnos", _alumnoController.statusAlumnos);

//ASIGNATURAS
router.get('/asignaturas/agregar', _asignaturaController.renderAsignaturas);

//Agregar profesores
router.post("/asignaturas/agregar", _asignaturaController.createAsignaturas);

//A buscar por id
router.get("/asignaturas/:id/update", _asignaturaController.renderEditAsignaturas);

//ACTUALIZA
router.post("/asignaturas/:id/update", _asignaturaController.updateAsignaturas);

//eliminar
router.get("/asignaturas/:id/delete", _asignaturaController.deleteAsignaturas);

//Función para status
router.get("/asignaturas/:id/statusAsignaturas", _asignaturaController.statusAsignaturas);
var _default = router;
exports["default"] = _default;