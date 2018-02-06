//var cities = json file;
const input = document.getElementById('input');
const results = document.getElementById('results');
let value = '';

function reset() {
  getCities(value).forEach(result => {
    var div = document.createElement("div");
    div.classList.add('item');
    div.innerHTML = result.city + ', ' + result.state + '<div class="population">POPULATION : ' + result.population + '</div>';
    results.appendChild(div);
  });
}

reset();

input.addEventListener('keyup', function() {
  value = input.value;
  
  while(results.firstChild){
    results.removeChild(results.firstChild);
  }  
  
  if(value.length > 1) {
    getCities(value).forEach(result => {
      var div = document.createElement("div");
      div.classList.add('item');
      
      let regex = new RegExp(value, 'gi');
      var city = result.city.replace(regex, '<span style="color: white">' + value + '</span>');
      var state = result.state.replace(regex, '<span style="color: white">' + value + '</span>');
     
      div.innerHTML = city + ', ' + state + '<div class="population">POPULATION : ' + result.population + '</div>';
      results.appendChild(div);
      
    }); 
  }
  
  if(value.length < 1) {
    reset();  
  }
});

function getCities(query) {
  const regex = new RegExp(query, 'gi');
      
  return cities.filter(object => {
    return object.city.match(regex) || object.state.match(regex);  
  });
}