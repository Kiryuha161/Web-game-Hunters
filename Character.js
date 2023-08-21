window.onload = function () {
    class Character {
        constructor() {
            if (this.constructor === Character) {
                throw new Error("�� �� ������ ���������� ����������� �����");
            }
        }
    }
    class Hunter extends Character {
        constructor(name, surname, age, department) {
            super();
            this.type = "�������";
            this.activity = "�������";
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.department = department;
        }
    }
    let hunters = [new Hunter("�����", "�����", 32, "�����������"), new Hunter("�����", "�����", 25, "������� �������")];


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