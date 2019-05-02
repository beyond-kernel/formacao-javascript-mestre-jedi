//programação síncrona
alert("Hello World");
console.log("Hello World");

function exibeNome(nome) {
  var newName = nome.split("");
  for (var i = 0; i < nome.length; i++) {
    alert("Letras do seu nome " + newName[i]);
  }
}

var objStudent = {
  name: "Rafael",
  course: "I.T",
  watchClass: function() {
    console.log("Watch class");
  }
};

console.log(objStudent.name);
console.log(objStudent.course);
objStudent.watchClass();

//programação assincrona
console.log("Inicio assíncrono");

//timer assíncrono
setTimeout(function() {
  console.log("Executando programação assícrona");
}, 2000);

console.log("termino assíncrono");
