
const filter=()=>{
    const menu=document.querySelector('.portfolio-menu'),
        items=menu.querySelectorAll('li'),
        btnAll=menu.querySelector('.all'),
        btnLovers=menu.querySelector('.lovers'),
        btnChef=menu.querySelector('.chef'),
        btnGirl=menu.querySelector('.girl'),
        btnGuy=menu.querySelector('.guy'),
        btnGrands=menu.querySelector('.grandmother'),
        btnGranddads=menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');     

    const typeFilter=(markType)=>{
        markAll.forEach(mark=>{
            mark.style.display='none';
            mark.classList.remove('animated', 'fadeIn');
        })

        no.style.display='none';
        no.classList.remove('animated', 'fadeIn');

        if(markType){
            markType.forEach(mark=>{
                mark.style.display='block';
                mark.classList.add('animated', 'fadeIn');
            })
        } else {
            no.style.display='block';
            no.classList.add('animated', 'fadeIn');
        }

    };

    // btnAll.addEventListener('click',()=>{
    //     typeFilter(markAll);
    // });

    // btnLovers.addEventListener('click',()=>{
    //     typeFilter(markLovers);
    // });
    // btnChef.addEventListener('click',()=>{
    //     typeFilter(markChef);
    // });
    // btnGirl.addEventListener('click',()=>{
    //     typeFilter(markGirl);
    // });
    // btnGuy.addEventListener('click',()=>{
    //     typeFilter(markGuy);
    // });
    // btnGrands.addEventListener('click',()=>{
    //     typeFilter();
    // });
    // btnGranddads.addEventListener('click',()=>{
    //     typeFilter();
    // });

    menu.addEventListener('click',(e)=>{
        let target=e.target;
        if(target && target.tagName=="LI"){
            items.forEach(btn=>{
                btn.classList.remove('active');
                target.classList.add('active');
            })
        }
    })

    menu.addEventListener('click', (e) => {
        let classSelect = e.target.classList[0];
        console.log(classSelect);
        let allElems = wrapper.querySelectorAll(`.${classSelect}`)
        typeFilter(allElems);
      })
}

export default filter;