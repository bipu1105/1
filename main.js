function fun(){
    let profile = document.querySelector('.testimonials .active img');
    let profileAll = document.querySelectorAll('.testimonials img');
    let imgHeight = profile.scrollWidth;
    profileAll.forEach(function(images){
        images.style.height = imgHeight + 'px'        
        images.style.padding = '10%';        
    })
}
fun()
window.addEventListener('resize' , ()=>{fun()})