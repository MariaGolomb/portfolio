function closeIframe(selector){

    document.querySelector(`#${selector}`).classList.remove('iframe_desktop', 'iframe_mobile')
    document.querySelector(`#${selector}`).classList.add('iframe_close')
}

function openIframe(selector){
    document.querySelector(`#${selector}`).classList.remove('iframe_close');
}




document.getElementById('iframe_open_1').addEventListener('click', function(){
    openIframe('iframe_first');

})

document.getElementById('iframe_open_2').addEventListener('click', function(){
    openIframe('iframe_second');

})




document.getElementById('button_back_1').addEventListener('click', function(){
    closeIframe('iframe_first');

})

document.getElementById('button_back_2').addEventListener('click', function(){
    closeIframe('iframe_second');

})












