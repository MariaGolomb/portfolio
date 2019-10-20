let items=document.querySelectorAll('.item');
let currentItem=0;
let isEnebled=true;

function changeCurrentItem(n) {
    currentItem=(n+items.length)% items.length;
}

function hideItem(direction){
    isEnebled=false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('active', direction)
    })
}

function showItem(direction){
    items[currentItem].classList.add('next', direction);
        items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnebled=true;
    })
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n-1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n+1);
    showItem('from-right');
}

document.querySelector('.control--left').addEventListener('click', function(){
    if(isEnebled){
        previousItem(currentItem);
    }
})

document.querySelector('.control--right').addEventListener('click', function(){
    if(isEnebled){
        nextItem(currentItem);
    }
})




const swipedetect=(el)=>{

    let surface=el;
    let startX=0;
    let startY=0;
    let distX=0;
    let distY=0;
    let dist=0;

    let startTime=0;
    let elapsedTime=0;

    let threshold=150; //rasstojanie 
    let restraint=100; //nt vyshe iznochalnoj vysoty na 100
    let allowedTime=300;

    surface.addEventListener('mousedown', function(e){
        //dist=0;
        startX=e.pageX;
        startY=e.pageY;
        startTime=new Date().getTime();
        e.preventDefault();
    });

    surface.addEventListener('mouseup', function(e){
        distX=e.pageX-startX;
        distY=e.pageY-startY;
        elapsedTime=new Date().getTime()-startTime;

        if(elapsedTime<=allowedTime){
            if(Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
                if(distX>0){
                    if(isEnebled){
                        previousItem(currentItem);
                    }
                } else {
                    if(isEnebled){
                        nextItem(currentItem);
                    }
                }
            }
        }


        e.preventDefault();
    });

    surface.addEventListener('touchstart', function(e){
        if(e.target.classList.contains('arrow--left')||e.target.classList.contains('arrow--right')||e.target.classList.contains('control--left')||e.target.classList.contains('control--right')){
            if(e.target.classList.contains('control--left')||e.target.classList.contains('arrow--left')){
                if(isEnebled){
                    previousItem(currentItem);
                }
            } else if (e.target.classList.contains('control--right')||e.target.classList.contains('arrow--right')){
                if(isEnebled){
                    nextItem(currentItem);
                }
            }
        };

        let touchObj=e.changedTouches[0];
        startX=touchObj.pageX;
        startY=touchObj.pageY;
        startTime=new Date().getTime();
        e.preventDefault();
    });

    surface.addEventListener('touchend', function(e){
        let touchObj=e.changedTouches[0];
        distX=touchObj.pageX-startX;
        distY=touchObj.pageY-startY;
        elapsedTime=new Date().getTime()-startTime;

        if(elapsedTime<=allowedTime){
            if(Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
                if(distX>0){
                    if(isEnebled){
                        previousItem(currentItem);
                    }
                } else {
                    if(isEnebled){
                        nextItem(currentItem);
                    }
                }
            }
        }


        e.preventDefault();
    });

    surface.addEventListener('touchmove', function(e){
        e.preventDefault();
    });





}

let elem=document.querySelector('.slider');
swipedetect(elem);