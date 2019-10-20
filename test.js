function changeDisplay(clss){
    if(clss==='iframe_mobile'){
        document.getElementsByClassName('iframe_first')[0].classList.remove('iframe_desktop');
        document.getElementsByClassName('iframe_first')[0].classList.add(clss) 
    } else if (clss==='iframe_desktop'){
        document.getElementsByClassName('iframe_first')[0].classList.remove('iframe_mobile');
        document.getElementsByClassName('iframe_first')[0].classList.add(clss) 
    } 
}

function closeIframe(){
    document.getElementsByClassName('iframe_first')[0].classList.remove('iframe_desktop', 'iframe_mobile')
    console.log(document.getElementsByClassName('iframe_first')[0].classList)
    document.getElementsByClassName('iframe_first')[0].classList.add('iframe_close')
}

function openIframe(){
  document.getElementsByClassName('iframe_first')[0].classList.remove('iframe_close')
}



document.getElementById('button_mobile').addEventListener('click', function(){
    changeDisplay('iframe_mobile')
})

document.getElementById('button_mobile').addEventListener('touchstart', function(){
    changeDisplay('iframe_mobile')
})



document.getElementById('button_desktop').addEventListener('click', function(){
    changeDisplay('iframe_desktop');
})

document.getElementById('button_desktop').addEventListener('touchstart', function(){
    changeDisplay('iframe_desktop');
})



document.getElementById('button_back').addEventListener('click', function(){
    closeIframe();

})

document.getElementById('button_back').addEventListener('touchstart', function(){
    closeIframe();

})



document.getElementById('button_open').addEventListener('click', function(){
    openIframe();

})

document.getElementById('button_open').addEventListener('touchstart', function(){
    openIframe();

})
