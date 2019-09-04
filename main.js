const pies = [
  {
    name: 'Dutch Apple Pie',
    imageUrl: 'https://search.chow.com/thumbnail/800/0/www.chowstatic.com/assets/2013/09/30859_Recipeimage_620x413_dutch_apple_pie.jpg',
    instructor: 'zoe',
    iceCream: 'Vanilla',
  },
  {
    name: 'Berry Pie',
    imageUrl: 'https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg',
    instructor: 'zoe',
    iceCream: 'banana',
  },
  {
    name: 'Pumpkin Pie',
    imageUrl: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg',
    instructor: 'michael',
    iceCream: 'Vanilla',
  },
  {
    name: 'Shoo Fly Pie',
    imageUrl: 'https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg',
    instructor: 'michael',
    iceCream: 'Coffee',
  },
  {
    name: 'Pecan Pie',
    imageUrl: 'https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg',
    instructor: 'callan',
    iceCream: 'Vanilla',
  },
  {
    name:'Keylime Pie',
    imageUrl: 'https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201851/0020/img38l.jpg',
    instructor: 'callan',
    iceCream: 'none',
  },
];

const printToDom = (stringToPrint, divId) =>{
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML = stringToPrint;
}

const cardBulder = (pieArr) =>{
  // add row here from layout
  let pieString = '<div class="row">';
  for(let i =0;i<pieArr.length;i++){
 const currentPie = pieArr[i];
 pieString += `  
 <div class="col-3">
 <div class="card">
 <img src="${currentPie.imageUrl}" class="card-img-top " alt="...">
 <div class="card-body">
   <h5 class="card-title">${currentPie.name}</h5>
   <p class="card-text">${currentPie.instructor}   ${currentPie.iceCream}</p>
 </div>
 </div>
</div>`;

  }
  
  pieString += '</div>';
  printToDom(pieString,'pie-zone');
}
cardBulder(pies);