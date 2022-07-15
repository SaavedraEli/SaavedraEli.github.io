const btn = document.getElementById('dardealta');

btn.addEventListener('click',async () => {
    
    const paginaInput = document.getElementById('dardealta');
    if(!paginaInput.value) {
        alert('Ingrese pagina a buscar');
        return;
    }
    const response = await getUserData(+paginaInput.value);

    const jsonDataMapped = jsonData.data.map((x) => {
        return {
            avatar: x.evatar,
            name: x.first_name,
            id: x.id
        }
    });
