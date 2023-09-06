export function GetRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function GetName(lang, gender) {
    let nameList;

    if (lang === "rus") {
        if (gender === "male") {
            nameList = ["Александр", "Борис", "Валентин", "Иван", "Константин"];
        }
        else {
            nameList = ["Александра", "Валентина", "Галина", "Ирина", "Кристина"];
        }
    }

    if (lang === "foreign") {
        if (gender === "male") {
            nameList = ["Алекс", "Боб", "Грегори", "Томас", "Кевин"];
        }
        else {
            nameList = ["Алекса", "Алиса", "Джесси", "Кейли", "Кристи"];
        }
    }

    let name = nameList[GetRandomNumber(0, nameList.length)];

    return name;
}

export function GetSurname(lang, gender) {
    let surnameList;

    if (lang === "rus") {
        if (gender === "male") {
            surnameList = ["Александров", "Баранов", "Иванов", "Константинов"];
        }
        else {
            surnameList = ["Александрова", "Баранова", "Иринина", "Кристинина"];
        }
    }

    if (lang === "foreign") {
        surnameList = ["Андерс", "Болдуин", "Шелби", "Костнер"];
    }

    let surname = surnameList[GetRandomNumber(0, surnameList.length)];

    return surname;
}