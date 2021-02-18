

"use strict";
(function(G) {
    //Globals
    var i = 0,
        isShuffled = false;

    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var shuffle = function(a) {
        var j, x, i;

        for (i = a.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }

        isShuffled = true;
    };

    landing_notifiers.stat = {
        visitors: getRandomInt(1000, 2000),
        online: getRandomInt(50, 120),
        sales: getRandomInt(90, 120)
    };

    landing_notifiers.RU = {
        cities: ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Нижний Новгород", "Казань", "Челябинск", "Омск", "Самара", "Ростов-на-Дону", "Уфа", "Красноярск", "Пермь", "Воронеж", "Волгоград", "Саратов", "Краснодар", "Тольятти", "Тюмень", "Ижевск", "Барнаул", "Иркутск", "Ульяновск", "Хабаровск", "Владивосток", "Ярославль", "Махачкала", "Томск", "Оренбург", "Новокузнецк", "Кемерово", "Рязань", "Астрахань", "Набережные Челны", "Пенза", "Липецк", "Киров", "Тула", "Чебоксары", "Калининград", "Курск", "Ставрополь", "Магнитогорск", "Тверь", "Иваново", "Брянск", "Севастополь", "Сочи", "Белгород", "Нижний", "Владимир", "Архангельск", "Калуга", "Сургут", "Чита", "Симферополь", "Смоленск", "Волжский", "Курган", "Орёл", "Череповец", "Вологда", "Мурманск", "Саранск", "Якутск", "Тамбов", "Грозный", "Стерлитамак", "Кострома", "Петрозаводск", "Нижневартовск", "Йошкар-Ола", "Новороссийск", "Балашиха", "Таганрог", "Комсомольск"],
        peoples: [
            ["Домаш Вячеслав", "Лагутов Руслан", "Степанков Радислав", "Перешивкин Ростислав", "Кобзев Платон", "Кабанов Игнатий", "Чепурин Николай", "Крымов Изяслав", "Собчак Евгений", "Былинкин Максим", "Архипов Сергей", "Донцов Самсон", "Стаин Владилен", "Лызлов Владислав", "Ягужинский Аристарх", "Фризов Владимир", "Крупнов Дмитрий", "Ябловский Вадим", "Гусенков Самсон", "Панфёров Семён", "Ясинский Павел", "Тетерев Глеб", "Шлыков Николай", "Козлов Илья", "Амалиев Максим", "Паулкин Ефим", "Колганов Герман", "Саламатов Николай", "Сподарев Степан", "Бочкарёв Владимир", "Опекунов Вячеслав", "Телицын Тимофей", "Ямлиханов Андрей", "Малиновский Владислав", "Гребнев Ростислав", "Кузанов Леонид", "Ягфаров Серафим", "Цитников Всеволод", "Владимиров Артём", "Банин Александр", "Капица Кирилл", "Колбин Клавдий", "Володин Зиновий", "Уланов Иван", "Седых Кирилл", "Туровский Лев", "Яснов Ефим", "Москвин ﻿Артем", "Измайлов Герман", "Цыганов Егор", "Голумбовский Дмитрий", "Аничков Кирилл", "Канаш Степан", "Клепахов Дмитрий", "Колесников Анатолий", "Цветков Леонид", "Мишин Ефим", "Борисов Митрофан"],
            ["Иноземцева Надежда", "Тотенкова Регина", "Курдина Эмилия", "Стаина Анна", "Чуличкова Анастасия", "Шеркова Евгения", "Андрюхина Нина", "Катериночкина Анфиса", "Головина Анна", "Чупрова Екатерина", "Холопова Виктория", "Крупина Мария", "Полевщикова Кристина", "Пьянкова Диана", "Буланова Яна", "Цейдлерина Мария", "Щеголева Светлана", "Янкелевич Алина", "Якушевич Наталья", "Фомичева Диана", "Пережогина Виктория", "Ячменькова Василиса", "Рябова Дарья", "Домышева Юлия", "Милова Татьяна", "Шипицына Анна", "Протасова Евгения", "Молодыха Алиса", "Коржева Ксения", "Кузнецова Вероника", "Сукина Алиса", "Перова ﻿Агата", "Коржакова Ольга", "Ёжина Вероника", "Абрамович Валентина", "Крылова Наталья", "Проскуркина Александра", "Терехова Юлия", "Труфанова Варвара", "Батурина Марина", "Васнецова Нина", "Перевалова Надежда", "Рошета Любовь", "Мосякова Татьяна", "Носова Анастасия", "Типалова Юнона", "Колесникова Инесса", "Якуничева Анна", "Левина Евгения", "Агафонова Виктория", "Дуркина Антонина", "Игошина Мария", "Званцова Светлана", "Хлопонина Елена", "Суботина Изабелла", "Дроздова Марфа", "Милютина Изабелла", "Гнусарева Ангелина"]
        ]
    };

    landing_notifiers.RS = {
        cities: ["Београд", "Нови Сад", "Приштина", "Ниш", "Крагујевац", "Суботица", "Панчево", "Зрењанин", "Чачак", "Краљево", "Нови Пазар", "Лесковац", "Смедерево", "Врање", "Ужице", "Ваљево", "Крушевац", "Шабац", "Пожаревац", "Сомбор", "Пирот", "Зајечар", "Кикинда", "Сремска Митровица", "Јагодина", "Вршац", "Лозница"],
        peoples: [
            ["Aleksa", "Aleksandar", "Filip", "Jovan", "Lazar", "Luka", "Marko", "Milos", "Nemanja", "Nikola", "Ognjen", "Stefan", "Uros", "Vuk"],
            ["Ana", "Andela", "Anja", "Iva", "Jana", "Jelena", "Jovana", "Katarina", "Marija", "Masa", "Milica", "Sara", "Sofija", "Teodora"]
        ]
    };

    landing_notifiers.PL = {
        cities: ["Gdynia", "Poznań", "Gduńsk", "Toruń", "Kraków", "Katowice", "Wrocław", "Warszawa", "Olsztyn", "Gliwice", "Szczecin", "Łódź", "Zakopane", "Białystok", "Lublin"],
        peoples: [
            ["Adok", "Aleksy", "Andrzej", "Borys", "Boryslaw", "Bernardyn", "Cezary", "Czeslaw", "Dobieslaw", "Dariusz", "Eugeniusz", "Francizek", "Fredek", "Gerek", "Izak", "Jozef", "Janek", "Kajetan", "Piotr", "Patryk", "Stanislaw", "Vincenty"],
            ["Anka", "Adelajda", "Amelja", "Bohdana", "Cecylja", "Celina", "Danica", "Elzbieta", "Ewa", "Franciszka", "Felka", "Gizela", "Hilaria", "Izabel", "Jadwiga", "Katrin", "Krystka", "Laurka", "Lucja", "Mila", "Mela", "Natka", "Truda"]
        ]
    };

    landing_notifiers.UA = {
        cities: ["Киев", "Харьков", "Одесса", "Днепр", "Запорожье", "Львов", "Кривой Рог", "Николаев", "Мариуполь", "Винница", "Керчь", "Житомир", "Сумы", "Хмельницкий", "Ужгород", "Славянск", "Бердянск", "Павлоград", "Кременчуг", "Мелитополь", "Кривой Рог"],
        peoples: [
            ["Домаш Вячеслав", "Лагутов Руслан", "Степанков Радислав", "Перешивкин Ростислав", "Кобзев Платон", "Кабанов Игнатий", "Чепурин Николай", "Крымов Изяслав", "Собчак Евгений", "Былинкин Максим", "Архипов Сергей", "Донцов Самсон", "Стаин Владилен", "Лызлов Владислав", "Ягужинский Аристарх", "Фризов Владимир", "Крупнов Дмитрий", "Ябловский Вадим", "Гусенков Самсон", "Панфёров Семён", "Ясинский Павел", "Тетерев Глеб", "Шлыков Николай", "Козлов Илья", "Амалиев Максим", "Паулкин Ефим", "Колганов Герман", "Саламатов Николай", "Сподарев Степан", "Бочкарёв Владимир", "Опекунов Вячеслав", "Телицын Тимофей", "Ямлиханов Андрей", "Малиновский Владислав", "Гребнев Ростислав", "Кузанов Леонид", "Ягфаров Серафим", "Цитников Всеволод", "Владимиров Артём", "Банин Александр", "Капица Кирилл", "Колбин Клавдий", "Володин Зиновий", "Уланов Иван", "Седых Кирилл", "Туровский Лев", "Яснов Ефим", "Москвин ﻿Артем", "Измайлов Герман", "Цыганов Егор", "Голумбовский Дмитрий", "Аничков Кирилл", "Канаш Степан", "Клепахов Дмитрий", "Колесников Анатолий", "Цветков Леонид", "Мишин Ефим", "Борисов Митрофан"],
            ["Иноземцева Надежда", "Тотенкова Регина", "Курдина Эмилия", "Стаина Анна", "Чуличкова Анастасия", "Шеркова Евгения", "Андрюхина Нина", "Катериночкина Анфиса", "Головина Анна", "Чупрова Екатерина", "Холопова Виктория", "Крупина Мария", "Полевщикова Кристина", "Пьянкова Диана", "Буланова Яна", "Цейдлерина Мария", "Щеголева Светлана", "Янкелевич Алина", "Якушевич Наталья", "Фомичева Диана", "Пережогина Виктория", "Ячменькова Василиса", "Рябова Дарья", "Домышева Юлия", "Милова Татьяна", "Шипицына Анна", "Протасова Евгения", "Молодыха Алиса", "Коржева Ксения", "Кузнецова Вероника", "Сукина Алиса", "Перова ﻿Агата", "Коржакова Ольга", "Ёжина Вероника", "Абрамович Валентина", "Крылова Наталья", "Проскуркина Александра", "Терехова Юлия", "Труфанова Варвара", "Батурина Марина", "Васнецова Нина", "Перевалова Надежда", "Рошета Любовь", "Мосякова Татьяна", "Носова Анастасия", "Типалова Юнона", "Колесникова Инесса", "Якуничева Анна", "Левина Евгения", "Агафонова Виктория", "Дуркина Антонина", "Игошина Мария", "Званцова Светлана", "Хлопонина Елена", "Суботина Изабелла", "Дроздова Марфа", "Милютина Изабелла", "Гнусарева Ангелина"]
        ]
    };

    landing_notifiers.ES = {
        cities: ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza", "Málaga", "Las Palmas de Gran Canaria", "Bilbao", "Murcia", "Valladolid", "Córdoba", "Palma de Mallorca", "Vigo", "Alicante", "Gijón", "Hospital et de Llobregat", "Granada", "La Coruña", "Vitoria-Gasteiz", "Badalona", "Santa Cruzde (Tenerife)", "Oviedo", "Móstoles", "Elche", "Sabadell", "Santander", "Jérez de la Frontera", "San Sebastián", "Leganés", "Almería", "Cartagena", "Tarrasa", "Alcaláde Henares", "Fuenlabrada", "Pamplona", "Burgos", "Salamanca", "Albacete", "León", "Getafe", "Alcorcón", "Cádiz", "Huelva", "Castellón de la Plana", "Badajoz", "Logroño", "Santa Coloma de Gramanet", "La Laguna", "Lleida"],
        peoples: [
            ["Santiago", "Matías", "Sebastián", "Mateo", "Nicolás", "Alejandro", "Samuel", "Diego", "Daniel", "Benjamín", "Leonardo", "Tomás", "Joaquín", "Gabriel", "Emiliano", "Martín", "Lucas", "Agustín", "David", "Iker", "Juan José", "Maximiliano", "Adrián", "Emmanuel", "Felipe", "Juan Pablo", "Andrés", "Jerónimo/Gerónimo", "Ángel", "Rodrigo", "Bruno", "Alexander", "Thiago", "Pablo", "Ian", "Isaac", "Miguel Ángel", "Fernando", "Javier", "Emilio", "Juan Sebastián", "Alonso", "Aarón", "Rafael", "Esteban", "Juan Diego", "Axel", "Francisco", "Bautista", "Carlos", "Dylan", "Juan", "Julián", "Manuel", "Facundo", "Gael", "Valentino", "Damián", "Santino", "Vicente", "Máximo", "Christopher", "Jorge", "Luciano", "Dante", "Alan", "Cristóbal", "Jesús", "Lorenzo", "Alex", "Juan Esteban", "Patricio", "Pedro", "Juan Manuel", "Matthew", "Antonio", "Iván", "José", "Hugo", "Josué", "Lautaro", "Diego Alejandro", "Miguel", "Franco", "Kevin", "Luis", "Simón", "Elías", "Caleb", "Eduardo", "Ricardo", "Juan David", "Marcos", "Salvador", "Jacobo", "Juan Ignacio", "Camilo", "Mauricio", "Juan Felipe", "Gonzalo"],
            ["Sofía", "Isabella", "Valentina", "Camila", "Valeria", "Luciana", "Ximena", "Mariana", "María", "Victoria", "Martina", "Gabriela", "Sara", "Daniela", "Samantha", "Natalia", "Emma", "Renata", "Lucia", "Andrea", "Regina", "Mia", "Catalina", "Antonella", "Emilia", "Zoe", "Julieta", "Alejandra", "Salome", "Paula", "Maria", "Nicole", "María", "Fernanda", "Emily", "Ana", "Amanda", "Abril", "Allison", "Elena", "Danna", "Ariana", "Violeta", "Antonia", "Ana", "Agustina", "Olivia", "Jazmín", "Romina", "Rafaella", "Julia", "Abigail", "Fabiana", "Laura", "Constanza", "Alma", "Guadalupe", "Valery", "Miranda", "Juliana", "Alexa", "Elisa", "Luna", "Carla", "Ivanna", "Monserrat", "Michelle", "María", "Ashley", "Isabel", "Micaela", "Elizabeth", "Rebeca", "Melanie", "Manuela", "Noa", "Bianca", "Clara", "Ana", "Paulina", "Carolina", "Florencia", "Josefina", "Paola", "Fiorella", "María", "Melissa", "Maite", "Juana", "Vanessa", "Alicia", "Amy", "Alessandra", "Amelia", "Kiara", "Adriana", "Isidora", "María", "Magdalena", "Amalia"]
        ]
    };

    landing_notifiers.PT = {
        cities: ["Albufeira", "Aveiro", "Braga", "Bragança", "Cascais", "Coimbra", "Evora", "Faro", "Fatima", "Guarda", "Guimaraes", "Lagos", "Lisbon", "Obidos", "Olhao", "Peniche", "Porto", "Sagres", "Setubal", "Silves", "Sintra", "Tavira", "Tomar", "Viana do Castelo", "Viseu"],
        peoples: [
            ["João", "Martim", "Rodrigo", "Santiago", "Francisco", "Afonso", "Tomas", "Miguel", "Guilherme", "Gabriel", "Duarte", "Gonçalo", "Pedro", "Tiago", "Rafael", "Diogo", "Lourenço", "Lucas", "Dinis", "Salvador", "Vicente", "Gustavo", "Simão", "José", "David"],
            ["Maria", "Leonor", "Matilde", "Beatriz", "Carolina", "Mariana", "Ana", "Ines", "Margarida", "Sofia", "Lara", "Laura", "Francisca", "Joana", "Alice", "Clara", "Diana", "Luana", "Madalena", "Mafalda", "Bianca", "Mara", "Constança", "Sara", "Iris"]
        ]
    };

    landing_notifiers.RO = {
        cities: ["Albufeira", "Aveiro", "Braga", "Bragança", "Cascais", "Coimbra", "Evora", "Faro", "Fatima", "Guarda", "Guimaraes", "Lagos", "Lisbon", "Obidos", "Olhao", "Peniche", "Porto", "Sagres", "Setubal", "Silves", "Sintra", "Tavira", "Tomar", "Viana do Castelo", "Viseu"],
        peoples: [
            ["Andrei", "Alexandru", "Ionut", "Gabriel", "Stefan", "Cristian", "Mihai", "David", "Daniel", "Marian", "Florin", "Darius", "Denis", "Constantin", "Robert", "Adrian", "Ioan", "Sebastian", "Luca", "George", "Eduard", "Mario", "Matei", "Bogdan", "Razvan", "Rares", "Valentin", "Cosmin", "Marius", "Nicolae", "Raul", "Catalin", "Iulian", "Vlad", "Tudor", "Vasile", "Alin", "Dragos", "Antonio", "Claudiu", "Paul", "Emanuel", "Radu", "Teodor", "Alex", "Petru", "Nicolas", "Lucian", "Laurentiu", "Dumitru"],
            ["Andreea", "Ana", "Maria", "Diana", "Teodora", "Ioana", "Anna", "Mihaela", "Monica", "Cristina", "Iulia", "Bianca", "Alexandra", "Anca", "Andra", "Denisa", "Raluca", "Marie", "Adelina", "Alina", "Krisztina", "Georgiana", "Ionela", "Dana", "Ileana", "gabriela", "Clara", "Roxana", "Sabina", "Ana-Maria", "elena", "Réka", "Geanina", "Adela", "Patricia", "Alice", "ale", "Laura", "Bea", "Silvia", "Anne", "Ana Maria", "Lavinia", "Madalina", "Mada", "Magda", "Orsi", "Daria", "Mara", "Beatrice", "Miruna", "Allexia", "Daniela", "Brigitta", "Adriana", "Ralu", "Ada", "Timi", "Tímea", "Anita", "Lidia", "Livia", "Hannah", "Oana", "Ramona", "Irina", "Oany", "Carmen", "Emese", "Emma", "Sara", "Andrea", "vanesa", "Cry", "Gabryela", "Alya Chawakh", "Georgiana-Maria", "Camille", "Theo", "Dragan alexandra", "Dumitran daniela", "Kinga", "Michelle", "rodica", "Mariuca", "Anastasiia", "Adella", "Felicia", "Homy", "Andrusca", "Vicky", "Manuela", "Enikö", "Alessandra", "Ruxandra", "Hanni", "Penny", "Ioyo", "Ildikó", "Nicole"]
        ]
    };

    landing_notifiers.DE = {
        cities: ["Berlin", "Magdeburg", "Offenbach am Main", "Karlsruhe", "Hessen", "Dresden", "Stuttgart", "Schwerin", "Mainz", "Münich", "Nassau", "Nürnberg", "Paderborn", "Hamburg", "Heidelberg"],
        peoples: [
            ["Friedrich Hartmann", "Frank Neumann", "Hugo Schultz", "Hans Zimmermann", "Joseph Alman", "Adrian Ballweg", "Albert Richter", "Bastian Steinberg", "Claus Baumberger", "Conrad Fischer", "Daniel Hofmann", "Eric Schmitz", "Felix Meier", "Gerhardt Fuchs", "Heinz Krauze"],
            ["Agnes Jung", "Amanda Heinrich", "Anne Pohl", "Caroline Sauer", "Christel Roth", "Debora Blumer", "Elisa Freundenstein", "Eva Elser", "Frieda Grau", "Gretchen Helwig", "Herta Kielholz", "Ida Oppert", "Irma Pfenning", "Magda Platz", "Helga Rehn"]
        ]
    };

    landing_notifiers.TR = {
        cities: ["Bursa", "Adana", "Gaziantep", "Konya", "Cankaya", "Antalya"],
        peoples: [
            ["Burak Kaya", "Mehmet Demir", "Emre Şahin", "Ahmet Çelik", "Mustafa Seran", "Furkan Ozturk", "Onur Ozdemir", "Kaan Yilmiz", "Hasan Sezgin", "Eren Aydin", "Hakan Caker", "Osman Oyal", "Batuhan Kurt", "Ömer Şener", "Muhammed Emanetoğlu"],
            ["Merve Seven", "Zeynep Korkmaz", "Gizem Yiğit", "Ezgi Tevetoğlu", "Gamze Muhtar", "Kübra Pekkan", "Betül Aksu", "Özge Gömeç", "Damla Kader", "Ýrem Kervan", "Ceyda Ortaç", "Melisa Erbil", "Zehra Değirmencioğlu", "Begüm Tatliparmak", "Ayþenur Senturk"]
        ]
    };

    landing_notifiers.KZ = {
        cities: ["Алма-Ата", "Астана", "Шымкент", "Караганда", "Актобе", "Тараз", "Павлодар", "Усть-Каменогорск", "Семей", "Кызылорда", "Уральск", "Костанай", "Атырау", "Балхаш"],
        peoples: [
            ["Алихан", "Нурасыл", "Мирас", "Алдияр", "Диас", "Арсен", "Амир", "Ислам", "Максим", "Дамир", "Мадияр", "Азамат", "Бекарыс"],
            ["Кәусар", "Інжу", "Аружан", "Аяулым", "Айша", "Амина", "Сезім", "Нұрай", "Мадина", "Іңкәр", "София", "Жансая", "Арайлым"]
        ]
    };
    landing_notifiers.AZ = {
        cities: ["Баку", "Сумгайыт", "Гянджа", "Мингечевир", "Нахичевань", "Евлах", "Ленкорань", "Джалильабад", "Гёйчай", "Хачмаз", "Барда", "Сальян", "Имишли", "Агдаш"],
        peoples: [
            ["Əziz", "Əbil", "Fərman", "Gündüz", "Haci", "Xəyal", "Cahid", "Cabbar", "Davud", "Elçin", "Etibar", "Əli", "İntiqam"],
            ["Aida", "Arifə", "Ayla", "Bəsdi", "Elnarə", "Ədilə", "Fərəh", "Fatimə", "Gyulchin", "Xatirə", "Xəzan", "İradə", "Qüssə"]
        ]
    };
    landing_notifiers.AM = {
        cities: ["Ереван", "Гюмри", "Гянджа", "Ванадзор", "Вагаршапат", "Абовян", "Капан", "Раздан", "Армавир", "Масис", "Чаренцаван", "Иджеван", "Арарат", "Горис"],
        peoples: [
            ["Ազնավուր", "Ալբերտ", "Արգամ", "Արման", "Արզուման", "Արտեմ", "Բագրատ", "Բարունակ", "Դավիթ", "Դանիէլ", "Ենոք", "Զարե", " Էմիլ"],
            ["Ազա", " Արփի", "Գայանե", "Ալմաստ", "Անի", "Գոհար", "Зефира", "Էլիզ", "էլինար", "Օֆիկ", "Ֆիմի", "Мариетта", "Мане"]
        ]
    };
    landing_notifiers.BY = {
        cities: ["Минск", "Гомель", "Могилев", "Витебск", "Гродно", "Брест", "Бобруйск", "Барановичи", "Борисов", "Пинск", "Орша", "Мозырь", "Солигорск", "Новополоцк"],
        peoples: [
            ["Домаш Вячеслав", "Лагутов Руслан", "Степанков Радислав", "Перешивкин Ростислав", "Кобзев Платон", "Кабанов Игнатий", "Чепурин Николай", "Крымов Изяслав", "Собчак Евгений", "Былинкин Максим", "Архипов Сергей", "Донцов Самсон", "Стаин Владилен", "Лызлов Владислав", "Ягужинский Аристарх", "Фризов Владимир", "Крупнов Дмитрий", "Ябловский Вадим", "Гусенков Самсон", "Панфёров Семён", "Ясинский Павел", "Тетерев Глеб", "Шлыков Николай", "Козлов Илья", "Амалиев Максим", "Паулкин Ефим", "Колганов Герман", "Саламатов Николай", "Сподарев Степан", "Бочкарёв Владимир", "Опекунов Вячеслав", "Телицын Тимофей", "Ямлиханов Андрей", "Малиновский Владислав", "Гребнев Ростислав", "Кузанов Леонид", "Ягфаров Серафим", "Цитников Всеволод", "Владимиров Артём", "Банин Александр", "Капица Кирилл", "Колбин Клавдий", "Володин Зиновий", "Уланов Иван", "Седых Кирилл", "Туровский Лев", "Яснов Ефим", "Москвин ﻿Артем", "Измайлов Герман", "Цыганов Егор", "Голумбовский Дмитрий", "Аничков Кирилл", "Канаш Степан", "Клепахов Дмитрий", "Колесников Анатолий", "Цветков Леонид", "Мишин Ефим", "Борисов Митрофан"],
            ["Иноземцева Надежда", "Тотенкова Регина", "Курдина Эмилия", "Стаина Анна", "Чуличкова Анастасия", "Шеркова Евгения", "Андрюхина Нина", "Катериночкина Анфиса", "Головина Анна", "Чупрова Екатерина", "Холопова Виктория", "Крупина Мария", "Полевщикова Кристина", "Пьянкова Диана", "Буланова Яна", "Цейдлерина Мария", "Щеголева Светлана", "Янкелевич Алина", "Якушевич Наталья", "Фомичева Диана", "Пережогина Виктория", "Ячменькова Василиса", "Рябова Дарья", "Домышева Юлия", "Милова Татьяна", "Шипицына Анна", "Протасова Евгения", "Молодыха Алиса", "Коржева Ксения", "Кузнецова Вероника", "Сукина Алиса", "Перова ﻿Агата", "Коржакова Ольга", "Ёжина Вероника", "Абрамович Валентина", "Крылова Наталья", "Проскуркина Александра", "Терехова Юлия", "Труфанова Варвара", "Батурина Марина", "Васнецова Нина", "Перевалова Надежда", "Рошета Любовь", "Мосякова Татьяна", "Носова Анастасия", "Типалова Юнона", "Колесникова Инесса", "Якуничева Анна", "Левина Евгения", "Агафонова Виктория", "Дуркина Антонина", "Игошина Мария", "Званцова Светлана", "Хлопонина Елена", "Суботина Изабелла", "Дроздова Марфа", "Милютина Изабелла", "Гнусарева Ангелина"]
        ]
    };
    landing_notifiers.GE = {
        cities: ["Тбилиси", "Батуми", "Батуми", "Рустави", "Гори", "Зугдиди", "Поти", "Самтредиа", "Сенаки", "Хашури", "Зестафони", "Марнеули", "Кобулети", "Телави"],
        peoples: [
            ["Отиа", "Бердо", "Петруа", "Петрэ", "Петуа", "Джанико", "Бадри", "Лукиа", "Автандил", "Джано", "Серги", "Джансуг"],
            ["Лале", "Лали", "Ламара", "Русико", "Русудан", "Нино", "Нина", "Гика", "Тина", "Валентина", "Манана", "Цира", "Лейла"]
        ]
    };
    landing_notifiers.KG = {
        cities: ["Бишкек", "Ош", "Джалал-Абад", "Каракол", "Узген", "Токмак", "Кызыл-Кия", "Кара-Балта", "Балыкчы", "Таш-Кумыр", "Нарын", "Талас", "Кербен", "Исфана"],
        peoples: [
            ["Ариет", "Белек", "Джанузак", "Джаркин", "Джолдош", "Жениш", "Кара", "Кенешбек", "Конокбек", "Кубанычбек", "Кулчоро", "Курманбек"],
            ["Айшоола", "Акбермет", "Акылай", "Ариета", "Аяна", "Барчынай", "Бермет", "Джайна", "Джыргал", "Жа", "Жазгуль", "Жидегуль", "Жубаныш"]
        ]
    };
    landing_notifiers.MD = {
        cities: ["Bălți", "Chișinău", "Comrat", "Bender", "Tiraspol", "Orhei", "Dubăsari", "Drochia", "Fălești", "Soroca", "Cimișlia", "Sîngerei", "Slobozia", "Nisporeni"],
        peoples: [
            ["Vasile", "Eugen", "Ion", "Grigore", "Dumitru", "Constantin", "Alecu", "Alexandru", "Alexei", "Mihai", "Radu", "Pavel"],
            ["Veronyka", "Anastacia", "Kate", "Amina", "Diana", "Ann", "Mary", "Laura", "Yasmin", "Sophie", "Alexandra", "Maria", "Sofia"]
        ]
    };
    landing_notifiers.TJ = {
        cities: ["Душанбе", "Худжанд", "Бохтар", "Куляб", "Истаравшан", "Турсунзаде", "Канибадам", "Исфара", "Вахдат", "Пенджикент", "Бустон", "Нурек", "Хорог", "Гиссар"],
        peoples: [
            [" Аббос", "Абдукаххор", "Абдухолик", "Махрам", "Акобир", "Баходур", "Анзур", "Истам", "Зог", "Арджуманд", "Порсо", "Сазовор "],
            ["Адлинисо", "Адлия", "Шукрона", "Аввалмо", "Садбарг","Зеби", "Дайра", "Есмин", "Ела", "Гамза", "Низора", "Гулча", "Дилсуз"]
        ]
    };
    landing_notifiers.UZ = {
        cities: ["Ташкент", "Наманган", "Самарканд", "Андижан", "Фергана", "Нукус", "Бухара", "Карши", "Коканд", "Навои", "Ургенч", "Маргилан", "Ангрен", "Чирчик"],
        peoples: [
            ["Азиз", "Алишер", "Анвар", "Арслан", "Бахтиер", "Бекзод", "Бобур", "Ботир","Дилшод", "Жасур", "Искандер", "Карим"],
            ["Асмира", "Нигора", "Шахло", "Зилола", "Нилуфар", "Наргиз", "Гульчехра", "Фархунда", "Гузаль", "Динора", "Лола", "Адолат", "Бахор"]
        ]
    };

    var buildDeliveryPopup = function(params) {
        var city    = (params.city.length) ? 'г.&nbsp;' + params.city : 'Вашем городе',
            country = (landing_notifiers[params.geoKey] && params.geoKey !== 'ZZ') ? params.geoKey : 'RU',
            $html   = $('<div class="delivery-notify">' +
            '<button class="close-delivery-notify">&times;</button>' +
            '<div class="notify-text"></div>' +
            '</div>');

        if (params.zdorov == 1) {
            $html = $('<div class="zd_dostavka">' +
                '<img class="zd_dostavka_flag" src="/files/_blocks/notificators/img/zdorov/flags/' + params.geoKey + '.png" alt=""/>' +
                '<p class="text"></p>' +
                '</div><div class="bottom_menu">' +
                '<div class="container contaner_bottom_menu">' +
                '<img class="zd_dostavka_flag" src="/files/_blocks/notificators/img/zdorov/flags/' + params.geoKey + '.png" alt=""/>' +
                '<div class="fast_send text"></div>' +
                '</div>' +
                '</div>');

            var str = {
                RU: function() {
                    $html.find('.text').html('<strong>БЫСТРАЯ<br> Доставка</strong><br><span class="zd_text"> в ' + city + '</span>');
                },

                ZZ: function() {
                    $html.find('.text').html('<strong>БЫСТРАЯ<br> Доставка</strong><br><span class="zd_text"> в ' + city + '</span>');
                },

                AZ: function() {
                    $html.find('.text').html('<strong>sürətli<br>çatdırılma</strong><br><span class="zd_text">Azərbaycanda</span>');
                },

                KZ: function() {
                    $html.find('.text').html('<strong>Бүкіл</strong><br><span class="zd_text">Қазақстан<br>ЖЕДЕЛ ЖЕТКІЗУ</span>');
                },

                PL: function() {
                    $html.find('.text').html('<strong>Szybka<br> dostawa</strong><br><span class="zd_text"> twoim mieście</span>');
                },

                ES: function() {
                    $html.find('.text').html('<strong>Entrega<br> rápida</strong><br><span class="zd_text"> en tu ciudad</span>');
                },

                PT: function() {
                    $html.find('.text').html('<strong>Entrega<br> rápida</strong><br><span class="zd_text"> na sua cidade</span>');
                },

                RO: function() {
                    $html.find('.notify-text').html('<strong>Livrare<br> rapidă</strong><br><span class="zd_text"> în orașul tău</span>');
                }
            };  
            str[country]();
            return $html;

        } else if (params.zdorov == 2) {
            $html = $('<div class="zd_dostavka">' +
                '<img class="zd_dostavka_top" src="/files/_blocks/notificators/img/zdorov/zd_dostavka.png" alt=""/>' +
                '<img class="zd_dostavka_flag" src="/files/_blocks/notificators/img/zdorov/flags/' + params.geoKey + '.png" alt=""/>' +
                '<p class="text"></p></div>' +
                '<div class="zd_buy_button">' +
                '<div class="zd_buy_button_desktop button_text"></div>' +
                '<div class="zd_buy_button_mobile"><div class="button_text"></div></div>' +
                '</div>');

            var str = {
                RU: function() {
                    $html.find('.text').html('<span>Быстрая доставка</span> по всей России').end().find('.button_text').html('ЗАКАЗАТЬ<br>ПРЯМО СЕЙЧАС');
                },

                PL: function() {
                    $html.find('.text').html('<span>Быстрая доставка</span> по всей Польше').end().find('.button_text').html('ЗАКАЗАТЬ<br>ПРЯМО СЕЙЧАС');
                },

                ZZ: function() {
                    $html.find('.text').html('<span>Быстрая доставка</span> по всей России').end().find('.button_text').html('ЗАКАЗАТЬ<br>ПРЯМО СЕЙЧАС');
                },

                AZ: function() {
                    $html.find('.text').html('<span>Быстрая доставка</span> по всему Азербайджану').end().find('.button_text').html('Indi<br>sifariş etmək');
                },

                KZ: function() {
                    $html.find('.text').html('<span>Быстрая доставка</span> по всему Казахстану').end().find('.button_text').html('Дəл қазір тапсырыс жасау');
                },

                BY: function() {
                    $html.find('.text').html('<span>Быстрая доставка</span> по всей Беларусии').end().find('.button_text').html('ЗАКАЗАТЬ<br>ПРЯМО СЕЙЧАС');
                },

                UA: function() {
                    $html.find('.text').html('<span>Быстрая доставка</span> по всей Украине').end().find('.button_text').html('ЗАКАЗАТЬ<br>ПРЯМО СЕЙЧАС');
                },

                ES: function() {
                    $html.find('.text').html('<span>Быстрая доставка</span> по всей Испании').end().find('.button_text').html('ЗАКАЗАТЬ<br>ПРЯМО СЕЙЧАС');
                },
                PT: function() {
                    $html.find('.text').html('<span>Быстрая доставка</span> по всей Поргугалии').end().find('.button_text').html('ЗАКАЗАТЬ<br>ПРЯМО СЕЙЧАС');
                },
                RO: function() {
                    $html.find('.text').html('<span>Быстрая доставка</span> по всей Румынии').end().find('.button_text').html('ЗАКАЗАТЬ<br>ПРЯМО СЕЙЧАС');
                }
            };

            $(function() {
                var $orderBlock = $('.orderformcdn:first'),
                    $div = $('.zd_dostavka'),
                    $button = $('.zd_buy_button');

                $html.on('click', function() {
                    $('html, body').stop().animate({
                        scrollTop: ($orderBlock.offset().top)
                    }, 1000);
                });

                setTimeout(setInterval(function() {
                    if ($div.is(':visible')) {
                        $div.fadeOut(function() {
                            $button.fadeIn();
                        });
                    } else {
                        $button.fadeOut(function() {
                            $div.fadeIn();
                        });
                    }
                }, 3500), 3000);
            });
            str[country]();
            return $html;
        }

        var str = {
            RU: function() {
                $html.find('.notify-text').html('Быстрая доставка в&nbsp;' + city);
            },

            PL: function() {
                $html.find('.notify-text').html('Istnieje możliwość szybkiej dostawa do Twojego miasta.');
            },

            ES: function() {
                $html.find('.notify-text').html('Entrega rápida en tu ciudad');
            },

            PT: function() {
                $html.find('.notify-text').html('Entrega rápida na sua cidade');
            },

            RO: function() {
                $html.find('.notify-text').html('Livrare rapidă în orașul tău');
            },

            DE: function() {
                $html.find('.notify-text').html('schnelle Lieferung in Deutschland');
            },
            TR: function() {
                $html.find('.notify-text').html('Hızlı teslimat bulunmaktadır');
            }
        };

        (str[country]) ? str[country]() : str['RU']();

        return $html;
    };

    var buildSaleTips = function(params) {
        var qty = (params.multiply) ? getRandomInt(2, params.multiply) : 0,
            bill = (!params.multiply) ? params.price : params.price * qty,
            country = (landing_notifiers[params.geoKey] && params.geoKey !== 'ZZ') ? params.geoKey : 'RU',
            city = landing_notifiers[country].cities[getRandomInt(0, landing_notifiers[country].cities.length - 1)],
            sex = (landing_notifiers.params.sex !== 'any') ? landing_notifiers.params.sex : getRandomInt(0, 1),
            names = [],
            name = '',
            text;


        names = landing_notifiers[country].peoples[sex];
        !isShuffled && shuffle(names);
        name = names[i];

        if (i == names.length - 1) {
            i = 0;
        }

        i++;
        var hightPriceText = bill + '&nbsp;' + params.currency;
        text = {
            RU: {
                qtyStr: (qty >= 2) ? ', кол&#8209;во&nbsp;' + qty + '&nbsp;шт.' : '',
                notify_text: (bill < 990) ? name + ', ' + city + ', сделал' + (sex > 0 ? 'а' : '') + ' заказ' : name + ', ' + city + ', сделал' + (sex > 0 ? 'а' : '') + ' заказ на&nbsp;' + hightPriceText
            },

            RS: {
                qtyStr: '',
                notify_text: name + ' je naprav' + (sex > 0 ? 'ila' : 'io') + ' narudžbinu za ' + bill + '&nbsp;' + params.currency
            },

            PL: {
                qtyStr: '',
                notify_text: name + ' złożył' + (sex > 0 ? 'a' : '') + ' zamówienie na sumę ' + bill + '&nbsp;' + params.currency
            },

            UA: {
                qtyStr: (qty >= 2) ? ', кол-во&nbsp;' + qty + '&nbsp;шт.' : '',
                notify_text: (bill < 369) ? name + ', ' + city + ', сделал' + (sex > 0 ? 'а' : '') + ' заказ' : name + ', ' + city + ', сделал' + (sex > 0 ? 'а' : '') + ' заказ на&nbsp;' + hightPriceText
            },

            ES: {
                qtyStr: (qty >= 2) ? ', la cantidad&nbsp;' + qty + '&nbsp;piezas' : '',
                notify_text: name + ', ' + city + ', realizado un pedido de&nbsp;' + bill + '&nbsp;' + params.currency
            },

            PT: {
                qtyStr: (qty >= 2) ? ', la cantidad&nbsp;' + qty + '&nbsp;piezas' : '',
                notify_text: name + ', ' + city + ', um pedido&nbsp;' + bill + '&nbsp;' + params.currency
            },

            RO: {
                qtyStr: (qty >= 2) ? ', count&nbsp;' + qty + '&nbsp;buc.' : '',
                notify_text: name + ', ' + city + ', am comanda în sumă de&nbsp;' + bill + '&nbsp;' + params.currency
            },

            DE: {
                qtyStr: (qty >= 2) ? ', betrag&nbsp;' + qty + '&nbsp;Stück.' : '',
                notify_text: name + ', ' + city + ', hat einen Auftrag von&nbsp;' + bill + '&nbsp;' + params.currency + ' gemacht'
            },

            TR: {
                qtyStr: '',
                notify_text: name + ', ' + city + ', sipariş için toplam&nbsp;' + bill + '&nbsp;' + params.currency
            },

            KZ: {
                qtyStr: (qty >= 2) ? ', кол-во&nbsp;' + qty + '&nbsp;шт.' : '',
                notify_text: (bill < 5526) ? name + ', ' + city + ', сделал' + (sex > 0 ? 'а' : '') + ' заказ' : name + ', ' + city + ', сделал' + (sex > 0 ? 'а' : '') + ' заказ на&nbsp;' + hightPriceText
            },

            AZ: {
                qtyStr: (qty >= 2) ? ', qty&nbsp;' + qty + '&nbsp;ədəd təşkil edib' : '',
                notify_text: (bill < 22) ? name + ', ' + city + ', sifariş' + (sex > 0 ? 'а' : '') + ' verdi' : name + ', ' + city + ', bitdi' + (sex > 0 ? 'а' : '') + ' üçün sifariş&nbsp;' + hightPriceText
            },

            AM: {
                qtyStr: (qty >= 2) ? ', Քանակ&nbsp;' + qty + '&nbsp;հատ.' : '',
                notify_text: (bill < 6618) ? name + ', ' + city + ', պատվեր' + (sex > 0 ? 'а' : '') + ' արեց' : name + ', ' + city + ', կատարած' + (sex > 0 ? 'а' : '') + ' պատվիրել համար&nbsp;' + hightPriceText
            },

            BY: {
                qtyStr: (qty >= 2) ? ', кол-у&nbsp;' + qty + '&nbsp;шт.' : '',
                notify_text: (bill < 33) ? name + ', ' + city + ', зрабіў' + (sex > 0 ? 'а' : '') + ' заказ' : name + ', ' + city + ', зрабіў' + (sex > 0 ? 'а' : '') + ' заказ на&nbsp;' + hightPriceText
            },

            GE: {
                qtyStr: (qty >= 2) ? ', რაოდენობა&nbsp;' + qty + '&nbsp;ცალი' : '',
                notify_text: (bill < 44) ? name + ', ' + city + ', შეკვეთა' + (sex > 0 ? 'а' : '') + ' გააკეთა' : name + ', ' + city + ', შესრულებულია' + (sex > 0 ? 'а' : '') + '   შეკვეთა&nbsp;' + hightPriceText
            },

            KG: {
                qtyStr: (qty >= 2) ? ', кол-во&nbsp;' + qty + '&nbsp;шт.' : '',
                notify_text: (bill < 1102) ? name + ', ' + city + ', сделал' + (sex > 0 ? 'а' : '') + ' заказ' : name + ', ' + city + ', сделал' + (sex > 0 ? 'а' : '') + ' заказ на&nbsp;' + hightPriceText
            },

            MD: {
                qtyStr: (qty >= 2) ? ', кол-во&nbsp;' + qty + '&nbsp;шт.' : '',
                notify_text: (bill < 224) ? name + ', ' + city + ', сделал' + (sex > 0 ? 'а' : '') + ' заказ' : name + ', ' + city + ', сделал' + (sex > 0 ? 'а' : '') + ' заказ на&nbsp;' + hightPriceText
            },

            TJ: {
                qtyStr: (qty >= 2) ? ', qty&nbsp;' + qty + '&nbsp;дона.' : '',
                notify_text: (bill < 147) ? name + ', ' + city + ', фармоиш' + (sex > 0 ? 'а' : '') + ' дод' : name + ', ' + city + ', сохт ва' + (sex > 0 ? 'а' : '') + ' тартибот&nbsp;' + hightPriceText
            },

            UZ: {
                qtyStr: (qty >= 2) ? ', miqdor&nbsp;' + qty + '&nbsp;dona.' : '',
                notify_text: (bill < 135611) ? name + ', ' + city + ', buyurtma' + (sex > 0 ? 'а' : '') + ' qildi' : name + ', ' + city + ', uchun' + (sex > 0 ? 'а' : '') + ' buyurtma berdi&nbsp;' + hightPriceText
            }
        };

        if (landing_notifiers.params.no_price) {
            text = {
                RU: {
                    qtyStr: (qty > 0) ? ', кол-во&nbsp;' + qty + '&nbsp;шт.' : '',
                    notify_text: name + ', ' + city + ', сделал' + (sex > 0 ? 'а' : '') + ' заказ'
                },
                UA: {
                    qtyStr: (qty > 0) ? ', кол-во&nbsp;' + qty + '&nbsp;шт.' : '',
                    notify_text: name + ', ' + city + ', сделал' + (sex > 0 ? 'а' : '') + ' заказ'
                },
            };
        }

        return (
            '<div class="buyers-notify">' +
            '<div class="buyers-icon"></div>' +
            '<div class="notify-text">' + text[country].notify_text + ' ' + text[country].qtyStr + '</div>' +
            '<button class="buyers-notify-close">×</button>' +
            '</div>'
        );
    };


    var buildVisitorsPanel = function(geoKey) {
        var $html = $('<div id="visitors-panel">' +
            '<ul class="visitors-info"> ' +
            '<li class="visitors-today"></li>' +
            '<li class="visitors-now"></li>' +
            '<li class="visitors-buy"></li>' +
            '</ul>' +
            '</div>'),
            str;

        str =  {
            RU: function(){
                $html.find('.visitors-today').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/all.png" alt="" /></i> Посетителей сегодня: <span>' + landing_notifiers.stat.visitors + '</span>');
                $html.find('.visitors-now').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/now.png" alt="" /></i> Сейчас на сайте: <span>' + landing_notifiers.stat.online + '</span>');
                $html.find('.visitors-buy').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/buy.png" alt="" /></i> Покупок сегодня: <span>' + landing_notifiers.stat.sales + '</span>');
            },

            PL: function(){
                $html.find('.visitors-today').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/all.png" alt="" /></i> Dzisiejsze odwiedziny: <span>' + landing_notifiers.stat.visitors + '</span>');
                $html.find('.visitors-now').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/now.png" alt="" /></i> Goście online: <span>' + landing_notifiers.stat.online + '</span>');
                $html.find('.visitors-buy').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/buy.png" alt="" /></i> Dzisiejsze zakupy: <span>' + landing_notifiers.stat.sales + '</span>');
            },

            ES: function(){
                $html.find('.visitors-today').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/all.png" alt="" /></i> Los visitantes hoy: <span>' + landing_notifiers.stat.visitors + '</span>');
                $html.find('.visitors-now').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/now.png" alt="" /></i> Ahora online: <span>' + landing_notifiers.stat.online + '</span>');
                $html.find('.visitors-buy').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/buy.png" alt="" /></i> Compras de hoy: <span>' + landing_notifiers.stat.sales + '</span>');
            },

            PT: function(){
                $html.find('.visitors-today').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/all.png" alt="" /></i> Visitantes hoje: <span>' + landing_notifiers.stat.visitors + '</span>');
                $html.find('.visitors-now').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/now.png" alt="" /></i> On-line: <span>' + landing_notifiers.stat.online + '</span>');
                $html.find('.visitors-buy').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/buy.png" alt="" /></i> Compras de Hoje: <span>' + landing_notifiers.stat.sales + '</span>');
            },

            RO: function(){
                $html.find('.visitors-today').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/all.png" alt="" /></i> Vizualizări astăzi: <span>' + landing_notifiers.stat.visitors + '</span>');
                $html.find('.visitors-now').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/now.png" alt="" /></i> Acum online: <span>' + landing_notifiers.stat.online + '</span>');
                $html.find('.visitors-buy').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/buy.png" alt="" /></i> Au cumpărat astăzi: <span>' + landing_notifiers.stat.sales + '</span>');
            },

            DE: function(){
                $html.find('.visitors-today').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/all.png" alt="" /></i> Anzahl der Besucher heute: <span>' + landing_notifiers.stat.visitors + '</span>');
                $html.find('.visitors-now').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/now.png" alt="" /></i> jetzt Online: <span>' + landing_notifiers.stat.online + '</span>');
                $html.find('.visitors-buy').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/buy.png" alt="" /></i> Bestellung heute: <span>' + landing_notifiers.stat.sales + '</span>');
            },

            TR: function(){
                $html.find('.visitors-today').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/all.png" alt="" /></i> Bugünün ziyaretçi sayısı: <span>' + landing_notifiers.stat.visitors + '</span>');
                $html.find('.visitors-now').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/now.png" alt="" /></i> Şimdi çevrimiçi olanlar: <span>' + landing_notifiers.stat.online + '</span>');
                $html.find('.visitors-buy').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/buy.png" alt="" /></i> Bugün ürün alımları: <span>' + landing_notifiers.stat.sales + '</span>');
            },

            GE: function(){
                $html.find('.visitors-today').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/all.png" alt="" /></i> დღეს სტუმრები: <span>' + landing_notifiers.stat.visitors + '</span>');
                $html.find('.visitors-now').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/now.png" alt="" /></i> ქსელშია ახლა: <span>' + landing_notifiers.stat.online + '</span>');
                $html.find('.visitors-buy').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/buy.png" alt="" /></i> დღეს შოპინგი: <span>' + landing_notifiers.stat.sales + '</span>');
            },

            IT: function(){
                $html.find('.visitors-today').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/all.png" alt="" /></i> Visitatori oggi: <span>' + landing_notifiers.stat.visitors + '</span>');
                $html.find('.visitors-now').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/now.png" alt="" /></i> Online adesso: <span>' + landing_notifiers.stat.online + '</span>');
                $html.find('.visitors-buy').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/buy.png" alt="" /></i> Fare acquisti oggi: <span>' + landing_notifiers.stat.sales + '</span>');
            },
            
            KZ: function(){
                $html.find('.visitors-today').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/all.png" alt="" /></i> Бүгін келушілер: <span>' + landing_notifiers.stat.visitors + '</span>');
                $html.find('.visitors-now').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/now.png" alt="" /></i> Қазір желіде: <span>' + landing_notifiers.stat.online + '</span>');
                $html.find('.visitors-buy').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/buy.png" alt="" /></i> Бүгін сатып алу: <span>' + landing_notifiers.stat.sales + '</span>');
            },

            IN: function(){
                $html.find('.visitors-today').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/all.png" alt="" /></i> आगंतुक आज: <span>' + landing_notifiers.stat.visitors + '</span>');
                $html.find('.visitors-now').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/now.png" alt="" /></i> अब ऑनलाइन: <span>' + landing_notifiers.stat.online + '</span>');
                $html.find('.visitors-buy').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/buy.png" alt="" /></i> आज खरीदारी करें: <span>' + landing_notifiers.stat.sales + '</span>');
            },

            AE: function(){
                $html.find('.visitors-today').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/all.png" alt="" /></i> زوار اليوم: <span>' + landing_notifiers.stat.visitors + '</span>');
                $html.find('.visitors-now').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/now.png" alt="" /></i> متواجد حاليا: <span>' + landing_notifiers.stat.online + '</span>');
                $html.find('.visitors-buy').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/buy.png" alt="" /></i> التسوق اليوم: <span>' + landing_notifiers.stat.sales + '</span>');
            },

            UZ: function(){
                $html.find('.visitors-today').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/all.png" alt="" /></i> Bugungi tashrif buyuruvchilar: <span>' + landing_notifiers.stat.visitors + '</span>');
                $html.find('.visitors-now').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/now.png" alt="" /></i> Hozir onlayn: <span>' + landing_notifiers.stat.online + '</span>');
                $html.find('.visitors-buy').html('<i class="vis-ico"><img src="/files/_blocks/notificators/img/buy.png" alt="" /></i> Bugun xaridlar: <span>' + landing_notifiers.stat.sales + '</span>');
            }
        };

        (str[geoKey]) ? str[geoKey]() : str['RU']();

        return $html;
    };

    var buildFreezer = function(geoKey) {
        var freezed = {
            RU: '= 63 рублей',
            PL: 'Według kursu z 2014 roku'
        };

        var price = (freezed[geoKey]) ? freezed[geoKey] : 'по курсу 2014 года';

        var $html = $('<div class="freezing-wrap">' +
            '<div class="freezing-info">' +
            '<div class="freezing-info--title"></div>' +
            '<div class="freezing-info--price">1$ <span class="dynamic-freezing-info--price">' + price + '</span></div>' +
            '<div class="freezing-info--packages"></div>' +
            '<button class="freezing-close">×</button>' +
            '</div>');

        var str = {
            RU: function(){
                $html.find('.freezing-info--title').html('Мы заморозили цену!');
                $html.find('.freezing-info--packages').html('Осталось <span class="packages-count lastpack">132</span> шт. <br>по старому курсу</div>' + '<a href="#close" class="freezing-close"></a>');
            },

            PL: function(){
                $html.find('.freezing-info--title').html('ZAMROZILIŚMY CENY!');
                $html.find('.freezing-info--packages').html('Zostało <span class="packages-count lastpack">132</span> szt. <br>wg starego kursu</div>' + '<a href="#close" class="freezing-close"></a>');
            },

            ES: function(){
                $html.find('.freezing-info--title').html('Hemos congelado los precios!');
                $html.find('.freezing-info--packages').html('Quedan <span class="packages-count lastpack">132</span> unidades <br>con el precio antiguo</div>' + '<a href="#close" class="freezing-close"></a>');
            },

            PT: function(){
                $html.find('.freezing-info--title').html('Preço congelar!');
                $html.find('.freezing-info--packages').html('<span class="packages-count lastpack">132</span> peças restantes <br>com preço antigo</div>' + '<a href="#close" class="freezing-close"></a>');
            },

            RO: function(){
                $html.find('.freezing-info--title').html('Noi am înghețat prețul!');
                $html.find('.freezing-info--packages').html('Au rămas <span class="packages-count lastpack">132</span> unități <br>după cursul vechi</div>' + '<a href="#close" class="freezing-close"></a>');
            }
        };

        (str[geoKey]) ? str[geoKey]() : str['RU']();

        return $html;
    };


    var buildFreezer2 = function(geoKey) {
        var freezed = {
            RU: '',
        };

        var price = 'Успей заказать со&nbsp;скидкой до 50%';

        var $html = $('<div class="freezing-wrap">' +
            '<div class="freezing-info">' +
            '<div class="freezing-info--title"></div>' +
            '<div class="freezing-info--price"><span class="dynamic-freezing-info--price">' + price + '</span></div>' +
            '<div class="freezing-info--packages"></div>' +
            '</div>');

        var str = {
            RU: function(){
                $html.find('.freezing-info--title').html('Мы заморозили цену');
                $html.find('.freezing-info--packages').html('Осталось всего <span class="packages-count lastpack">37</span> </br> товаров по скидке</div>' + '<a href="#close" class="freezing-close"></a>');
            },
        };

        (str[geoKey]) ? str[geoKey]() : str['RU']();

        return $html;
    };

    var buildOnlineUsersPanel = function() {
        var online_users = landing_notifiers.stat.online - 1,
            text = {
                RU: online_users + ' пользователей просматривают эту страницу вместе с вами.',
                ZZ: online_users + ' пользователей просматривают эту страницу вместе с вами.',
                RS: online_users + ' korisnik trenutno pregledava ovu stranicu zajedno sa vama.',
                PL: 'Obecnie włącznie z Państwem przegląda tę stronę ' + online_users + ' osób.',
                ES: online_users + ' personas están viendo esta página con usted',
                PT: online_users + ' pessoas estão vendo essa página com você',
                RO: online_users + ' persoane această pagină împreună cu dvs',
                DE: online_users + ' Benutzer auf <br> dieser Seitse.',
                TR: 'Şuanda sizinle birlikte ' + online_users + ' kişi <br> daha bu sayfayı incelemektedir'
            };


        var geoText = text[landing_notifiers.params.geoKey] || online_users + ' пользователей просматривают эту страницу вместе с вами.';


        return (
            '<div class="online-users-panel">' +
            '<button class="close-online-users-panel" type="button">&times;</button>' +
            '<div class="online-users-panel-text">' + geoText + '</div>' +
            '</div>'
        );
    };

    var buildPopupForm = function() {
            var openModal = true;

            var _addEvent = function(obj, evt, fn){
                if (obj.addEventListener) {
                    obj.addEventListener(evt, fn, false);
                }
                else if (obj.attachEvent) {
                    obj.attachEvent("on" + evt, fn);
                }
            };

            var _buildModal = function() {
                var overlay     = document.getElementById('cbf-overlay'),
                    modalForm   = document.getElementById('cb-form'),
                    closeButton = modalForm.querySelector('.close');

                var showModal = function(){
                    overlay.className   = 'cbf-visible';
                    modalForm.className = 'cbf-visible';
                    //document.body.style = 'overflow:hidden';
                }

                var closeModal = function(){
                    overlay.className   = 'cbf-hidden';
                    modalForm.className = 'cbf-hidden';
                }

                _addEvent(closeButton, 'click', function(){
                    closeModal();
                });

                _addEvent(document, "mouseout", function(e) {
                    e = e ? e : window.event;
                    var from = e.relatedTarget || e.toElement;
                    if (!from || from.nodeName == "HTML") {
                        if (openModal) {
                            showModal();
                            //openModal = false;
                        }
                    }
                });
            }

            _addEvent(G,'load',function(e) {
                    _buildModal();
            });
    };


    var LANDING = G.LANDING || {
        showDeliveryPopup: function() {
            try {
                var $popup = $(buildDeliveryPopup(landing_notifiers.params));

                $popup.find('.close-delivery-notify').on('click', function(e) {
                    $popup.remove();
                });

                $('body').append($popup);

            } catch (e) {
                console.log(e);
            }
        },

        showSaleTips: function() {
            try {
                var $tip = $(buildSaleTips(landing_notifiers.params));
                $('body').append($tip);

                setTimeout(function() {
                    $tip.fadeOut(400, function() {
                        $tip.remove();
                    });
                }, 5000);

                $('.buyers-notify-close').on('click', function(e) {
                    $tip.remove();
                });

            } catch (e) {
                console.log(e);
            }
        },

        showVisitorsPanel: function() {
            try {
                $('body').prepend(buildVisitorsPanel(landing_notifiers.params.geoKey)).addClass('hasVisitorsPanel');
                var $firstMarkupElem = $('#visitors-panel').siblings().not('script, link, #cbkr, #cbkr_form, .modal').eq(0);
                $firstMarkupElem.css('margin-top', $('#visitors-panel').height());

                //TODO: Improve this
                if ($(window).width() <= 768) {
                    $firstMarkupElem.css('margin-top', 0);
                }

                $(window).resize(function() {
                    if ($(window).width() <= 768) {
                        $firstMarkupElem.css('margin-top', 0);
                    } else {
                         $firstMarkupElem.css('margin-top', $('#visitors-panel').height());
                    }
                });

            } catch (e) {
                console.log(e);
            }
        },


        showFreezer: function() {
            try {
                $('body').prepend(buildFreezer(landing_notifiers.params.geoKey));

                setTimeout(function() {
                    $('.freezing-wrap').addClass('freezing-active');
                    $('html').addClass('freezer');
                }, 2000);

                // setTimeout(function() {
                //     $('.freezing-wrap').removeClass('freezing-active');
                //     $('html').removeClass('freezer');
                // }, 30000);

                $('.freezing-close').on('click', function(e) {
                    e.preventDefault();
                    $('.freezing-wrap').addClass('freezing-hide');
                    $('html').removeClass('freezer');
                });


            } catch (e) {
                console.log(e);
            }
        },


        showFreezer2: function() {
            try {
                $('body').prepend(buildFreezer2(landing_notifiers.params.geoKey));

                setTimeout(function() {
                    $('.freezing-wrap').addClass('freezing-active');
                    $('html').addClass('freezer');
                }, 2000);

                // setTimeout(function() {
                //     $('.freezing-wrap').removeClass('freezing-active');
                //     $('html').removeClass('freezer');
                // }, 30000);

                $('.freezing-close').on('click', function(e) {
                    e.preventDefault();
                    $('.freezing-wrap').addClass('freezing-hide');
                    $('html').removeClass('freezer');
                });


            } catch (e) {
                console.log(e);
            }
        },

        showOnlineUsersPanel: function() {
            try {
                var $onlineUsersPanel = $(buildOnlineUsersPanel());

                $onlineUsersPanel.find('.close-online-users-panel').on('click', function() {
                    $onlineUsersPanel.hide();
                });

                $('body').append($onlineUsersPanel);
            } catch (e) {
                console.log(e);
            }
        },

        showCallbackForm: function() {
            try {
                buildPopupForm();
            } catch (e) {
                console.log(e);
            }
        }
    };

    G.LANDING = LANDING;
})(this);
