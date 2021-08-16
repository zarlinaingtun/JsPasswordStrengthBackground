//UI
const background=document.getElementById('background');
const password=document.getElementById('password');
const eyeicon=document.getElementById('eye');

// Event Listener
password.addEventListener('input',(e)=>{
    // console.log('hey');

    const input=e.target.value;
    const inlength=input.length;
    // console.log(inlength);
    // console.log(20 - inlength * 2);

    const blurvalue=20 - inlength * 2;
                         //    template string
    background.style.filter=`blur(${blurvalue}px)`;
});

eyeicon.addEventListener('click',()=>{
    if(eyeicon.classList.contains('fa-eye')){
        console.log('show password');

        // Method 1
        // eyeicon.classList.remove('fa-eye');
        // eyeicon.classList.add('fa-eye-slash');

        // Method 2
        eyeicon.classList.replace('fa-eye','fa-eye-slash');
        
        // password.type="text";
        password.setAttribute('type','text');
    }
    else{
        console.log('hide password');
        
        // Method 1
        // eyeicon.classList.add('fa-eye');
        // eyeicon.classList.remove('fa-eye-slash');
        
        // Method 2
        eyeicon.classList.replace('fa-eye-slash','fa-eye');
       
        // password.type="password";
        password.setAttribute('type','password');
    }
})