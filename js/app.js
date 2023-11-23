const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Constructor function
function Store(location, minCustomers, maxCustomers, avgCookiesPerSale, sales){
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.sales = estimateSales(this);
  };





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

///////////////////////////////////
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

  const tdInterests = document.createElement('td');
  row.appendChild(tdInterests);
  tdInterests.textContent = this.interests.join();

  const tdKids = document.createElement('td');
  row.appendChild(tdKids);
  tdKids.textContent = this.isGoodWithKids;

  const tdDogs = document.createElement('td');
  row.appendChild(tdDogs);
  tdDogs.textContent = this.isGoodWithDogs;

  const tdCats = document.createElement('td');
  row.appendChild(tdCats);
  tdCats.textContent = this.isGoodWithOtherCats;
}








