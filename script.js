import emailjs from "@emailjs/browser";

//link pentru formular

const loader = document.querySelector(".loader-wrapper");

async function sendOrder(){
  loader.style.display = "flex"
  const orderMessage = document.querySelector('input[name="order-message"]');
  const orderFrame = window.currentFrame;
  const orderPrefers = document.querySelector('input[name="order-prefers"]');
  const orderEmail = document.querySelector('input[name="order-email"]');
  const orderPhone = document.querySelector('input[name="order-tel"]');
  const orderAddress = document.querySelector('input[name="order-adress"]');
  // const orderFileInput = document.querySelector('input[type="file"]');

  // console.log(orderFileInput)
  // const file = orderFileInput.files[0];
  
  // const reader = new FileReader();
  // reader.readAsDataURL(file);
  // const base64 = await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reader.onload = () => {
  //       resolve(reader.result)
  //     }
  //     reader.onerror = (error) => {
  //       reject(error)
  //     }
  //   }, 0)
  // })

  const formData = {
    message: orderMessage.value, 
    frame: orderFrame, 
    preferences: orderPrefers.value, 
    email: orderEmail.value,
    phone: orderPhone.value,
    adress: orderAddress.value
  }

  emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formData)
  .then(() => {
   console.log("send ok")
   alert("Comanda s-a facut cu succes!")
   loader.style.display = "none"
  })
  .catch(error => {
   console.log(error)
   loader.style.display = "none"
  })

}

const submitBtn = document.querySelector(".buton-comanda");
submitBtn.addEventListener("click", sendOrder);

window.addEventListener("load", () => {
  emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  })
})
