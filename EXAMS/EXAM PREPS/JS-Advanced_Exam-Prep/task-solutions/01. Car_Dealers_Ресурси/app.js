window.addEventListener("load", solve);

function solve() {
  let makeInputEl = document.getElementById('make');
  let modelInputEl = document.getElementById('model');
  let yearInputEl = document.getElementById('year');
  let fuelInputEl = document.getElementById('fuel');
  let originalInputEl = document.getElementById('original-cost');
  let sellingInputEl = document.getElementById('selling-price');
  let publishBTN = document.getElementById('publish');
  let tbodyEl = document.getElementById('table-body');
  let ulEl = document.getElementById('cars-list');
  let profitEl = document.getElementById('profit');

  publishBTN.addEventListener('click', (e) => {
    e.preventDefault();

    let make = makeInputEl.value;
    let model = modelInputEl.value;
    let year = yearInputEl.value;
    let fuel = fuelInputEl.value;
    let originalPrice = Number(originalInputEl.value);
    let sellingPrice = Number(sellingInputEl.value);

    if (!make || !model || !year || !fuel || !originalPrice || !sellingPrice || originalPrice >= sellingPrice) {
      return;
    }
    let trEl = document.createElement('tr');
    trEl.classList.add('row');

    let makeTdEl = document.createElement('td');
    let modelTdEl = document.createElement('td');
    let yearTdEl = document.createElement('td');
    let fuelTdEl = document.createElement('td');
    let originalTdEl = document.createElement('td');
    let sellingTdEl = document.createElement('td');

    makeTdEl.textContent = `${make}`;
    modelTdEl.textContent = `${model}`;
    yearTdEl.textContent = `${year}`;
    fuelTdEl.textContent = `${fuel}`;
    originalTdEl.textContent = `${originalPrice}`;
    sellingTdEl.textContent = `${sellingPrice}`;

    let tdBTNS = document.createElement('td');

    let editBTN = document.createElement('button');
    editBTN.textContent = 'Edit';
    editBTN.classList.add('action-btn','edit');

    let sellBTN = document.createElement('button');
    sellBTN.textContent = 'Sell';
    sellBTN.classList.add('action-btn','sell');

    tdBTNS.appendChild(editBTN);
    tdBTNS.appendChild(sellBTN);

    trEl.appendChild(makeTdEl);
    trEl.appendChild(modelTdEl);
    trEl.appendChild(yearTdEl);
    trEl.appendChild(fuelTdEl);
    trEl.appendChild(originalTdEl);
    trEl.appendChild(sellingTdEl);
    trEl.appendChild(tdBTNS);

    tbodyEl.appendChild(trEl);

    makeInputEl.value = '';
    modelInputEl.value = '';
    yearInputEl.value = '';
    fuelInputEl.value = '';
    originalInputEl.value = '';
    sellingInputEl.value = '';


    editBTN.addEventListener('click', (e) => {
      e.preventDefault();

      makeInputEl.value = make;
      modelInputEl.value = model;
      yearInputEl.value = year;
      fuelInputEl.value = fuel;
      originalInputEl.value = originalPrice;
      sellingInputEl.value = sellingPrice;

      trEl.remove();
    });


    sellBTN.addEventListener('click', (e) => {
      e.preventDefault();

      let liEl = document.createElement('li');
      liEl.classList.add('each-list');

      let makeModelSpanEl = document.createElement('span');
      let yearSpanEl = document.createElement('span');
      let priceSpanEl = document.createElement('span');

      makeModelSpanEl.textContent = `${make} ${model}`;
      yearSpanEl.textContent = year;
      priceSpanEl.textContent = sellingPrice - originalPrice;

      liEl.appendChild(makeModelSpanEl);
      liEl.appendChild(yearSpanEl);
      liEl.appendChild(priceSpanEl);

      ulEl.appendChild(liEl);

      trEl.remove();

      profitEl.textContent = (Number(profitEl.textContent) + (sellingPrice - originalPrice)).toFixed(2);
    })
  });
}

