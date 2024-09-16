setTimeout(function() {
    document.querySelector('.name').style.display = 'none';
    document.querySelector('.name2 span2:nth-child(1)').style.display = 'inline-block';
    document.querySelector('.name2 span2:nth-child(2)').style.display = 'inline-block';
    document.querySelector('.name2 span2:nth-child(3)').style.display = 'inline-block';
    document.querySelector('.name2 span2:nth-child(4)').style.display = 'inline-block';
    document.querySelector('.name2 span2:nth-child(5)').style.display = 'inline-block';
  }, 2500);

  
function generateMultipleBoxShadow(n) {
    let shadow = '';
    for (let i = 0; i < n; i++) {
      const x = Math.floor(Math.random() * 5000);
      const y = Math.floor(Math.random() * 5000);
      shadow += `${x}px ${y}px #FFF${i < n - 1 ? ',' : ''}`;
    }
    return shadow;
  }
  
  document.documentElement.style.setProperty('--shadows-small', generateMultipleBoxShadow(1400));
  document.documentElement.style.setProperty('--shadows-medium', generateMultipleBoxShadow(400));
  document.documentElement.style.setProperty('--shadows-big', generateMultipleBoxShadow(200));
  
  let scrollTimeout;

  // Function to change the animation speed when scrolling starts
  function speedUpStars() {
    document.querySelector('#stars').style.animationDuration = '20s';  // Faster speed
    document.querySelector('#stars2').style.animationDuration = '40s'; // Faster speed
    document.querySelector('#stars3').style.animationDuration = '60s'; // Faster speed
  }
    
  // Add scroll event listener for the stars
  window.addEventListener('scroll', speedUpStars);

  //for overservers
  const sections = ['#title', '#about', '#links'];
  const navItems = document.querySelectorAll(".nav_bar_item");
  // let currentActiveId = 'title'; // Variable to store the current active section ID

  // Create an intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        const navItem = document.querySelector(
          `.nav_bar_item a[href="#${entry.target.id}"]`
        ).parentElement;

        if (entry.isIntersecting) {
          // When a new section becomes intersecting, update current active section
    
          navItems.forEach((item) => item.classList.remove("nav_bar_item--active"));
          navItem.classList.add("nav_bar_item--active");
        }
      });
    },
    {
      threshold: 0.5, // Adjust this value to determine when a section is "active"
    }
  );

  //observer for project sections
  const observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        const navItem = document.querySelector(
          `.nav_bar_item a[href="#${entry.target.id}"]`
        ).parentElement;

        if (entry.isIntersecting) {
          // When a new section becomes intersecting, update current active section
          navItems.forEach((item) => item.classList.remove("nav_bar_item--active"));
          navItem.classList.add("nav_bar_item--active");
        }
      });
    },
    {
      threshold: 0.8, // Adjust this value to determine when a section is "active"
    }
  );
  sections.forEach((section) => observer.observe(document.querySelector(section)));
  observer2.observe(document.querySelector("#projects"))

  //add skills list 
  const col1 = ["Java" , "HTML", "CSS"];
  const col2 = ["C++", "Python", "Drogon"];
  const col3 = ["Git", "Node.js", "JavaScript"];

  function addskill(lists){
    //for the list skills list
    const col = document.createElement('div');
    col.classList.add('skills_List');

    lists.forEach((s) => {
      
      const newDiv = document.createElement('div');
      //appends the class for css
      newDiv.classList.add('skills_item'); 

      //appends the images to div
      resize(s, newDiv);
      
      //appends the names to div
      const textDiv = document.createElement('div');
      textDiv.classList.add('skill_name');
      const textContent = document.createTextNode(s);
      textDiv.appendChild(textContent);
      newDiv.appendChild(textDiv);

      //appends the items to the colom
      col.appendChild(newDiv);
    });

    //appends to the skills sections in the html 
    const skill = document.getElementById("skills"); 
    skill.appendChild(col);

  };

  addskill(col1);
  addskill(col2);
  addskill(col3);

  //resize all the images

function resize(name, div){
  const img = new Image();
  img.src = `images/${name}.png`;

  img.onload = function() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set the desired dimensions
    const newWidth = 100; 
    const newHeight = 100; 

    canvas.width = newWidth;
    canvas.height = newHeight;

    // Draw the image onto the canvas with the new dimensions
    ctx.drawImage(img, 0, 0, newWidth, newHeight);

    // Get the resized image data URL
    const resizedImageData = canvas.toDataURL('image/png');

    // Do something with the resized image, e.g., display it
    const resizedImage = document.createElement('img');
    resizedImage.classList.add('skill_img')
    resizedImage.src = resizedImageData;
    div.appendChild(resizedImage);
  };
}
