
darkLight();
menuGet();
searchBar();
signupBoxInput();

document.addEventListener("scroll",()=>{
    if(scrollY>80){
        document.getElementById("header").classList.add("active-header");
    }
    else if(scrollY<80){
        document.getElementById("header").classList.remove("active-header");
    }

    let menu = document.querySelector("#nav");
    menu.classList.remove("active-navbar");
    document.querySelector(".search-bar").classList.remove("active-search");
    document.querySelector(".signup-box").classList.remove("active-signup-box");


})

function darkLight() {

    const switchIcon = document.getElementById("switch") 
    switchIcon.addEventListener("click",()=>{

     document.body.classList.toggle("active-light")

    })


}



function menuGet(){
    let menuBtn = document.getElementById("menu");
    let menu = document.querySelector("#nav");
    menuBtn.addEventListener("click",()=>{
    
    menu.classList.toggle("active-navbar");
    
    document.querySelector(".search-bar").classList.remove("active-search");
    })
}


function searchBar(){
    let menu = document.querySelector("#nav");
  document.getElementById("searchIcon").addEventListener("click",()=>{

     console.log("5")

  document.querySelector(".search-bar").classList.toggle("active-search");
  menu.classList.remove("active-navbar");

      
  
  })
}






const showSignup = () =>{

  document.querySelector(".signup-box").classList.add("active-signup-box")

}
const removeSignUp = () =>{

    document.querySelector(".signup-box").classList.remove("active-signup-box")

}

function signupBoxInput(){
  
 document.getElementById("userNames").addEventListener("keyup",()=>{
        const regex = /^[A-Za-z]+( )[A-Za-z]+[ ]*?$/g
         const userNameImg = document.getElementById("userNameImg");
         
        const userName = document.getElementById("userNames").value;
        const regexTest = regex.test(userName);
        console.log(regexTest);
        
        
             
        const imgSrc = regexTest ? "./imags/right.png" : "./imags/wrong.png";


        const alreadyImg = userNameImg.querySelector(".left-img-box");

        if(alreadyImg){
            alreadyImg.remove()
        }

        const wrong = document.createElement("img");
        wrong.classList.add("left-img-box")
        wrong.src = imgSrc
        userNameImg.appendChild(wrong); 
        
        setTimeout(()=>{
            wrong.remove()

        },2000);

 });

 document.getElementById("userMail").addEventListener("keyup",()=>{
     const userMail = document.getElementById("userMail").value;
     const userMailImg = document.getElementById("userEmailImg");
     const regex = /[a-z]+[0-9]*?[@](gmail|outlook)(.com)/g   ;
     const regexTest = regex.test(userMail);
       
     const imgSrc = regexTest ? "./imags/right.png" : "./imags/wrong.png";

     const alreadyImg = userMailImg.querySelector(".left-img-box");

     if(alreadyImg){
        alreadyImg.remove()
    }
    const wrong = document.createElement("img");
    wrong.classList.add("left-img-box")
    wrong.src = imgSrc
    userMailImg.appendChild(wrong); 
    setTimeout(()=>{
        wrong.remove()

    },2000);
 })

 document.getElementById("userPassword").addEventListener("keyup",()=>{


   

    const password =  document.getElementById("userPassword").value;
    const userPasswordImg = document.getElementById("userPasswordImg");
    const passwordRegex = /^[A-Za-z\d]{8,}$/g;
    const regexTest= passwordRegex.test(password);
   
    const imgSrc = regexTest ? "./imags/right.png" : "./imags/wrong.png";
    const alreadyImg = userPasswordImg.querySelector(".left-img-box");
    console.log(regexTest)
    if(alreadyImg){
        alreadyImg.remove();
    }
    const wrong = document.createElement("img");
    wrong.classList.add("left-img-box")
    wrong.src = imgSrc;
    userPasswordImg.appendChild(wrong);

    
    setTimeout(() => {
        wrong.remove()
    },5000);

    

 });
 document.getElementById("userRePassword").addEventListener("keyup",()=>{




   const rePassword =  document.getElementById("userRePassword").value;
   const password =  document.getElementById("userPassword").value;
   const userRePasswordImg = document.getElementById("userRePasswordImg");
   let equal = rePassword === password;
   console.log(equal)
        
   const imgSrc = equal ? "./imags/right.png" : "./imags/wrong.png";
    const alreadyImg =  userRePasswordImg.querySelector(".left-img-box");
    
    if(alreadyImg){
        alreadyImg.remove();
    }
    const wrong = document.createElement("img");
    wrong.classList.add("left-img-box")
    wrong.src = imgSrc;
    userRePasswordImg.appendChild(wrong);

    
    
    setTimeout(() => {
        wrong.remove()
    },5000);
   

 })

}

document.getElementById("showHide").addEventListener("click",()=>{

const input = document.getElementById("userPassword");
const showHide = document.getElementById("showHide");
if(input.type=="password"){
    input.type="text";
    showHide.src="./imags/eye.png";
}else{
    input.type ="password";
    showHide.src = "./imags/hide.png"
}


})



document.getElementById("showHide2").addEventListener("click",()=>{

    const input = document.getElementById("userRePassword");
    const showHide = document.getElementById("showHide2");
    if(input.type=="password"){
        input.type="text";
        showHide.src="./imags/eye.png";
    }else{
        input.type ="password";
        showHide.src = "./imags/hide.png"
    }
    
    
    })