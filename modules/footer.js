// Creating footer 

const footer = (() => {

    const body = document.querySelector('body');
    
    const mainFooter = document.createElement('footer');
    const main = document.createElement('div');
    main.classList = 'footerContainer';
    
    const mainContent = document.createElement('div');
    mainContent.classList = "mainContainer";
    
    // Inserting footer logo and text content, and creating footer div1
    
    const footerDiv1 = document.createElement('div');
    
    const footerLogo = document.createElement('img');
    footerLogo.src = 'images/footerlogo.png';
    footerLogo.classList = 'logoSize';

    const footerPara = document.createElement('p');
    footerPara.textContent = "Our future growth is limited by a chronic shortage of skills and lack of women in tech. This gap isn’t just bad for women, it's bad for business.";
    footerPara.classList = "paraColor";
    
    footerDiv1.appendChild(footerLogo);
    footerDiv1.appendChild(footerPara);
    
    // Creating footer div2
    
    const footerDiv2 = document.createElement('div');
    
    const num1 = document.createElement('img');
    num1.src = 'images/number-1-circle-1.png';
    num1.classList = 'num1Img';

    const footerPara1 = document.createElement('p');
    footerPara1.textContent = 'Donate your time by volunteering.';
    footerPara1.classList = "para1";

    const num3 = document.createElement('img');
    num3.src = 'images/number-3-circle-1.png';
    num3.classList = 'num3Img';

    const footerPara3 = document.createElement('p');
    footerPara3.textContent = 'Donate any amount or second hand computers.';
    footerPara3.classList = "para1";
    
    footerDiv2.appendChild(num1);
    footerDiv2.appendChild(footerPara1);
    footerDiv2.appendChild(num3);
    footerDiv2.appendChild(footerPara3);
    
     // Creating footer div3
    
     const footerDiv3 = document.createElement('div');
    
     const num2 = document.createElement('img');
     num2.src = 'images/number-2-circle-1.png';
     num2.classList = 'num1Img';
 
     const footerPara2 = document.createElement('p');
     footerPara2.textContent = 'Stay up to date with our monthly newsletter.';
     footerPara2.classList = "para1";
 
     const num4 = document.createElement('img');
     num4.src = 'images/number-4-circle-1.png';
     num4.classList = 'num3Img';
 
     const footerPara4 = document.createElement('p');
     footerPara4.textContent = 'Follow us on social media.';
     footerPara4.classList = "para1";
     
     footerDiv3.appendChild(num2);
     footerDiv3.appendChild(footerPara2);
     footerDiv3.appendChild(num4);
     footerDiv3.appendChild(footerPara4);
     
    // Appending elements to mainContent
    
    mainContent.appendChild(footerDiv1);
    mainContent.appendChild(footerDiv2);
    mainContent.appendChild(footerDiv3);
    main.appendChild(mainContent);

    
     // Creating div for social media icons

    const divFooter = document.createElement('div');
    divFooter.classList = "socialIcons";

    // Creating Afrihost image link

    const afrihost = document.createElement('img');
    afrihost.src = 'images/poweredbyafrihost.png';
    afrihost.classList = 'iconAlign';
    
    const afriAnchor = document.createElement('a');
    afriAnchor.href = "index.html";
    afriAnchor.appendChild(afrihost);

    // Creating social media icon for twitter

    const iconSocial = document.createElement('a');
    iconSocial.innerHTML = '<i class="fab fa-twitter"></i>';
    iconSocial.href = "https://www.twitter.com/GirlCode_za";
   
    const socialAnchor = document.createElement('a'); 
    const linkSocial = document.createTextNode("TWITTER");
    socialAnchor.appendChild(linkSocial); 
    socialAnchor.href = "https://www.twitter.com/GirlCode_za";

    socialAnchor.classList = "iconText";

    // Creating social media icon for instagram

    const iconSocial1 = document.createElement('a');
    iconSocial1.innerHTML = '<i class="fab fa-instagram"></i>';
    iconSocial1.href = "https://www.instagram.com/girlcode_za/";
   
    const socialAnchor1 = document.createElement('a'); 
    const linkSocial1 = document.createTextNode("INSTAGRAM");
    socialAnchor1.appendChild(linkSocial1); 
    socialAnchor1.href = "https://www.instagram.com/girlcode_za/";

    socialAnchor1.classList = "iconText";
    
    divFooter.appendChild(afriAnchor);
    divFooter.appendChild(iconSocial);
    divFooter.appendChild(socialAnchor);
    divFooter.appendChild(iconSocial1);
    divFooter.appendChild(socialAnchor1);

     // Creating social media icon for facebook

     const iconSocial2 = document.createElement('a');
     iconSocial2.innerHTML = '<i class="fab fa-facebook-f"></i>';
     iconSocial2.href = "https://web.facebook.com/GirlCodeZA/";
    
     const socialAnchor2 = document.createElement('a'); 
     const linkSocial2 = document.createTextNode("FACEBOOK");
     socialAnchor2.appendChild(linkSocial2); 
     socialAnchor2.href = "https://web.facebook.com/GirlCodeZA/";
 
     socialAnchor2.classList = "iconText";
     
     divFooter.appendChild(afriAnchor);
     divFooter.appendChild(iconSocial);
     divFooter.appendChild(socialAnchor);
     divFooter.appendChild(iconSocial1);
     divFooter.appendChild(socialAnchor1);
     divFooter.appendChild(iconSocial2);
     divFooter.appendChild(socialAnchor2);
    
    // Appending elements to footer

    mainFooter.appendChild(main);
    mainFooter.appendChild(divFooter);


    // Appending elements to body

    body.appendChild(mainFooter);

});

export default footer;



