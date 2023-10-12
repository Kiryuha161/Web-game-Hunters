export class Utilits {
    public static GetRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    public static GetFloatRandomNumber(min: number, max: number) {
        const randomFloat = (Math.random() * (max - min) + min);
        const roundFloat = Number(randomFloat.toFixed(2));
        
        return roundFloat;
    }

    public static GetName(lang: string, gender: string): string {
        let nameList: string[] = [];

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

        let name: string = nameList[Utilits.GetRandomNumber(0, nameList.length)];
        return name;
    }

    public static GetSurname(lang: string, gender: string): string {
        let surnameList: string[] = [];

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

        let surname: string = surnameList[Utilits.GetRandomNumber(0, surnameList.length)];

        return surname;
    }
}