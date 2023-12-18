const input_area = document.getElementById("input_bar");
const submit_button = document.getElementById("submit_btn");
const jersey_number = 7;
const thala_vd = document.getElementById('thala_vd')
let thala_text = document.querySelector(".thala_text");
// thala_vd.play()


 function playVd() {
 thala_vd.play();
   
}
 function visible() {
  thala_vd.style.display = "block";
}


let length = null;
const  isThala = () => {
  length = input_area.value.trim().toLowerCase().length;
  if (length === jersey_number) {
    thala_text.classList.add("hidden");
         visible();
          playVd();
          thala_vd.addEventListener('timeupdate',()=> {
            if(thala_vd.currentTime == thala_vd.duration){
              thala_vd.style.display = "none";
            }
        })
  } else if (parseInt(input_area.value) === 7) {
    thala_text.classList.add("hidden");
    visible();
     playVd();
     thala_vd.addEventListener('timeupdate',()=> {
      thala_text.classList.add("hidden");
        if(thala_vd.currentTime == thala_vd.duration){
          thala_vd.style.display = "none";
         
        }
  })
} else { 
  if(thala_vd.currentTime > 0){
    thala_text.classList.add("hidden");
  } else {
    thala_text.classList.remove("hidden");
  }
    
  }
}
submit_button.addEventListener("click", isThala);
