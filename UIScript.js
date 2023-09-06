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

        for (let j = 0; j < 5; j++) {
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