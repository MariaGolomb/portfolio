document.querySelector('#first_pr_button').addEventListener('click', function(){

    if(document.querySelectorAll('.description--text')[0].classList.contains('show_description')){
        document.querySelectorAll('.description--text')[0].classList.remove('show_description')
    } else {
        document.querySelectorAll('.description--text')[0].classList.add('show_description');
    }

});

document.querySelector('#second_pr_button').addEventListener('click', function(){

     if(document.querySelectorAll('.description--text')[1].classList.contains('show_description')){
         document.querySelectorAll('.description--text')[1].classList.remove('show_description')
     } else {
         document.querySelectorAll('.description--text')[1].classList.add('show_description');
     }
 
 });

 document.querySelector('#first_pr_button').addEventListener('touchstart', function(){
    if(document.querySelectorAll('.description--text')[0].classList.contains('show_description')){
        document.querySelectorAll('.description--text')[0].classList.remove('show_description')
    } else {
        document.querySelectorAll('.description--text')[0].classList.add('show_description');
    }
 });

 document.querySelector('#second_pr_button').addEventListener('touchstart', function(){

    if(document.querySelectorAll('.description--text')[1].classList.contains('show_description')){
        document.querySelectorAll('.description--text')[1].classList.remove('show_description')
    } else {
        document.querySelectorAll('.description--text')[1].classList.add('show_description');
    }

});

/*
document.querySelector('.slider').addEventListener('touchstart', function(){
    document.querySelectorAll('.description--text').forEach(
        project=>{
            if(project.classList.contains('show_description')){
                project.classList.remove('show_description')
            }
        }
    )
})

document.querySelector('.slider').addEventListener('mousedown', function(){
    document.querySelectorAll('.description--text').forEach(
        project=>{
            if(project.classList.contains('show_description')){
                project.classList.remove('show_description')
            }
        }
    )
})
*/
 window.addEventListener('resize', function(){
    
    document.querySelectorAll('.description--text').forEach(
        project=>{
            if(project.classList.contains('show_description')){
                project.classList.remove('show_description')
            }
        }
    )

 });