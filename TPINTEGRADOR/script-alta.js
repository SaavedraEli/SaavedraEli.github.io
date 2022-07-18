const form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let formulario = new FormData(form);
    formulario.get("formNombre");
    formulario.get("formPrecio");
    formulario.get("formCodigo");
    insertRowinTable(formulario);
    
}   

)
function insertRowinTable(formulario){
    let tableRef = document.getElementById("table");
    let newtableRowRef = tableRef.insertRow(-1);
    let newtableCellRef = newtableRowRef.insertCell(0);
    newtableCellRef.textContent = formulario.get("formNombre");
    let newtableCellRef = newtableRowRef.insertCell(1);
    newtableCellRef.textContent = formulario.get("formPrecio");
    let newtableCellRef = newtableRowRef.insertCell(2);
    newtableCellRef.textContent = formulario.get("formCodigo");
}