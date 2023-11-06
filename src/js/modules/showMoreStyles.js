import { getResource } from "../services/requests";


const showMoreStyles=(trigger, stylesr, wrapper)=>{

    const cards=document.querySelectorAll(stylesr),
        btn=document.querySelector(trigger);
    
    btn.addEventListener('click',function () { // чтоб контекст вызова ссылался на 
        getResource('assets/db.json')  // http://localhost:3000/styles
            .then(res=>{ createCards(res.styles);
                this.remove();
             })
            .catch(error=> {console.log(error)
                
                let message=document.createElement('div');
                message.classList.add('animated', 'fadeInDown');
                message.textContent='Загрузка не удалась. Повторите ещё раз или перезагрузите страницу';
                message.style.cssText=`
                    text-align: center; 
                    padding-bottom: 0px;
                    `;
                document.querySelector(wrapper).appendChild(message);
                btn.style.dispaly="none";
                this.setAttribute('disabled', 'disabled');
                setTimeout(() => {
                    message.remove();
                    this.removeAttribute('disabled');
                }, 2000);
            })  
    });

    function createCards(responseCards){
        responseCards.forEach(item => {
            let card=document.createElement('div');
            
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML=`
                <div class='styles-block'>
                    <img src=${item.src} alt>
                    <h4>${item.title}</h4>
                    <a href=${item.link}>Подробнее</a>
                </div>
            `;
            document.querySelector(wrapper).appendChild(card);

        });
    }

         // статич верстка
    // cards.forEach(card=>{
    //     card.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click',()=>{
    //     cards.forEach(card=>{
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     btn.remove();
    // })
   
}
export default showMoreStyles;