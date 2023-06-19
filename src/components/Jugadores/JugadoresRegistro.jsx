import React from "react";
import { useForm } from "react-hook-form";

export default function JugadoresRegistro({
  AccionABMC,
  Item,
  Grabar,
  Volver,
}) { const {
  register,
  handleSubmit,
  formState: { errors, touchedFields, isValid, isSubmitted },
} = useForm({ values: Item });
const onSubmit = (data) => {
  Grabar(data);
};


  if (!Item) return null;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="container-fluid">

        <fieldset disabled={AccionABMC === "C"}>

          {/* campo nombre */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="nombre">
                Nombre<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
            <input
              type="text"
              {...register("Nombre")}
              autoFocus
              className="form-control"
            />

            </div>
          </div>

          {/* campo Apellido */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="apellido">
                Apellido<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text" 
                name="apellido"
                value={Item.apellido}
                className= "form-control" 
              />
            </div>
          </div>

          {/* campo Fecha de nacimiento */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="fecha_nacimiento">
                Fecha de nacimiento<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="date"
                name="fecha_nacimiento"
                value={Item.fecha_nacimiento}
                className="form-control"
              />
            </div>
          </div>

          {/* campo Nacionalidad */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="nacionalidad">
                Nacionalidad<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                name="nacionalidad"
                value={Item.nacionalidad}
                className="form-control"
              />
            </div>
          </div>
          
          { /* campo Dorsal */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="dorsal">
                Dorsal<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="number"
                name="dorsal"
                value={Item.dorsal}
                className="form-control"
              />
            </div>
          </div>

          { /* campo Equipo */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="equipo">
                Equipo<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="number"
                name="equipo"
                value={Item.dorsal}
                className="form-control"
              />
            </div>
          </div>

        

        </fieldset>

        {/* Botones Grabar, Cancelar/Volver' */}
        <hr />
        <div className="row justify-content-center">
          <div className="col text-center botones">
            {AccionABMC !== "C" && (
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-check"></i> Grabar
              </button>
            )}
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => Volver()}
            >
              <i className="fa fa-undo"></i>
              {AccionABMC === "C" ? " Volver" : " Cancelar"}
            </button>
          </div>
        </div>

        {/* texto: Revisar los datos ingresados... */}
        <div className="row alert alert-danger mensajesAlert">
          <i className="fa fa-exclamation-sign"></i>
          Revisar los datos ingresados...
        </div>

      </div>
    </form>
  );
}
