"use strict"
//xmlBiblioteca è un var che contiene contiene tutti i dati in una grossa stringa

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlBiblioteca, "application/xml");

/*console.log(xmlDoc.documentElement);
console.log(xmlDoc);*/

let libri = Array.from(xmlDoc.getElementsByTagName("libro"));

//console.log(libri);

let pagina = 1;
const perpagina = 5;

mostraTabella();

function mostraTabella()
{
    const container = document.getElementById("tabella-container");
    const start = (pagina - 1) * perpagina;
    const end = Math.min(start + perpagina, libri.length);

    let html =
        `
<table>
     <thead>
       <tr>
        <th>Titolo</th>
        <th>Autore</th>
        <th>Anno</th>
        <th>Genere</th>
        <th>Editore</th>
        <th>ISBN</th>
        <th>Scaffale</th>
        <th>Azioni</th>
       </tr>
    </thead>
    <tbody>
        `;

    for(let i = start; i < end; i++)
    {
        let libro = libri[i];
        console.log(libro.getElementsByTagName("titolo")[0].textContent);
        html += `
            <tr>
            <td>${libro.getElementsByTagName("titolo")[0].textContent}</td>
            <td>${libro.getElementsByTagName("autore")[0].textContent}</td>
            <td>${libro.getElementsByTagName("anno")[0].textContent}</td>
            <td>${libro.getElementsByTagName("genere")[0].textContent}</td>
            <td>${libro.getElementsByTagName("editore")[0].textContent}</td>
            <td>${libro.getElementsByTagName("isbn")[0].textContent}</td>
            <td>${libro.getElementsByTagName("scaffale")[0].textContent}</td>
            <td><button class="modificaBtn">Modifica</button></td>  
            </tr>
        `;
    }
    html += `
        </tbody>
</table>
        `;
    container.innerHTML = html;
}