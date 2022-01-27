function fun(){
    let profile = document.querySelector('.testimonials .active img');
    let profileAll = document.querySelectorAll('.testimonials img');
    let imgHeight = profile.clientWidth;
    profileAll.forEach(function(images){
        images.style.height = imgHeight + 'px'        
        images.style.padding = '10%';        
    })
}
fun()
window.addEventListener('resize' , ()=>{fun()})

// // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


