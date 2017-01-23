var catData = [
{name: "Boba", food: "Sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
{name: "Barnaby", food: "Tuna", image: "fake_barnaby.jpg"},
{name: "Max", food: "Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
{name: "Boris", food: "Goldfish", image: "Boris_Goldfish.jpg"}
];

var createCat = function(){
  var cat = document.createElement('ul');
  cat.classList.add('cat');
  return cat;
};

var createCatName = function(name){
  var catName = document.createElement('li');
  catName.innerText = 'Name: ' + name;
  return catName;
};

var createCatFood = function(food){
  var catFood = document.createElement('li');
  catFood.innerText = 'Favourite food: ' + food;
  return catFood;
};

var createCatImage = function(image){
  var catImage = document.createElement('img');
  catImage.src = image;
  catImage.width = "500";
  return catImage;
};

var appendElements = function(cats, cat, catName, catFood, catImage){
  cat.appendChild(catName);
  cat.appendChild(catFood);
  cat.appendChild(catImage);
  cats.appendChild(cat);
};

var addCat = function(name, food, image){
  var cat = createCat();
  var catName = createCatName(name);
  var catFood = createCatFood(food);
  var catImage = createCatImage(image);
  var cats = document.getElementById('cats');
  appendElements(cats, cat, catName, catFood, catImage);
};

var app = function(){

for(cat of catData){
  addCat(cat.name, cat.food, cat.image);
}

  // addCat("Boris", "Goldfish", "Boris_Goldfish.jpg");

// var cat = document.createElement('ul');
// cat.classList.add('cat');

// var catName = document.createElement('li');
// catName.innerText = "Name: Boris";

// var catFood = document.createElement('li');
// catFood.innerText = "Favourite Food: Fish";

// var catImage = document.createElement('img');
// catImage.src = 'https://www.google.co.uk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjIwIWYzdjRAhVBNhoKHY7sCcsQjRwIBw&url=http%3A%2F%2Fcattime.com%2Fcat-breeds%2Fbritish-shorthair-cats&psig=AFQjCNESGEhkBQafi1YbmWROzFjaA6bCxQ&ust=1485272447904728';

// cat.appendChild(catName);
// cat.appendChild(catFood);
// cat.appendChild(catImage);

// var catSection = document.querySelector('#cats');
// catSection.appendChild(cat);

}

window.onload = app;