
const mask=(selector)=>{


    let setCursorPosition=(pos, elem)=>{
        elem.focus();

        if(elem.setSelectionRange){
            elem.setSelectionRange(pos,pos)
        } else if (elem.createTextRange) {
            let range=elem.createTextRange();
        
            range.collapse(true); // 

            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    function createMask(event){
        let matrix='+375 (__) ___ __ __',
            i=0,
            def=matrix.replace(/\D/g, ''),
            val=this.value.replace(/\D/g, ''); // избавл от не цифр

        if(def.length>=val.length){
            val=def; 
        }
        
        this.value=matrix.replace(/./g, function(a){
            return /[_\d]/.test(a) && i<val.length ?  val.charAt(i++) : i>=val.length ? '' : a;
        });
        //console.log(val.length);

        if(event.type==='blur'){
            if(this.value.length==2){
                this.value='';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }

        let btnsOrder=document.querySelectorAll('.button-order');
        btnsOrder.forEach(btnOrder=>{
            if(val.length<12){
               btnOrder.setAttribute("disabled","disabled");
            }
            else{
                btnOrder.removeAttribute("disabled","disabled");
            }
        })
       

    }
    
    let inputs=document.querySelectorAll(selector);

    inputs.forEach(input=>{
        input.addEventListener('mouseup', createMask, (e)=>{
            e.preventDefault();
            input.setSelectionRange(4);
        });

        input.addEventListener('keyup', createMask, (e)=>{
            if (e.code==='ArrowLeft'){
                e.preventDefault();
                input.setSelectionRange(4);
            }
        })
        

    });

    inputs.forEach(input=>{
        input.addEventListener('input', createMask); // формируются вводные
        input.addEventListener('focus', createMask); // устан-ся курсор
        input.addEventListener('blur', createMask); // очищ-ся введённые

    })

}

export default mask;