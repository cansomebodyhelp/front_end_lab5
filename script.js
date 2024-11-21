function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById('dataForm');

    if (form.checkValidity()) {
        const fullName = document.getElementById('fullName').value;
        const idCard = document.getElementById('idCard').value;
        const faculty = document.getElementById('faculty').value;
        const birthDate = document.getElementById('birthDate').value;
        const address = document.getElementById('address').value;
        const email = document.getElementById('email').value;

        document.getElementById('outputFullName').textContent = fullName;
        document.getElementById('outputIdCard').textContent = idCard;
        document.getElementById('outputFaculty').textContent = faculty;
        document.getElementById('outputBirthDate').textContent = birthDate;
        document.getElementById('outputAddress').textContent = address;
        document.getElementById('outputEmail').textContent = email;
    } else {
        alert('Заповніть усі поля');
    }
}

document.getElementById('email').addEventListener('input', function() {
    var email = this.value;
    if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/)) {
        this.setCustomValidity('Email повинен закінчуватися на .com');
    } else {
        this.setCustomValidity('');
    }
});

const table = document.getElementById('table');
let counter = 1;


for (let i = 0; i < 6; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 6; j++) {
        const cell = row.insertCell();
        cell.textContent = counter;
        counter++;

        
        cell.addEventListener('mouseover', function() {
            if (cell.textContent == '4') {
                cell.style.backgroundColor = getRandomColor();
            }
        });

        
        cell.addEventListener('click', function() {
            if (cell.textContent == '4') {
                const color = document.getElementById('colorPicker').value;
                cell.style.backgroundColor = color;
            }
        });

    
        cell.addEventListener('dblclick', function() {
            if (cell.textContent == '4') {
                changeDiagonalColors();
            }
        });
    }
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function changeDiagonalColors() {
    for (let i = 0; i < 6; i++) {
        const cell = table.rows[i].cells[5 - i];
        cell.style.backgroundColor = getRandomColor();
    }
}