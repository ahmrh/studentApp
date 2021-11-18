
/* misc */
class Mahasiswa{
    constructor(nama, jurusan, fakultas){
        this.nama = nama;
        this.jurusan = jurusan;
        this.fakultas = fakultas;
    }
}

const table = document.querySelector('tbody')
function updateTable(){
    for(let i = 0; i < mahasiswa.length; i++){
        let no = document.createElement('th');
        no.setAttribute('scope', "row");
        no.innerText = i + 1;
    
        let nama = document.createElement('td');
        nama.innerText = mahasiswa[i].nama;
    
        let jurusan = document.createElement('td');
        jurusan.innerText = mahasiswa[i].jurusan;
    
        let fakultas = document.createElement('td');
        fakultas.innerText = mahasiswa[i].fakultas;

        let config = document.createElement('td');
        config.setAttribute('class', 'config');
        config.setAttribute('id', i);
        let edit = document.createElement('button');
        edit.setAttribute('class', 'btn btn-primary btn-sm edit');
        edit.innerText = "Edit";
        edit.style.margin = "0 5px";

        let del = document.createElement('button');
        del.setAttribute('class', 'btn btn-danger btn-sm delete');
        del.style.margin = "0 5px";
        del.innerText = "Delete"

        config.appendChild(edit);
        config.appendChild(del);
        

        let row = document.createElement('tr');

        row.appendChild(no);
        row.appendChild(nama);
        row.appendChild(jurusan);
        row.appendChild(fakultas);
        row.appendChild(config);

        table.appendChild(row);
    }
}


/* data dummy */
let M1 = new Mahasiswa("Supriyanto", "Agroekoteknologi", "Fakultas Pertanian")
let M2 = new Mahasiswa("Susanto", "Peternakan", "Fakultas Peternakan")
let M3 = new Mahasiswa("Aristiawan", "Teknik Informatika", "Fakultas Ilmu Komputer")
let M4 = new Mahasiswa("Hermansyah", "Sistem Informasi", "Fakultas Ilmu Komputer")
let M5 = new Mahasiswa("Elvina", "Pendidikan Dokter", "Fakultas Kedokteran")

const mahasiswa = [M1, M2, M3, M4, M5]

updateTable();

/* event */
const add = document.querySelector('.tambahkan')

add.addEventListener('click', function(){
    
    let input = document.querySelectorAll('input')
    for(let inp of input){
        if(inp.value =='') return;
    }

    let newMhs = new Mahasiswa(input[0].value, input[1].value, input[2].value)
    mahasiswa.push(newMhs);
    
    table.innerHTML = ''
    updateTable();
})


const edit = document.querySelectorAll(".edit")

for(let i = 0; i < mahasiswa.length; i++){
    edit[0].addEventListener('click', function(){

    })
}

const del = document.querySelectorAll(".delete")
const config = document.querySelectorAll(".config")

for(let i = 0; i < mahasiswa.length; i++){
    del[i].addEventListener('click', function(){
        mahasiswa.splice(config[i].id, 1)
        console.log(mahasiswa);
        table.innerHTML = '';

        updateTable();
        
    })
}







