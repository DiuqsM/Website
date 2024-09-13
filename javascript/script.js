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
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      shadow += `${x}px ${y}px #FFF${i < n - 1 ? ',' : ''}`;
    }
    return shadow;
  }
  
  document.documentElement.style.setProperty('--shadows-small', generateMultipleBoxShadow(700));
  document.documentElement.style.setProperty('--shadows-medium', generateMultipleBoxShadow(200));
  document.documentElement.style.setProperty('--shadows-big', generateMultipleBoxShadow(100));
  
  let scrollTimeout;

  // Function to change the animation speed when scrolling starts
  function speedUpStars() {
    document.querySelector('#stars').style.animationDuration = '20s';  // Faster speed
    document.querySelector('#stars2').style.animationDuration = '40s'; // Faster speed
    document.querySelector('#stars3').style.animationDuration = '60s'; // Faster speed
  }
    
  // Add scroll event listener
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
        console.log(entry.isIntersecting + " " + entry.target.id);

      });
    },
    {
      threshold: 0.5, // Adjust this value to determine when a section is "active"
    }
  );

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
        console.log(entry.isIntersecting + " " + entry.target.id);

      });
    },
    {
      threshold: 0.8, // Adjust this value to determine when a section is "active"
    }
  );
  sections.forEach((section) => observer.observe(document.querySelector(section)));
  observer2.observe(document.querySelector("#projects"))