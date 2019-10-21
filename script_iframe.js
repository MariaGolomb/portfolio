function closeIframe(numOfIframe){
    document.querySelector(`#iframe_${numOfIframe}`).classList.remove('iframe_desktop', 'iframe_mobile')
    document.querySelector(`#iframe_background_${numOfIframe}`).classList.add('close_element')
    document.querySelector(`#button_mobile_${numOfIframe}`).classList.add('close_element')
    document.querySelector(`#button_desktop_${numOfIframe}`).classList.add('close_element')
}

function openIframe(selector){
    document.querySelector(`#${selector}`).classList.remove('close_element');
}


function changeDisplay(selector, clss){
    if(clss==='iframe_mobile'){
        document.querySelector(`#${selector}`).classList.remove('iframe_desktop');
        document.querySelector(`#${selector}`).classList.add(clss);
         
    } else if (clss==='iframe_desktop'){
        document.querySelector(`#${selector}`).classList.remove('iframe_mobile');
        document.querySelector(`#${selector}`).classList.add(clss) 
    } 
}

function displayButtons(numOfIframe){
    let windowWidth=window.innerWidth;
    if (windowWidth>=600 ){
        document.querySelector(`#button_mobile_${numOfIframe}`).classList.remove('close_element')
    }
}


function displayEducation(){
    console.log('start')
    console.log(document.querySelector('#education--expansion_panel').classList)
    if(document.querySelector('#education--expansion_panel').classList.contains('close_element')){
       document.querySelector('#education--expansion_panel').classList.remove('close_element')
    } else {
        document.querySelector('#education--expansion_panel').classList.add('close_element')
    }
}

document.getElementById('education-button').addEventListener('click', function(){ displayEducation()})


document.getElementById('iframe_open_1').addEventListener('click', function(){
    displayButtons('1');
    openIframe('iframe_background_1');

});

document.getElementById('iframe_open_2').addEventListener('click', function(){
    openIframe('iframe_background_2');
    displayButtons('2');

});


document.getElementById('button_back_1').addEventListener('click', function(){
    closeIframe('1');

})

document.getElementById('button_back_2').addEventListener('click', function(){
    closeIframe('2');

})

document.getElementById('button_mobile_1').addEventListener('click', function(){
    changeDisplay('iframe_1', 'iframe_mobile');
    document.querySelector('#button_mobile_1').classList.add('close_element');
    document.querySelector('#button_desktop_1').classList.remove('close_element');
});

document.getElementById('button_mobile_2').addEventListener('click', function(){
    changeDisplay('iframe_2', 'iframe_mobile')
    document.querySelector('#button_mobile_2').classList.add('close_element');
    document.querySelector('#button_desktop_2').classList.remove('close_element');
});

document.getElementById('button_desktop_1').addEventListener('click', function(){
    changeDisplay('iframe_1', 'iframe_desktop')
    document.querySelector('#button_desktop_1').classList.add('close_element');
    document.querySelector('#button_mobile_1').classList.remove('close_element');
});

document.getElementById('button_desktop_2').addEventListener('click', function(){
    changeDisplay('iframe_2', 'iframe_desktop')
    document.querySelector('#button_desktop_2').classList.add('close_element');
    document.querySelector('#button_mobile_2').classList.remove('close_element');
});



//--mobile
function touch(surface, numOfIframe){
    let startTime=0;
    let touchTime=0;
    let allowedTime=300;
    let distX=0;
    let distY=0;

    surface.addEventListener('touchstart', function(e){
        let touchObj=e.changedTouches[0];
        startX=touchObj.pageX;
        startY=touchObj.pageY;
        startTime=new Date().getTime();
        e.preventDefault();
    })

    surface.addEventListener('touchend', function(e){
        let touchObj=e.changedTouches[0];
        touchTime=new Date().getTime()-startTime;
        distX=touchObj.pageX-startX;
        distY=touchObj.pageY-startY;

        if (touchTime<=allowedTime ){
           if(distX===0 && distY===0 ){
            openIframe(`iframe_background_${numOfIframe}`);
           }
         }
         

    })
    
}

touch( document.getElementById('iframe_open_1'), '1');
touch( document.getElementById('iframe_open_2'), '2');



document.getElementById('button_back_1').addEventListener('touchstart', function(){
    closeIframe('1');

})

document.getElementById('button_back_2').addEventListener('touchstart', function(){
    closeIframe('1');

})

document.getElementById('button_mobile_1').addEventListener('touchstart', function(){
    changeDisplay('iframe_1', 'iframe_mobile')
});

document.getElementById('button_mobile_2').addEventListener('touchstart', function(){
    changeDisplay('iframe_2', 'iframe_mobile')
});

document.getElementById('button_desktop_1').addEventListener('touchstart', function(){
    changeDisplay('iframe_1', 'iframe_desktop')
});

document.getElementById('button_desktop_2').addEventListener('touchstart', function(){
    changeDisplay('iframe_2', 'iframe_desktop')
});










