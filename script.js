const insert = document.getElementById('insert');
window.addEventListener('keyup', (e)=>{
    
    insert.innerHTML =`<div class = "key" >
    <small>You Pressed  :</small>
    ${e.key ===' ' ? '' : e.key}
    
    </div>
    
    
    <div class = "keyCode" >
    ${e.keyCode}
  
    </div>
 `;
})