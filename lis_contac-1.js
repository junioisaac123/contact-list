let listaContactos = [
  "Juan Perez",
  "Maria Garcia",
  "Pedro Rodriguez",
];

function agregarContacto(contacto) {
  listaContactos.push(contacto);
}

function borrarContacto(contacto) {
  let indice = listaContactos.indexOf(contacto);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  }
}

function imprimirContactos() {
  listaContactos.forEach(contacto => console.log(contacto));
}

agregarContacto("Laura Hernandez");
imprimirContactos(); 
borrarContacto("Maria Garcia");
imprimirContactos(); 
borrarContacto("carlos perez");
imprimirContactos();
agregarContacto("junior lopez");
imprimirContactos();