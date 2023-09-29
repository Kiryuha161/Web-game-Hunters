import { Hunter } from './Hunter'

export class UIScript {
    public static DrawTable(hunters: Hunter[]): void {
        const table = document.createElement("table");
        let count: number = 1;

        for (let i = 0; i < hunters.length; i++) {
            const newRow = document.createElement("tr");

            if (i > 0) {
                count++;
            }

            let cellText;

            for (let j = 0; j < 13; j++) {
                const newCell = document.createElement("td");

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
    }

    public static DisplayDate(date): void {
        const dateText = document.querySelector(".date");
        if (dateText !== null) {
            const formattedDate = date.slice(0, 10); // Извлекаем только год, месяц и день
            dateText.innerHTML = formattedDate;
        }
    }

    public static DrawTableInContentMessage(hunters: Hunter[]) {
        let contentText = document.querySelector(".content");
        let tableWrapper = document.createElement("div");

        UIScript.DrawTable(hunters);
        let table = document.querySelector("table");
        if (table !== null) {
            let existingTable = tableWrapper.querySelector("table");
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
    }

    public static DisplayNewMessage(text: string, id: number, contentText: string): void;
    public static DisplayNewMessage(text: string, id: number, contentText: string, hunters: Hunter[]): void;

    public static DisplayNewMessage(text: string, id: number, contentText: string, hunters?: Hunter[]): void {
        let messageText = document.querySelector(".list-message") as HTMLElement;
        let listItem = document.createElement("li");
        listItem.innerHTML = text;
        listItem.setAttribute("class", "new-message");
        listItem.setAttribute("id", id.toString());

        let tableIsOpen: boolean = false;
        let table;

        listItem.addEventListener('click', function () {
            if (hunters) {
                if (!tableIsOpen) {
                    if (!table) {
                        table = UIScript.DrawTableInContentMessage(hunters);
                    }
                    UIScript.DisplayNewTextMessage(table, id);
                    tableIsOpen = true;
                } else {
                    UIScript.DisplayNewTextMessage("", id);
                    tableIsOpen = false;
                }
            } else {
                tableIsOpen = false;
                UIScript.DisplayNewTextMessage(contentText, id);
            }

            this.style.backgroundColor = "black";
        });
        messageText.appendChild(listItem);
        messageText.insertBefore(listItem, messageText.firstChild);

        messageText.style.maxHeight = "400px";
        messageText.style.overflow = "auto";
    }


    public static DisplayNewTextMessage(contentText, id) {
        let messageText = document.querySelector(".content");
    
        if (messageText !== null) {
            messageText.innerHTML = "";
            let listItem = document.createElement("p");
            
            if (listItem !== null) {
                listItem.innerHTML = contentText;
                listItem.setAttribute("id", `message-${id}`);
                listItem.setAttribute("class", "content-text");
                messageText.appendChild(listItem);
            }
        }
    }
}
