var UIScript = /** @class */ (function () {
    function UIScript() {
    }
    UIScript.DrawTable = function (hunters) {
        var table = document.createElement("table");
        var count = 1;
        for (var i = 0; i < hunters.length; i++) {
            var newRow = document.createElement("tr");
            if (i > 0) {
                count++;
            }
            var cellText = void 0;
            for (var j = 0; j < 13; j++) {
                var newCell = document.createElement("td");
                if (j === 0) {
                    cellText = document.createTextNode(count.toString());
                }
                else if (j === 1) {
                    cellText = document.createTextNode(hunters[i].GetInfo("name") + " " + hunters[i].GetInfo("surname"));
                }
                else if (j === 2) {
                    cellText = document.createTextNode(hunters[i].GetInfo("age").toString());
                }
                else if (j === 3) {
                    cellText = document.createTextNode(hunters[i].GetInfo("gender").toString());
                }
                else if (j === 4) {
                    cellText = document.createTextNode("Сила " + hunters[i].GetAccessToStats().GetStats("strength"));
                }
                else if (j === 5) {
                    cellText = document.createTextNode("Внимательность " + hunters[i].GetAccessToStats().GetStats("attentivenes"));
                }
                else if (j === 6) {
                    cellText = document.createTextNode("Интеллект " + hunters[i].GetAccessToStats().GetStats("intellegence"));
                }
                else if (j === 7) {
                    cellText = document.createTextNode("Выживаемость " + hunters[i].GetAccessToStats().GetStats("survivalSkill"));
                }
                else if (j === 8) {
                    cellText = document.createTextNode("Общие знания " + hunters[i].GetAccessToStats().GetStats("totalKnowledge"));
                }
                else if (j === 9) {
                    cellText = document.createTextNode("Технические знания " + hunters[i].GetAccessToStats().GetStats("technicalKnowledge"));
                }
                else if (j === 10) {
                    cellText = document.createTextNode("Магическая энергия " + hunters[i].GetAccessToStats().GetStats("magicEnergy"));
                }
                else if (j === 11) {
                    cellText = document.createTextNode("Сила воли " + hunters[i].GetAccessToStats().GetStats("willPower"));
                }
                else {
                    cellText = document.createTextNode(hunters[i].GetInfo("department").toString());
                }
                newCell.appendChild(cellText);
                newRow.appendChild(newCell);
            }
            table.appendChild(newRow);
        }
        document.body.appendChild(table);
        table.setAttribute("border", String(2));
    };
    UIScript.DisplayDate = function (date) {
        var dateText = document.querySelector(".date");
        if (dateText !== null) {
            var formattedDate = date.slice(0, 10); // Извлекаем только год, месяц и день
            dateText.innerHTML = formattedDate;
        }
    };
    UIScript.DrawTableInContentMessage = function (hunters) {
        var contentText = document.querySelector(".content");
        var tableWrapper = document.createElement("div");
        UIScript.DrawTable(hunters);
        var table = document.querySelector("table");
        if (table !== null) {
            var existingTable = tableWrapper.querySelector("table");
            if (existingTable !== null) {
                tableWrapper.removeChild(existingTable);
            }
            tableWrapper.appendChild(table);
        }
        tableWrapper.style.overflow = "auto"; // Добавляем прокрутку
        tableWrapper.style.maxHeight = "425px";
        if (contentText !== null) {
            contentText.innerHTML = "";
            contentText.appendChild(tableWrapper);
        }
        return contentText.innerHTML;
    };
    UIScript.DisplayNewMessage = function (text, id, contentText, hunters) {
        var messageText = document.querySelector(".list-message");
        var listItem = document.createElement("li");
        listItem.innerHTML = text;
        listItem.setAttribute("class", "new-message");
        listItem.setAttribute("id", id.toString());
        var tableIsOpen = false;
        var table;
        listItem.addEventListener('click', function () {
            if (hunters) {
                if (!tableIsOpen) {
                    if (!table) {
                        table = UIScript.DrawTableInContentMessage(hunters);
                    }
                    UIScript.DisplayNewTextMessage(table, id);
                    tableIsOpen = true;
                }
                else {
                    UIScript.DisplayNewTextMessage("", id);
                    tableIsOpen = false;
                }
            }
            else {
                tableIsOpen = false;
                UIScript.DisplayNewTextMessage(contentText, id);
            }
            this.style.backgroundColor = "black";
        });
        messageText.appendChild(listItem);
        messageText.insertBefore(listItem, messageText.firstChild);
        messageText.style.maxHeight = "400px";
        messageText.style.overflow = "auto";
    };
    UIScript.DisplayNewTextMessage = function (contentText, id) {
        var messageText = document.querySelector(".content");
        if (messageText !== null) {
            messageText.innerHTML = "";
            var listItem = document.createElement("p");
            if (listItem !== null) {
                listItem.innerHTML = contentText;
                listItem.setAttribute("id", "message-".concat(id));
                listItem.setAttribute("class", "content-text");
                messageText.appendChild(listItem);
            }
        }
    };
    return UIScript;
}());
export { UIScript };
//# sourceMappingURL=UIScript.js.map