<template>
<div id="container">
  <p>안녕하세요</p>
</div>
</template>

<script>
import gsap from 'gsap'
const n = 20;
export default {
  name: 'Slider',
  mounted() {
    gsap.timeline()
    .set('#container', {perspective:800})

  for (let i=0; i<n; i++){ 

    let b = document.createElement('div');
    // let c = document.createElement('p')
    b.classList.add('box');
    document.getElementById('container').appendChild(b);
    // document.getElementById('div').appendChild(c);

    gsap.set(b, {
      left:'50%',
      top:'50%',
      x:'-50%',
      y:'-50%',
      z:1000,
      width:300,
      height:300,
      borderRadius:20,
      background:()=>'hsl('+(i/n*360)+',100%,50%)'
    });
    
    gsap.fromTo(b, {
      scaleY:0,
      // opacity:0.7,
      zIndex:()=>(i<n/2)?-i:i,
      rotationY:90+i/n*206.5,
      transformOrigin:String("50% 50% -1060%")
    },{
      scaleY:1,
      duration:1,
      delay:1-0.5*(i/n),
      ease:'elastic'
    })
    
    b.onmouseenter = (e)=>{ gsap.to(b, {duration:0.3, rotationX:-14, y:'-130%', ease:'back.out(6)'}); }   // eslint-disable-line no-unused-vars
    b.onmouseleave = (e)=>{ gsap.to(b, {duration:0.4, rotationX:0, y:'-50%'}); } // eslint-disable-line no-unused-vars
  }

  window.onmousemove = (e)=>{
    gsap.to('.box', {duration:0.6, rotationY:(i)=>45+i/n*206.5+90*(e.clientX/window.innerWidth) });
}
  }

}

</script>

<style scoped>
#container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow:hidden;
  /* background:#000; */
}

div[class="box"], img {
  position:absolute;
  user-select: none;
  overflow:hidden;  
}
</style>