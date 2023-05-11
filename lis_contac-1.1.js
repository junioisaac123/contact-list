let listaContactos = [
  {
    id: 1,
    nombres: "Juan",
    apellidos: "Perez",
    telefono: "555-1234",
    ubicaciones: {
      ciudad: "Bogotá",
      direccion: "Calle 123"
    }
  },
  {
    id: 2,
    nombres: "Maria",
    apellidos: "Garcia",
    telefono: "555-5678",
    ubicaciones: {
      ciudad: "Medellín",
      direccion: "Carrera 456"
    }
  },
  {
    id: 3,
    nombres: "Carlos",
    apellidos: "Rodriguez",
    telefono: "555-9012",
    ubicaciones: {
      ciudad: "Cali",
      direccion: "Avenida 789"
    }
  }
];

function agregarContacto(nuevoContacto) {
  listaContactos.push(nuevoContacto);
}

function borrarContacto(id) {
  let indice = listaContactos.findIndex(function (contacto) {
    return contacto.id === id;
  });
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  }
}

function imprimirContactos() {
  listaContactos.forEach(contacto => console.log(contacto));
}

agregarContacto({
  id: 4,
  nombres: "Ana",
  apellidos: "Lopez",
  telefono: "555-3456",
  ubicaciones: {
    ciudad: "Barranquilla",
    direccion: "Calle 678"
  }
});
imprimirContactos();
borrarContacto(2);
imprimirContactos();

