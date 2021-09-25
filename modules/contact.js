// Creating content for contact page

const contact = (() => {
    
    const body = document.querySelector('body');
    
    const main = document.createElement('main');
    const section = document.createElement('div');
    section.classList = "sectionImg";

    const contactHeading = document.createElement('h1');
    contactHeading.textContent = "Contact Us";
    contactHeading.classList = "contactText";

    section.appendChild(contactHeading);

    // Creating contact form information 

    const contactDiv = document.createElement('div');
    contactDiv.classList = "contactGrid";

    const contactBox = document.createElement('div');
    contactBox.classList = "formContainer";

    const formHeading = document.createElement('h2');
    formHeading.textContent = "WE WOULD LOVE TO HEAR FROM YOU";
    formHeading.classList = "txtAlign";

    const formPara = document.createElement('p');
    formPara.textContent = "Please use the form below to contact us for further information.";
    formPara.classList = "txtAlign";

    // Creating contact form

    const form = document.createElement('form');
    form.setAttribute("action", "https://formsubmit.co/@youremail");
    form.setAttribute("method", "POST");

    const inputElement = document.createElement('input'); // Creating input field for Name
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("name", "name");
    inputElement.setAttribute("placeholder", "Your name");
    inputElement.setAttribute("required", "");
    inputElement.classList = "inputField";

    const emailElement = document.createElement('input'); // Creating input field for E-mail
    emailElement.setAttribute("type", "email");
    emailElement.setAttribute("name", "email");
    emailElement.setAttribute("placeholder", "Your Email");
    emailElement.setAttribute("required", "");
    emailElement.classList = "inputField";

    const subjectElement = document.createElement('input'); // Creating input field for Subject
    subjectElement.setAttribute("type", "text");
    subjectElement.setAttribute("name", "subject");
    subjectElement.setAttribute("placeholder", "Subject");
    subjectElement.classList = "inputField";

    const textareaElement = document.createElement('textarea'); // Creating input field for Your Message
    textareaElement.setAttribute("type", "text");
    textareaElement.setAttribute("name", "message");
    textareaElement.setAttribute("placeholder", "Your Message")
    ;
    textareaElement.setAttribute("required", "");
    textareaElement.classList = "inputField textareaField";

    const buttonElement = document.createElement('button'); // Creating button element
    buttonElement.setAttribute("type", "submit");
    buttonElement.textContent = "Send";
    buttonElement.classList = "formBtn";

    // Changing email template for form submission

    const emailTemplate = document.createElement('input')
    emailTemplate.setAttribute("type", "hidden");
    emailTemplate.setAttribute("name", "_template");
    emailTemplate.setAttribute("value", "table");

    
    // Appending element to form

    form.appendChild(inputElement);
    form.appendChild(emailElement);
    form.appendChild(subjectElement);
    form.appendChild(textareaElement);
    form.appendChild(buttonElement);
    form.appendChild(emailTemplate);

    contactBox.appendChild(formHeading);
    contactBox.appendChild(formPara);
    contactBox.appendChild(form);

   // Adding map and contact information 
    
   const infoDiv = document.createElement('div');
   
   const mapDiv = document.getElementById("map");

   const subDiv = document.createElement('div');
   subDiv.classList = "infoGrid";

   const subDiv1 = document.createElement('div');
   const address = document.createElement('p');
   address.textContent = "ADDRESS : ";
   address.classList = "infoAlign";
   subDiv1.appendChild(address);

   const address1 = document.createElement('p');
   address1.textContent = "Gallagher";
   address1.classList = "infoAlign2";
   subDiv1.appendChild(address1);

   const address2 = document.createElement('p');
   address2.textContent = "Avenue";
   address2.classList = "infoAlign2 infoAlign3";
   subDiv1.appendChild(address2);

   const line = document.createElement('hr');
   line.classList = "newHr";
   subDiv1.appendChild(line);

   const city = document.createElement('p');
   city.textContent = "CITY :";
   city.classList = "infoAlign";
   subDiv1.appendChild(city);

   const city1 = document.createElement('p');
   city1.textContent = "Midrand";
   city1.classList = " infoAlign2";
   subDiv1.appendChild(city1);

   const availableTime = document.createElement('p');
   availableTime.textContent = "AVAILABLE AT 9AM – 5PM";
   availableTime.classList = "infoAlign available";
   subDiv1.appendChild(availableTime);

   const subDiv2 = document.createElement('div');
   subDiv2.classList = "left";

   const phone = document.createElement('p');
   phone.textContent = "PHONE :";
   phone.classList = "infoAlign";
   subDiv2.appendChild(phone);

   const phoneNo = document.createElement('p');
   phoneNo.textContent = "+27 614 441 737";
   phoneNo.classList = " infoAlign2";
   subDiv2.appendChild(phoneNo);

   const line1 = document.createElement('hr');
   line1.classList = "newHr";
   subDiv2.appendChild(line1);
   
   const email = document.createElement('p');
   email.textContent = "EMAIL :";
   email.classList = "infoAlign";
   subDiv2.appendChild(email);
   
   const emailAdress = document.createElement('p');
   emailAdress.textContent = "info@girlcode.co.za";
   emailAdress.classList = " infoAlign2";
   subDiv2.appendChild(emailAdress);

   const line2 = document.createElement('hr');
   line2.classList = "newHr";
   subDiv2.appendChild(line2)   // Appending elements to subDiv

   subDiv.appendChild(subDiv1);
   subDiv.appendChild(subDiv2);

    // Appending elements to info Div

    infoDiv.appendChild(mapDiv);
    infoDiv.appendChild(subDiv);
   
    // Appending elements to contactDiv

    contactDiv.appendChild(contactBox);
    contactDiv.appendChild(infoDiv);

    // Appending elements to main

    main.appendChild(section);
    main.appendChild(contactDiv);

    // Appending elements to body

    body.appendChild(main);
});
    
export default contact;

