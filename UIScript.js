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

export function DisplayDate(date) {
    const dateText = document.querySelector(".date");
    const formattedDate = date.slice(0, 10); // Извлекаем только год, месяц и день
    dateText.textContent = formattedDate;
}

export function DrawTableInContentMessage(hunters) {
    const contentText = document.querySelector(".content");
    const tableWrapper = document.createElement("div");

    DrawTable(hunters);
    const table = document.querySelector("table");
    tableWrapper.appendChild(table);

    tableWrapper.style.overflow = "auto"; // Добавляем прокрутку
    tableWrapper.style.maxHeight = "425px";

    contentText.innerHTML = "";
    contentText.appendChild(tableWrapper);
}

export function DisplayNewMessage(text, id, contentText, messageType, hunters) {
    const messageText = document.querySelector(".list-message");
    const listItem = document.createElement("li");
    listItem.textContent = text;
    listItem.setAttribute("class", "new-message");
    listItem.setAttribute("id", id.toString());
    listItem.setAttribute("data-message-type", messageType);

    listItem.addEventListener('click', function () {
        if (messageType === "table") {
            const table = DrawTableInContentMessage(hunters);
            table.setAttribute("data-message-type", "table");
        } else {
            DisplayNewTextMessage(contentText, id);
        }
    
    });

    messageText.appendChild(listItem);
    messageText.insertBefore(listItem, messageText.firstChild);

}

export function DisplayNewTextMessage(text, id) {
    const messageText = document.querySelector(".content");
    const existingListItem = document.getElementById(`message-${id}`);

    messageText.innerHTML = "";
        const listItem = document.createElement("p");
        listItem.textContent = text;
        listItem.setAttribute("id", `message-${id}`);
        listItem.setAttribute("class", "content-text");

        messageText.appendChild(listItem);
}


