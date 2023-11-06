const accordion=(triggersSelector, itemsSelector)=>{ // открытие ответов на вопросы

    const btns=document.querySelectorAll(triggersSelector),
        blocks=document.querySelectorAll(itemsSelector);
   
    btns.forEach(btn=>{
        btn.addEventListener('click',function (){
            btns.forEach(btnOnePressed=>{ // для закрытия блока после открытия другого
                if(!this.classList.contains('active-style')){
                    btnOnePressed.classList.remove('active-style');
                    btnOnePressed.nextElementSibling.classList.remove('active-content');
                    btnOnePressed.nextElementSibling.style.maxHeight='0px';
                }
            });

            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');
            if (this.classList.contains('active-style')){
                this.nextElementSibling.style.maxHeight=this.nextElementSibling.scrollHeight+80+'px';

            } else {
                this.nextElementSibling.style.maxHeight='0px';
            }
        })
    })
    

//     blocks.forEach(block=>{
//         block.classList.add('animated','fadeInDown');
//     }); 
    
//     btns.forEach(btn=>{
//         btn.addEventListener('click',function (){
//             if(!this.classList.contains('active')){
//                 btns.forEach(btn => {
//                      btn.classList.remove('active', 'active-style');                 
//                 });
//                 this.classList.add('active', 'active-style');
//             }
//         })
//     })
    
}

export default accordion;