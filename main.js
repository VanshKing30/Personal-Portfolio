const strength = document.getElementById('length');
const length_display =  document.getElementById('length-res');


strength.addEventListener('input' ,()=>{
    length_display.innerHTML = strength.value;
})
