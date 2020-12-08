let menu = document.querySelector('.menu');
let dropDown = document.querySelector('.drop-down');
let logo = document.querySelector('#logo');
let title = document.querySelector('.title');
let factText = document.querySelector('.facts-text');
let factTitle = document.querySelector('.facts-title');
let factImg = document.querySelector('.facts-img');


const setupEventListeners = function() {
    menu.addEventListener('click', displayMenu);

}

const displayMenu = function() {
    if (menu.classList.contains('fa-bars')) {
      //menu is closed
      menu.classList.remove('fa-bars');
      menu.classList.add('fa-times');
      dropDown.classList.remove('hidden');
    } else if (menu.classList.contains('fa-times')) {
      // menu is open
      menu.classList.remove('fa-times');
      menu.classList.add('fa-bars');
      dropDown.classList.add('hidden');
    }
  };

  
function hideMenu() {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } if (dropDown.classList.contains('hidden')) {
        
    } else {
        dropDown.classList.add('hidden');
    }
}

function showMenu() {
    if (dropDown.classList.contains('hidden')) {
        dropDown.classList.remove('hidden');
    } if (menu.classList.contains('hidden')) {
        
    } else {
        menu.classList.add('hidden');
    }
}

function showText() {
    if (document.querySelector('#facts')) {
        factText.classList.remove('hidden')
        factTitle.classList.remove('hidden')
        // factImg.classList.add('hidden')
    }
}

function showImage() {
    if (document.querySelector('#facts')) {
        factText.classList.add('hidden')
        factTitle.classList.add('hidden')
        // factImg.classList.remove('hidden')
    }
}

  function loadPageSize() {
    // let offset = title.offsetWidth/2;
    // titlePosition = 'left: calc(50% - ' + offset + ');';
    // title.style = titlePosition;

    if (window.innerWidth > '920' || window.innerWidth >= '920') {
        console.log('920')
        
        showMenu();
        showImage();

        if (title) { 

        title.style = ''
        }

       
    } else if (window.innerWidth > '858') {
        console.log('858')
        showMenu()
        showImage();

    } else if (window.innerWidth > '650') {
        console.log('800')
        showImage();
        hideMenu();

        if(title) {
            // title.innerHTML = 'Cycling Towards a Greener Tomorrow'
        }
     
    }  else {
        console.log('650')
        console.log(title.offsetWidth)
        hideMenu()
        showText()
        // if (window.innerWidth < '650') 

    }    
    
    // } else
}

  window.onresize = loadPageSize;

  window.onload = function() {
    setupEventListeners();
    loadPageSize();
   
  }