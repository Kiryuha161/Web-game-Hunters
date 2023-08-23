//тест
function GetRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function GetName(lang, gender) {
    let nameList;

    if (lang === "rus") {
        if (gender === "male") {
            nameList = ["Александр", "Иван", "Константин"];
        }
        else {
            nameList = ["Александра", "Ирина", "Кристина"];
        }
    }

    if (lang === "foreign") {
        if (gender === "male") {
            nameList = ["Алекс", "Томас", "Кевин"];
        }
        else {
            nameList = ["Алекса", "Кейли", "Кристи"];
        }
    }

    let name = nameList[GetRandomNumber(0, nameList.length)];
    
    return name;
}

function GetSurname(lang, gender) {
    let surnameList;

    if (lang === "rus") {
        if (gender === "male") {
            surnameList = ["Александров", "Иванов", "Константинов"];
        }
        else {
            surnameList = ["Александрова", "Иринина", "Кристинина"];
        }
    }

    if (lang === "foreign") {
        surnameList = ["Болдуин", "Шелби", "Костнер"];
    }

    let surname = surnameList[GetRandomNumber(0, surnameList.length)];
 
    return surname;
}

window.onload = function () {
    class Character {
        constructor() {
            if (this.constructor === Character) {
                throw new Error("Вы не можете вывызывать абстрактный класс");
            }
        }
    }
    class Hunter extends Character {
        constructor(name, surname, age, department) {
            super();
            this.type = "Человек";
            this.activity = "Охотник";
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.department = department;
        }
    }
    let hunters = [new Hunter(GetName("rus", "male"), GetSurname("rus", "male"), 32, "Следователь"), new Hunter(GetName("rus", "female"), GetSurname("rus", "female"), 25, "Военный охотник"), new Hunter(GetName("foreign", "male"), GetSurname("foreign", "male"), 32, "Следователь"), new Hunter(GetName("foreign", "female"), GetSurname("foreign", "female"), 25, "Военный охотник")];


    function DrawTable() {
        const table = document.createElement("table");
        let newCell;

        for (let i = 0; i < hunters.length; i++) {
            const newRow = document.createElement("tr");

            for (let j = 0; j < 2; j++) {
                const newCell = document.createElement("td");

                if (j === 0) {
                    cellText = document.createTextNode(hunters[i].name + " " + hunters[i].surname)
                }
                else {
                    cellText = document.createTextNode(hunters[i].department);
                }

                newCell.appendChild(cellText);
                newRow.appendChild(newCell);
            }

            table.appendChild(newRow);
        }

        document.body.appendChild(table);
        table.setAttribute("border", 2);
    }

    DrawTable();
}




