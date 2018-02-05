const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', open));

function open() {
  panels.forEach(panel => {
  	 if(panel !== this) {
  	   panel.classList.remove('open');
  	   panel.classList.remove('active');
    }
  });
  
  this.classList.toggle('open');
  this.classList.toggle('active');
}
