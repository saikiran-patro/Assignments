const showCode=(index)=>{

   
    const outputElement=document.querySelectorAll('.outputCode')[index];

    outputElement.style.display="block";
}
var typed = new Typed('.autoType', {
    strings: ['Software Engineer', 'Web Developer', 'Salesforce Developer','Problem Solver'],
    typeSpeed: 100,
    loop:true
  });