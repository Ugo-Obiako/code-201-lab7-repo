const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


const stores = [];


//Constructor function
function Store(location, minCustomers, maxCustomers, avgCookiesPerSale, sales){
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.sales = estimateSales(this);
  };


const newStore = new Store(location, this.minCustomers, this.maxCustomers, this.avgCookiesPerSale, "");



// Estimate sales
function estimateSales(store) {
  let sales = [];
  for (let i = 0; i < hours.length; i++) {
    let numCustomers = randomInRange(store.minCustomers, store.maxCustomers);
    let hourSales = Math.ceil(numCustomers * store.avgCookiesPerSale);
    sales.push(hourSales);
  }
  return sales;
  }


function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} 


// Estimate Seattle sales
function estimateSales(seattle) {
  let sales = [];
  for (let i = 0; i < hours.length; i++) {
    let numCustomers = randomInRange(seattle.minCustomers, seattle.maxCustomers);
    let hourSales = Math.ceil(numCustomers * seattle.avgCookiesPerSale);
    sales.push(hourSales);
  }
  return sales;
}


// Estimate Tokyo sales
function estimateSales(tokyo) {
  let sales = [];
  for (let i = 0; i < hours.length; i++) {
    let numCustomers = randomInRange(tokyo.minCustomers, tokyo.maxCustomers);
    let hourSales = Math.ceil(numCustomers * tokyo.avgCookiesPerSale);
    sales.push(hourSales);
  }
  return sales;
}



const seattle = new Store ("Seattle", 23, 65, 6.3, "");
const tokyo = new Store ("Tokyo", 3, 18, 2.3, "");
const dubai = new Store("Dubai", 19, 30, 4.2, "");
const paris = new Store ("Paris", 21, 50, 5.3, "");
const lima = new Store("Lima", 2, 15, 2.1, "");







const container = document.getElementById('tableContainer');



// Here is the render function: Used to render sales info and total Info for different stores
function render(store) {
  // need an article per cookie stand
  const tableElem = document.createElement('table');
  container.appendChild(tableElem);



  const row = document.createElement('tr');
  tableElem.appendChild(row);
  //heading.textContent = store.location;


  const hoursList = document.createElement('th');
  row.appendChild(hoursList);

  let totalSold = 0;

  for (let i = 0; i < store.sales.length; i++) {
    const salesItem = document.createElement('td');
    hoursList.appendChild(salesItem);
    let cookiesSoldThisHour = store.sales[i];
    totalSold += cookiesSoldThisHour;
    let salesInfo = `${hours[i]}: ${cookiesSoldThisHour} cookies sold in ${store.location}`;
    (hoursList);
    salesItem.textContent = salesInfo;
  }

  // add total line
  const totalItem = document.createElement('td');
  hoursList.appendChild(totalItem);
  let totalInfo = `Total: ${totalSold} cookies sold in ${store.location}`;
  totalItem.textContent = totalInfo;
}


render(seattle);
render(tokyo);
render(dubai);
render(paris);
render(lima);
render(newStore);


///////////////////////////////////
// render an instance of the Store using the form and event listener
//////////////////////////////////


// defined later
let dataRowParent = null;
let table = null;


Store.prototype.render = function() {
  const row = document.createElement('tr');
  dataRowParent.appendChild(row);

  const tdLocation = document.createElement('td');
  row.appendChild(tdLocation);
  tdLocation.textContent = this.location;

  const tdMinCustomers = document.createElement('td');
  row.appendChild(tdMinCustomers);
  tdMinCustomers.textContent = this.minCustomers;

  const tdMaxCustomers = document.createElement('td');
  row.appendChild(tdMaxCustomers);
  tdMaxCustomers.textContent = this.maxCustomers;

  const tdAvgCookiesPerSale = document.createElement('td');
  row.appendChild(tdAvgCookiesPerSale);
  tdAvgCookiesPerSale.textContent = this.avgCookiesPerSale;
}



// Form starts here
const storeForm = document.getElementById('addStoreForm');

// event listeners:
// event to listen to and the actions to take when the event occurs.
storeForm.addEventListener('submit',
  function (event) {
    event.preventDefault();
    const location = event.target.location.value;
    const minCustomers = event.target.minCustomers.value;
    const maxCustomers = event.target.maxCustomers.value;
    const avgCookiesPerSale = event.target.avgCookiesPerSale.value;

    const newStore = new Store(location, minCustomers, maxCustomers, avgCookiesPerSale, "");
    estimateSales(newStore);
    storeForm.reset();
    newStore.render();
    stores.push(newStore);
    renderTableFooter();
  }
);

// Helper Functions

function renderTable() {
  const parentElement = document.getElementById('storeProfiles');
  table = document.createElement('table');
  parentElement.appendChild(table);

  renderTableHeader();

  dataRowParent = document.createElement('tbody');
  table.appendChild(dataRowParent);

  renderTableFooter()
}

function renderTableHeader() {

  const thead = document.createElement('thead');
  table.appendChild(thead);

  const row = document.createElement('tr');
  thead.appendChild(row);

  const thLocation = document.createElement('th');
  row.appendChild(thLocation);
  thLocation.textContent = 'Location';

  const thMinCustomers = document.createElement('th');
  row.appendChild(thMinCustomers);
  thMinCustomers.textContent = 'MinCustomers';

  const thMaxCustomers = document.createElement('th');
  row.appendChild(thMaxCustomers);
  thMaxCustomers.textContent = 'MaxCustomers';

  const thAvgCookiesPerSale = document.createElement('th');
  row.appendChild(thAvgCookiesPerSale);
  thAvgCookiesPerSale.textContent = 'AvgCookiesPerSale';
}

function renderTableFooter() {
  // The footer row needs to be emptied out if it has already rendered,
  // since the footer renders repeatedly.

  let tfoot = document.querySelector('tfoot');

  if(tfoot) {
    tfoot.innerHTML = ""; // removes all children of existing tfoot
  } else {
    tfoot = document.createElement('tfoot');
    table.appendChild(tfoot);
  }

  const row = document.createElement('tr');
  tfoot.appendChild(row);

  const storeCountCell = document.createElement('th');
  row.appendChild(storeCountCell);
  storeCountCell.textContent = "store Count: " + stores.length;
  storeCountCell.setAttribute('colspan',4);
  storeCountCell.classList = ['text-left'];

}

// start 

renderTable();







