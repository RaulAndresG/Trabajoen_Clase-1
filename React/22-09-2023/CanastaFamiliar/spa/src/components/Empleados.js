import React, { Component } from 'react';


/* PROPS: Intercomunicador que hace que fluyan los datos de un componente padre a otro componente hijo, se utiliza props en el constructor por su gran funcion de asociacion de datos entre componentes y se utiliza (super) para que el componente pueda tener acceso y usar sus valores en el componente. */
class Empleados extends Component {
  constructor(props) {
    super(props);
    /* Es un estado que puede almacenar datos a lo largo del tiempo, esto lo genera el state */
    this.state = {
      empleados: [],
      nuevoEmpleado: '',
      empleadoEditado: null,
      modoEdicion: false,
    };
  }

  componentDidMount() {
    // Lógica para cargar empleados desde una fuente de datos al cargar la página
  }

  /* Aqui hacemos una condicion la cual si el campo de entrada esta libre se agregue un nuevo elemento */
  agregarEmpleado = () => {
    if (this.state.nuevoEmpleado.trim() !== '') {
      const nuevoEmpleado = {
        /* Hacemos un id con una marca de tiempo y nombre como el nuevo elemento que se va a ingresar en el campo de entrada */
        id: Date.now(), 
        nombre: this.state.nuevoEmpleado,
      };
      /* Utilizamos el setState para acutualizar el estado del componentes, utilizamos el prevState para obtener el estado anterior, luego se crea un nuevo estado que incluya el nuevo empleado en la lista de empleados y se restablecle nuevoEmpleado en una cadena vacia para prepararse para una nueva entrada  */
      this.setState((prevState) => ({
        empleados: [...prevState.empleados, nuevoEmpleado],
        nuevoEmpleado: '',
      }));
    }
  };

  /* Pasamos como parametro id, despues creamos una constante empleadoAEditar la cual va a buscar el empleado con el metodo find dependiendo del ID y que coincida con el ID si es asi, cambia el estado, pasando como argumento la funcion.*/
  editarEmpleado = (id) => {
    const empleadoAEditar = this.state.empleados.find((empleado) => empleado.id === id);
    /* Se verifica si se encontro un empleado para editar, Si se encontro un empleado se actualiza el estado del componente utilizando this.setState para indicar que se a habilitado el modo de edicion, Se establece empleadoEditado en el empleado encontrado y modoEdicion en true */
    if (empleadoAEditar) {
      this.setState({
        empleadoEditado: empleadoAEditar,
        modoEdicion: true,
      });
    }
  };

  guardarEdicion = () => {
    /* Verifica si hay un empleado editado en el estado */
    if (this.state.empleadoEditado) {
      /* Se destructuran 2 propiedades del estado en variables separadas */
      const { empleados, empleadoEditado } = this.state;
      /* En la constante empleadosActualizados con el map, hacemos una copia de la matriz, la cual empleado recorre todos los empleados existentes */
      const empleadosActualizados = empleados.map((empleado) =>
      /* Se reemplaza el empleado que tiene el mismo id que el empleado editado con el empleado editado en si mismo, y se hace esto para que se actualize el empleado de la matriz */
        empleado.id === empleadoEditado.id ? empleadoEditado : empleado
      );
      /* Finalmente se utiliza el this,setState para actualizar el estado del componente se actualiza la propiedad empleados con la matriz empleadosActualizados, se restablece empleadoEditado como null, (indica que no hay empleado en edicion) y se cambia modoEdicion a false para salir del modo edicion. */
      this.setState({
        empleados: empleadosActualizados,
        empleadoEditado: null,
        modoEdicion: false,
      });
    }
  };

  cancelarEdicion = () => {
    this.setState({
      empleadoEditado: null,
      modoEdicion: false,
    });
  };

  eliminarEmpleado = (id) => {
    const empleadosActualizados = this.state.empleados.filter((empleado) => empleado.id !== id);
    this.setState({
      empleados: empleadosActualizados,
    });
  };

  render() {
    return (
      <div>
        <h1>Empleados</h1>
        <input
          type="text"
          placeholder="Nuevo empleado"
          value={this.state.nuevoEmpleado}
          onChange={(e) => this.setState({ nuevoEmpleado: e.target.value })}
        />
        <button onClick={this.agregarEmpleado}>Agregar</button>
        <ul>
          {this.state.empleados.map((empleado) => (
            <li key={empleado.id}>
              {empleado.nombre}
              <button onClick={() => this.editarEmpleado(empleado.id)}>Editar</button>
              <button onClick={() => this.eliminarEmpleado(empleado.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
        {this.state.modoEdicion && (
          <div>
            <h2>Editar Empleado</h2>
            <input
              type="text"
              value={this.state.empleadoEditado.nombre}
              onChange={(e) =>
                this.setState({
                  empleadoEditado: { ...this.state.empleadoEditado, nombre: e.target.value },
                })
              }
            />
            <button onClick={this.guardarEdicion}>Guardar</button>
            <button onClick={this.cancelarEdicion}>Cancelar</button>
          </div>
        )}
      </div>
    );
  }
}

export default Empleados;
