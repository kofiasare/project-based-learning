// Functions
const bornIn1500s = (i) => {
    return i.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);
}

const firstAndLastNames = (i) => {
    return i.map((inventor) => ({
        firstName: inventor.first,
        lastName: inventor.last
    }));
};

const oldToYoung = (i) => {
    return i.map((inventor) => {
        return {
            name: `${inventor.first} ${inventor.last}`,
            birthDate: inventor.year
        }
    }).sort((a, b) => a.birthDate - b.birthDate)
}

const yearsAllLived = (i) => {
    return i.reduce((a, inventor) => {
        return a + (inventor.passed - inventor.year)
    }, 0);
}

const sortYearsLived = (i) => {
    return i.map(inventor => {
        return {
            name: `${inventor.first} ${inventor.last}`,
            lived: inventor.passed - inventor.year
        }
    }).sort((a, b) => b.lived - a.lived);
}

const boulevardsWithDE = (boulevards, searchQuery = "de") => {
    return boulevards.filter((boulevard) => {
        return boulevard.includes(searchQuery);
    });
}

const sortByLastName = (p) => p.sort();

const instanceCount = (items) => {
    const instances = {}
    items.forEach((item) => {
        if (Object.keys(instances).includes(item)) instances[item]++;
        else instances[item] = 1
    })
    return instances
}

const transportation = (items) => {
    return items.reduce((acc, item) => {
        if (!acc[item]) {
            acc[item] = 0;
        }
        acc[item]++
            return acc;
    }, {})
}




const data = {
    inventors: [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        // { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        // { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        // { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        // { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        // { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ],

    people: [
        'Beck, Glenn',
        'Becker, Carl',
        'Beckett, Samuel',
        'Beddoes, Mick',
        'Beecher, Henry',
        'Beethoven, Ludwig',
        'Begin, Menachem',
        'Belloc, Hilaire',
        'Bellow, Saul',
        'Benchley, Robert',
        'Benenson, Peter',
        'Ben-Gurion, David',
        'Benjamin, Walter',
        'Benn, Tony',
        'Bennington, Chester',
        'Benson, Leana',
        'Bent, Silas',
        'Bentsen, Lloyd',
        'Berger, Ric',
        'Bergman, Ingmar',
        'Berio, Luciano',
        'Berle, Milton',
        'Berlin, Irving',
        'Berne, Eric',
        'Bernhard, Sandra',
        'Berra, Yogi',
        'Berry, Halle',
        'Berry, Wendell',
        'Bethea, Erin',
        'Bevan, Aneurin',
        'Bevel, Ken',
        'Biden, Joseph',
        'Bierce, Ambrose',
        'Biko, Steve',
        'Billings, Josh',
        'Biondo, Frank',
        'Birrell, Augustine',
        'Black, Elk',
        'Blair, Robert',
        'Blair, Tony',
        'Blake, William'
    ],

    items: [
        'car',
        'car',
        'truck',
        'truck',
        'bike',
        'walk',
        'car',
        'van',
        'bike',
        'walk',
        'car',
        'van',
        'car',
        'truck'
    ],

    BoulevardsInParis: [
        'Boulevard Auguste-Blanqui',
        "Boulevard Barbès",
        "Boulevard Beaumarchais",
        "Boulevard de l'Amiral-Bruix",
        "Boulevard des Capucines",
        "Boulevard de la Chapelle",
        "Boulevard de Clichy",
        "Boulevard du Crime",
        "Boulevard Haussmann",
        "Boulevard de l'Hôpital",
        "Boulevard des Italiens",
        "Boulevard de la Madeleine",
        "Boulevard de Magenta",
        "Boulevard Montmartre",
        "Boulevard du Montparnasse",
        "Boulevard Raspail",
        "Boulevard Richard-Lenoir",
        "Boulevard de Rochechouart",
        "Boulevard Saint-Germain",
        "Boulevard Saint-Michel",
        "Boulevard de Sébastopol",
        "Boulevard de Strasbourg",
        "Boulevard du Temple",
        "Boulevard Voltaire",
        "Boulevard de la Zone"
    ]

}


// Questions

// 1. Filter the list of inventors for those who were born in the 1500's
console.table(bornIn1500s(data.inventors));

// 2. Give us an array of the inventors' first and last names
console.table(firstAndLastNames(data.inventors));

// 3. Sort the inventors by birthdate, oldest to youngest
console.table(oldToYoung(data.inventors));

// 4. How many years did all the inventors live?
console.log(yearsAllLived(data.inventors));

// 5. Sort the inventors by years lived
console.table(sortYearsLived(data.inventors));

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
console.table(boulevardsWithDE(data.BoulevardsInParis));

// 7. Sort the people alphabetically by last name
console.table(sortByLastName(data.people));

// 8. Sum up the instances of each of these
console.table(transportation(data.items));