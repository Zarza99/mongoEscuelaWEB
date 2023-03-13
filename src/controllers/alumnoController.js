import Alumnos from "../models/Alumnos";

export const renderAlumnos = async (req, res) => {
    const alumnos = await Alumnos.find().lean();
    res.render("alumno", {alumnos: alumnos});
};

export const createAlumnos = async (req, res) => {
    try {
        const alumnos = Alumnos(req.body);
        await alumnos.save();
        res.redirect("/alumnos/agregar");
    } catch (error) {
       console.log(error);
    }
};

 export const renderEditAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumnos.findById(req.params.id).lean();
        res.render("editarAlumno", {alumnos});
    } catch (error) {
        console.log(error.message);
    }
};

export const updateAlumnos = async (req, res) => {
    const { id } = req.params;
    await Alumnos.findByIdAndUpdate(id, req.body);

    res.redirect("/alumnos/agregar");
};

export const deleteAlumnos = async (req, res) => {
    const { id } = req.params;
    await Alumnos.findByIdAndDelete(id);

    res.redirect("/alumnos/agregar");
};

export const statusAlumnos = async (req, res) => {
    const { id } = req.params;
    const alumnos = await Alumnos.findById(id);
    //La propiedad "opcion" está en el Model.
    alumnos.opcion = !alumnos.opcion;
    await alumnos.save();

    res.redirect("/alumnos/agregar");
}; 
