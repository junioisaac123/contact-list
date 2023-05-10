let listaContactos = [
  "Juan Perez",
  "Maria Garcia",
  "Pedro Rodriguez",
];

function agregarContacto(contacto) {
  listaContactos.push(contacto);
}

function borrarContacto(contacto) {
  for (let i = 0; i < listaContactos.length; i++) {
    if (listaContactos[i] === contacto) {
      listaContactos.splice(i, 1);
      break;
    }
  }
}

function imprimirContactos() {
  listaContactos.forEach(contacto => console.log(contacto));
}

agregarContacto("Laura Hernandez");
imprimirContactos(); 
borrarContacto("Maria Garcia");
imprimirContactos(); 
