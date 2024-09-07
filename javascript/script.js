setTimeout(function() {
    document.querySelector('.name').style.display = 'none';
    document.querySelector('.name2 span2:nth-child(1)').style.display = 'inline-block';
    document.querySelector('.name2 span2:nth-child(2)').style.display = 'inline-block';
    document.querySelector('.name2 span2:nth-child(3)').style.display = 'inline-block';
    document.querySelector('.name2 span2:nth-child(4)').style.display = 'inline-block';
    document.querySelector('.name2 span2:nth-child(5)').style.display = 'inline-block';
  }, 2500);

  
  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    document.getElementById('stars').style.transform = 'translateY(' + scrollTop * 0.5 + 'px)';
    document.getElementById('stars2').style.transform = 'translateY(' + scrollTop * 0.3 + 'px)';
    document.getElementById('stars3').style.transform = 'translateY(' + scrollTop * 0.1 + 'px)';
});

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

  // Function to reset the animation speed when scrolling stops
  function scrollToSection(event, target) {
    event.preventDefault(); // Prevent the default anchor click behavior
    const element = document.querySelector(target);
    element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target element
  }
  
  