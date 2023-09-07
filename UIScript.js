export function DrawTable(hunters) {
    const table = document.createElement("table");
    let newCell;
    let count = 1;

    for (let i = 0; i < hunters.length; i++) {
        const newRow = document.createElement("tr");

        if (i > 0) {
            count++;
        }

        let cellText;

        for (let j = 0; j < 13; j++) {
            const newCell = document.createElement("td");

            if (j === 0) {
                cellText = document.createTextNode(count);
            }
            else if (j === 1) {
                cellText = document.createTextNode(hunters[i].name + " " + hunters[i].surname)
            }
            else if (j === 2) {
                cellText = document.createTextNode(hunters[i].age);
            }
            else if (j === 3) {
                cellText = document.createTextNode(hunters[i].gender);
            }
            else if (j === 4) {
                cellText = document.createTextNode("Сила " + hunters[i].characterStat.strength);
            }
            else if (j === 5) {
                cellText = document.createTextNode("Внимательность " + hunters[i].characterStat.attentivenes);
            }
            else if (j === 6) {
                cellText = document.createTextNode("Интеллект " + hunters[i].characterStat.intellegence);
            }
            else if (j === 7) {
                cellText = document.createTextNode("Выживаемость " + hunters[i].characterStat.survivalSkill);
            }
            else if (j === 8) {
                cellText = document.createTextNode("Общие знания " + hunters[i].characterStat.totalKnowledge);
            }
            else if (j === 9) {
                cellText = document.createTextNode("Технические знания " + hunters[i].characterStat.technicalKnowledge);
            }
            else if (j === 10) {
                cellText = document.createTextNode("Магическая энергия " + hunters[i].characterStat.magicEnergy);
            }
            else if (j === 11) {
                cellText = document.createTextNode("Сила воли " + hunters[i].characterStat.willPower);
            }
            else {
                cellText = document.createTextNode(hunters[i].department.name);
            }

            newCell.appendChild(cellText);
            newRow.appendChild(newCell);
        }

        table.appendChild(newRow);
    }

    document.body.appendChild(table);
    table.setAttribute("border", 2);
}