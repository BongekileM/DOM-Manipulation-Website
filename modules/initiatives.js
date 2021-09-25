// Creating content for intitiatives page

const initiativesPage = (() => {

    const body = document.querySelector('body');
    
    // Creating first column

    const mainDiv = document.createElement('main');
    mainDiv.classList = 'container';
    const div1 = document.createElement('div');
    div1.classList = "borderBox";

    // Creating elements for first column
    
    const img1 = document.createElement('img');
    img1.src = 'images/image1.jpg';
    img1.classList = 'imgSize';
 
    const heading1 = document.createElement('h2');
    heading1.textContent = 'GirlCoder club';

    const para1 = document.createElement('p');
    para1.textContent = 'GirlCoder Club a nationwide network of volunteer-led, weekend coding clubs for high school girls who want to have a strong foundation in basic programming skills.';

    const button = document.createElement('a'); 
    const buttonLink = document.createTextNode("Read More");
    button.appendChild(buttonLink); 
    button.href = "#";
    button.classList = "readBtn";
    
    // Appending first column elements to div1 
    
    div1.appendChild(img1);
    div1.appendChild(heading1);
    div1.appendChild(para1);
    div1.appendChild(button);
    
    // Creating elements for second column
    
    const div2 = document.createElement('div');
    div2.classList = "borderBox1";
    
    const img2 = document.createElement('img');
    img2.src = 'images/image2.jpg';
    img2.classList = 'imgSize';
 
    const heading2 = document.createElement('h2');
    heading2.textContent = 'Online Coding Bootcamp';

    const para2 = document.createElement('p');
    para2.textContent = 'The GirlCoder Workshops are a 6-month weekend, hands on and in-person training that teachers participants how to become developers.';

    const button1 = document.createElement('a'); 
    const buttonLink1 = document.createTextNode("Read More");
    button1.appendChild(buttonLink1); 
    button1.href = "#";
    button1.classList = "readBtn1";

    // Appending second column elements to div2
    
    div2.appendChild(img2);
    div2.appendChild(heading2);
    div2.appendChild(para2);
    div2.appendChild(button1);
    
    // Creating elements for third column
    
    const div3 = document.createElement('div');
    div3.classList = "borderBox2";
    
    const img3 = document.createElement('img');
    img3.src = 'images/image3.jpg';
    img3.classList = 'imgSize';

    const heading3 = document.createElement('h2');
    heading3.textContent = 'Hackathons';

    const para3 = document.createElement('p');
    para3.textContent = 'GirlCodeHack is an annual event hosted on the first weekend of August, in commemoration of Women’s month by GirlCode designed to spark, renew and elevate an interest in coding amongst young women and girls.';

    const button2 = document.createElement('a'); 
    const buttonLink2 = document.createTextNode("Read More");
    button2.appendChild(buttonLink2); 
    button2.href = "#";
    button2.classList = "readBtn2";

    // Appending third column elements to div3

    div3.appendChild(img3);
    div3.appendChild(heading3);
    div3.appendChild(para3);
    div3.appendChild(button2);

    // Appending elements to mainDiv

    mainDiv.appendChild(div1);
    mainDiv.appendChild(div2);
    mainDiv.appendChild(div3);
    body.appendChild(mainDiv);
    
return mainDiv
});

export default initiativesPage;