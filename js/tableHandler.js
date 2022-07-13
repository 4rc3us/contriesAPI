import {getData} from './countriesData.js';

const body = document.querySelector('body');

const table = document.createElement('table');
table.setAttribute('class', 'table');
table.setAttribute('border', '1')

async function buildTbody() {
    const tbody = document.createElement('tbody');
    let data = await getData('https://restcountries.com/v3.1/all');

    data.slice(0, 10).forEach(country => {
        const tr = getTr();
        tr.append(getTd(country.name.common), getTd(country.region));
        tbody.append(tr);
    })

    return tbody;
}

function getTr() {
    return document.createElement('tr');
}

function getTh(scope, text) {
    const th = document.createElement('th');
    th.setAttribute('scope', scope);
    th.textContent = text;

    return th;
}

function getTd(text) {
    const td = document.createElement('td');
    td.textContent = text;

    return td;
}

function buildHead() {
    const thead = document.createElement('thead');
    const tr = getTr();

    tr.append(getTh('col', 'Name'), getTh('col', 'region'))
    thead.append(tr)
    return thead;
}

const thead = buildHead();

const tbody = buildTbody();

table.append(thead, await tbody);

body.append(table);