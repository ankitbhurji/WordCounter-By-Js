let textbox = document.getElementById("textbox");
textbox.addEventListener('input', function(){
    var text = this.value;
    var char = text.length;
    document.getElementById("char").innerHTML = char;


    text = text.trim();
    let words = text.split(" ");
    let cleanList = words.filter(function(elm){
        return elm != "";
    });
    document.getElementById("word").innerHTML = cleanList.length;
});






let animation = anime.timeline({
    duration: 4000, 
    easing: 'easeInOutSine',
    // direction: 'alternate', 
    loop: true
  });           
    
  animation.add({
    targets: '#main',
    backgroundColor: 'rgb(255, 136, 137)'
  }).add({
    targets: '#main',
    backgroundColor: 'rgb(255, 211, 137)'
  }).add({
    targets: '#main',
    backgroundColor: 'rgb(255, 211, 255)'
    
  }).add({
    targets: '#main',
    backgroundColor: 'rgb(255, 211, 2)'
  }).add({
    targets: '#main',
    backgroundColor: 'rgb(255, 211, 25)'
  }).add({
    targets: '#main',
    backgroundColor: 'rgb(255, 21, 255)'
  }).add({
    targets: '#main',
    backgroundColor: 'rgb(255, 0, 255)'
  });




  let animation1 = anime.timeline({
    duration: 1000, 
    easing: 'easeInOutSine'
  });
  animation1.add({
    targets: '#main',
    translateY: 100,
  })




  let animation2 = anime({
    targets: 'p',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(50, {grid: [14, 5], from: 'center'})
  });


     