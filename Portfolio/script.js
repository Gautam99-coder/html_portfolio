document.getElementById("contactForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value;
    alert(`Hello ${name}! Your message has been received.`);
});