var Utilits = /** @class */ (function () {
    function Utilits() {
    }
    Utilits.GetRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    Utilits.GetFloatRandomNumber = function (min, max) {
        var randomFloat = (Math.random() * (max - min) + min);
        var roundFloat = Number(randomFloat.toFixed(2));
        return roundFloat;
    };
    Utilits.GetName = function (lang, gender) {
        var nameList = [];
        if (lang === "rus") {
            if (gender === "male") {
                nameList = ["Александр", "Алексей", "Андрей", "Антон", "Борис", "Владимир", "Валентин", "Геннадий", "Григорий", "Георгий", "Иван", "Константин"];
            }
            else {
                nameList = ["Александра", "Аксинья", "Валентина", "Вероника", "Галина", "Евгения", "Екатерина", "Елизавета", "Ирина", "Инна", "Инга", "Кристина"];
            }
        }
        if (lang === "foreign") {
            if (gender === "male") {
                nameList = ["Алекс", "Боб", "Грегори", "Денис", "Джон", "Дерек", "Кевин", "Леонард", "Майкл", "Николас", "Томас", "Кевин"];
            }
            else {
                nameList = ["Алекса", "Алиса", "Бритни", "Джесси", "Кейли", "Кристи", "Моника", "Натали", "Ронда", "Рейчел", "Эрика", "Фиби"];
            }
        }
        var name = nameList[Utilits.GetRandomNumber(0, nameList.length)];
        return name;
    };
    Utilits.GetSurname = function (lang, gender) {
        var surnameList = [];
        if (lang === "rus") {
            if (gender === "male") {
                surnameList = ["Александров", "Алексеев", "Андреев", "Антонов", "Борисов", "Баранов", "Валентинов", "Григорьев", "Иванов", "Петров", "Иванов", "Константинов"];
            }
            else {
                surnameList = ["Александрова", "Алексеева", "Андреева", "Антонова", "Борисова", "Валентонова", "Григорьева", "Иванова", "Петрова", "Константинова", "Баранова", "Иринина", "Кристинина"];
            }
        }
        if (lang === "foreign") {
            surnameList = ["Андерс", "Болдуин", "Джонсон", "Костнер", "Кокс", "Спирс", "Смитт", "Шелби", "Хоган", "Пэрри", "Фокс", "Энистон"];
        }
        var surname = surnameList[Utilits.GetRandomNumber(0, surnameList.length)];
        return surname;
    };
    return Utilits;
}());
export { Utilits };
//# sourceMappingURL=Utilits.js.map