document.getElementById('dark-mode-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('section').forEach(section => {
      section.classList.toggle('dark-mode');
    });
    document.querySelectorAll('#skills li').forEach(li => {
      li.classList.toggle('dark-mode');
    });
    document.querySelector('footer').classList.toggle('dark-mode');
  });
  