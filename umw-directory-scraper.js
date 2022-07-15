const puppeteer = require('puppeteer');

const url = 'https://www.umwestern.edu/faculty-list/birch-creek-center/';

async function engage() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    data = await page.evaluate(() => {
        root = Array.from(document.querySelectorAll('div.col-md-12'));
        employees = root.map(employee => ({
            location: employee.querySelector('p').innerText,
            phone: employee.querySelector('p:nth-of-type(2)').innerText,
            email: employee.querySelector('p:last-of-type').innerText,
            // photo: employee.querySelector("a img").getAttribute("src"),
        }));

        // Names
        names_elements = document.querySelectorAll("h3");
        names_array = Array.from(names_elements);
        const scrapedNames = names_array.map(name => name.innerText);
        scrapedNames.forEach((element, index) => {
            employees[index].name = element;
        });

        // Titles
        titles_elements = document.querySelectorAll("h4");
        titles_array = Array.from(titles_elements);
        const scrapedTitles = titles_array.map(title => title.innerText);
        scrapedTitles.forEach((element, index) => {
            employees[index].title = element;
        });

        // Department
        department_name = document.querySelector("h1").innerText;
        for (let i = 0; i < scrapedNames.length; i++) {
            employees[i].department = department_name;
        };

        return employees;
    });

    console.log(data);

    await browser.close();
}

engage();