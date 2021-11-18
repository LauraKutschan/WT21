let vorname = document.getElementById('vorname');
let nachname = document.getElementById('nachname');
let email = document.getElementById('email');
let ipadresse = document.getElementById('ipadresse');
let tbody = document.getElementById('tbody');
let valid = true;

function check() {

    if (vorname.value === "") {
        vorname.classList.add('is-invalid');
        console.log('invalid');
        valid = false;
    }
    else{
        vorname.classList.remove('is-invalid');
    }

    if (nachname.value === "") {
        nachname.classList.add('is-invalid');
        valid = false;
    }
    else{
        nachname.classList.remove('is-invalid');
    }

    if (email.value === "" || !email.value.match("@")) {
        email.classList.add('is-invalid');
        valid = false;
    }
    else{
        email.classList.remove('is-invalid');
    }

    if (ipadresse.value === "") {
        ipadresse.classList.add('is-invalid');
        valid = false;
    }
    else{
        ipadresse.classList.remove('is-invalid');
    }

    if(document.getElementsByClassName('is-invalid').length == 0)
    {
        valid = true;
    }

}

function add()
{
    check();

    if(valid)
    {
        let new_row = document.createElement('tr');
        let new_vorname = document.createElement('td');
        let new_nachname = document.createElement('td');
        let new_email = document.createElement('td');
        let new_ipadresse = document.createElement('td');
        let new_leer = document.createElement('td');

        new_vorname.innerHTML = vorname.value;
        new_nachname.innerHTML = nachname.value;
        new_email.innerHTML = email.value;
        new_ipadresse.innerHTML = ipadresse.value;

        new_row.appendChild(new_vorname);
        new_row.appendChild(new_nachname);
        new_row.appendChild(new_email);
        new_row.appendChild(new_ipadresse);
        new_row.appendChild(new_leer);

        //tbody.appendChild(new_row);

        //let create = document.getElementById('create');

        //tbody.insertBefore(new_row, create);

        let listitems = document.getElementsByTagName('tr');
        tbody.insertBefore(new_row, listing(listitems, nachname.value, vorname.value));

        nachname.value = null;
        vorname.value = null;
        email.value = null;
        ipadresse.value = null;
    }
}

function listing(listitems, nachname, vorname)
{
    for(let i=1; i<listitems.length-1; i++)
    {
        let tds = listitems[i].getElementsByTagName('td');

        console.log(tds[1].innerText.localeCompare(nachname))
        if(tds[1].innerText.localeCompare(nachname)==1)
        {
            return listitems[i];
        }
        else if(tds[1].innerText.localeCompare(nachname)==0)
        {
            if(tds[0].innerText.localeCompare(vorname)==1)
            {
                return listitems[i];
            }
        }
    }
    return listitems[listitems.length-1];
}