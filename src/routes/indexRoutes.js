import { Router } from "express"
import { createAlumnos, deleteAlumnos, renderAlumnos, renderEditAlumnos, statusAlumnos, updateAlumnos } from "../controllers/alumnoController";
import { createAsignaturas, deleteAsignaturas, renderAsignaturas, renderEditAsignaturas, statusAsignaturas, updateAsignaturas } from "../controllers/asignaturaController";
import { createProfesores, deleteProfesores, renderEditProfesores, renderProfesores, statusProfesores, updateProfesores } from "../controllers/profesorController";

const router =Router();

//PROFESORES
router.get('/', renderProfesores);

//Agregar profesores
router.post("/profesores/agregar",  createProfesores);

//A buscar por id
router.get("/profesores/:id/update", renderEditProfesores);

//Actualizar
router.post("/profesores/:id/update", updateProfesores);

//Eliminar
router.get("/profesores/:id/delete", deleteProfesores);

//Función para status
router.get("/profesores/:id/statusProfesores", statusProfesores);


//ALUMNOS
router.get('/alumnos/agregar', renderAlumnos);

//Agregar alumnos
router.post("/alumnos/agregar",  createAlumnos);

//A buscar por id
router.get("/alumnos/:id/update", renderEditAlumnos);

//Actualizar
router.post("/alumnos/:id/update", updateAlumnos);

//Eliminar
router.get("/alumnos/:id/delete", deleteAlumnos);

//Función para status
router.get("/alumnos/:id/statusAlumnos", statusAlumnos);


//ASIGNATURAS
router.get('/asignaturas/agregar', renderAsignaturas);

//Agregar profesores
router.post("/asignaturas/agregar",  createAsignaturas);

//A buscar por id
router.get("/asignaturas/:id/update", renderEditAsignaturas);

//ACTUALIZA
router.post("/asignaturas/:id/update", updateAsignaturas);

//eliminar
router.get("/asignaturas/:id/delete", deleteAsignaturas);

//Función para status
router.get("/asignaturas/:id/statusAsignaturas", statusAsignaturas);

export default router;
