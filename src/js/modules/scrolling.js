
const scrolling=(upSelector)=>{
    // var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // console.log( scrollTop);
    // console.log(document.documentElement.clientHeight);
    // console.log(document.documentElement.scrollHeight);

    const upElem=document.querySelector(upSelector)

    window.addEventListener('scroll', ()=>{
        if(document.documentElement.scrollTop > 1650){
            upElem.classList.remove('bounceOut');
            upElem.classList.add('animated','bounceIn');
        } else {
            upElem.classList.remove('bounceIn');
            upElem.classList.add('bounceOut');
        }
    });

    // request animation frame

    let links=document.querySelectorAll('[href^="#"]'),
        speed=0.09;

    links.forEach(link=>{
        link.addEventListener('click', function(e){
            e.preventDefault();

            let widthTop=document.documentElement.scrollTop; 
            //сколько проскроллили

            let hash=this.hash, //#up
                toBlock=document.querySelector(hash).getBoundingClientRect().top,  // how many px and direction(sign)
                start=null;
            
            requestAnimationFrame(step);

            function step(time){
                if(start=== null){
                    start=time;
                }
                let progress=time-start,
                    r=(toBlock<0 ? Math.max(widthTop - progress / speed, widthTop+toBlock) : 
                    Math.min(widthTop + progress / speed, widthTop+toBlock)); // куда скроллить сколько

                    document.documentElement.scrollTo(0,r);
                    if(r!=widthTop+toBlock){
                        requestAnimationFrame(step);
                    }
                    else {
                        location.hash=hash;
                    }
            }   
        })
    })


    // pure JS
    // const element = document.documentElement,
    //       body = document.body;

    // const calcScroll = () => {
    //     upElem.addEventListener('click', function(event) {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
    //         console.log(scrollTop);
    //         if (this.hash !== '') {
    //             event.preventDefault();
    //             let hashElement = document.querySelector(this.hash),
    //                 hashElementTop = 0;

    //             while (hashElement.offsetParent) {
                   
    //                 hashElementTop += hashElement.offsetTop;
    //                 hashElement = hashElement.offsetParent;
    //             }

    //             hashElementTop = Math.round(hashElementTop);
    //             smoothScroll(scrollTop, hashElementTop, this.hash);
    //         }
    //     });
    // };

    // const smoothScroll = (from, to, hash) => {
    //     let timeInterval = 1,
    //         prevScrollTop,
    //         speed;

    //     if (to > from) {
    //         speed = 30;
    //     } else {
    //         speed = -30;
    //     }
        
    //     let move = setInterval(function() {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (
    //             prevScrollTop === scrollTop ||
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //         } else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };

    // calcScroll();


}

export default scrolling;