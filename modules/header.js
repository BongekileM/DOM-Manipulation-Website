// Creating Header

const header = (() => {

    const body = document.querySelector('body');
    
    // Creating navigation bar
    
    const nav = document.createElement('nav');
    const unOrdered = document.createElement('ul');
    const teamList = document.createElement('li');
    const partnersList = document.createElement('li');
    const initiativesList = document.createElement('li');
    const blogList = document.createElement('li');
    const careersList = document.createElement('li');
    const elearningList = document.createElement('li');
    const contactList = document.createElement('li');
    const donateNowList = document.createElement('li');

    // Creating logo

    const logo = document.createElement('img');
    logo.src = 'images/girlcode.png';
    logo.classList = 'logoImg';
    
    const imgAnchor = document.createElement('a');
    imgAnchor.href = "#";
    imgAnchor.appendChild(logo);
    
    // Creating anchor elements for ordered list
    
    const anchor1 = document.createElement('a'); 
    const link1 = document.createTextNode("TEAM");
    anchor1.appendChild(link1); 
    anchor1.href = "#";
    teamList.appendChild(anchor1);

    const anchor2 = document.createElement('a'); 
    const link2 = document.createTextNode("PARTNERS");
    anchor2.appendChild(link2); 
    anchor2.href = "#";
    partnersList.appendChild(anchor2);

    const anchor3 = document.createElement('a'); 
    const link3 = document.createTextNode("INITIATIVES");
    anchor3.appendChild(link3); 
    anchor3.href = "index.html";
    initiativesList.appendChild(anchor3);

    const anchor4 = document.createElement('a'); 
    const link4 = document.createTextNode("BLOG");
    anchor4.appendChild(link4); 
    anchor4.href = "#";
    blogList.appendChild(anchor4);

    const anchor5 = document.createElement('a'); 
    const link5 = document.createTextNode("CAREERS");
    anchor5.appendChild(link5); 
    anchor5.href = "#";
    careersList.appendChild(anchor5);

    const anchor8 = document.createElement('a'); 
    const link8 = document.createTextNode("eLEARNING");
    anchor8.appendChild(link8); 
    anchor8.href = "#";
    elearningList.appendChild(anchor8);

    const anchor6 = document.createElement('a'); 
    const link6 = document.createTextNode("CONTACT");
    anchor6.appendChild(link6); 
    anchor6.href = "contactus.html";
    contactList.appendChild(anchor6);
   
    const anchor7 = document.createElement('a'); 
    const link7 = document.createTextNode("DONATE NOW");
    anchor7.appendChild(link7); 
    anchor7.href = "#";
    donateNowList.appendChild(anchor7);
    
    donateNowList.classList = 'btn';

    // Appending elements to body

    unOrdered.appendChild(teamList);
    unOrdered.appendChild(partnersList);
    unOrdered.appendChild(initiativesList);
    unOrdered.appendChild(blogList);
    unOrdered.appendChild(careersList);
    unOrdered.appendChild(elearningList);
    unOrdered.appendChild(contactList);
    unOrdered.appendChild(donateNowList);
    nav.appendChild(unOrdered);
    nav.appendChild(imgAnchor);
    body.appendChild(nav);
    
return nav
});

export default header;

