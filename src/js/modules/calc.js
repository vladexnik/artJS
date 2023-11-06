import { getResource } from "../services/requests";

const calc=(size, material, options, promocode, result)=>{

    const sizeBlock=document.querySelector(size),
        materialBlock=document.querySelector(material),
        optionsBlock=document.querySelector(options),
        promocodeBlock=document.querySelector(promocode),
        resultBlock=document.querySelector(result);
    
    let state;
    let sum=0;
    let sizeValue='', materialValue='0',optionsValue='0';
    getResource('assets/calcPrice.json')
        .then(res=>{
            state=res;
        })
        .catch(e=> console.log(e));

    function changeOption(element, event){
        element.addEventListener(event, (e) => {
            const target = e.target,
                select = target.id;  // size, material,options
                //console.log(select, element.value);
                               
                function calcFunc(state){
                    for(let key in state[select]){

                        if(element.value===key){
                            switch(select){
                                case "size":
                                    sizeValue=state[select][key]; // digit                              
                                    break;
                                
                                case "material":
                                    materialValue=state[select][key]; //digit                                   
                                    break;

                                case "options":
                                    optionsValue=state[select][key]; //digit
                                    break;
                            }
                            
                        }
                    }
                    sum=Math.round((+sizeValue)*(+materialValue)+(+optionsValue));
                    
                    if(sizeBlock.value=='' || materialBlock.value==''){
                         resultBlock.textContent='Выберите размер и материал картины';    
                    } else if(promocodeBlock.value==='IWANTPOPART'){
                        resultBlock.value=Math.round(sum*0.9)+' BYN';
                    } else {
                        resultBlock.value=sum+' BYN';
                    }
                }
                calcFunc(state);
        })
    }

    changeOption(sizeBlock, 'change');
    changeOption(materialBlock, 'change');
    changeOption(optionsBlock, 'change');
    changeOption(promocodeBlock, 'input');
}

export default calc;

// когда данные берем из статичной верстки
/* 
const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);

};

export default calc; 
*/