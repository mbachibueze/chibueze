const toggleBtn = document.querySelector(".toggle-btn")
const toggleBtnIcon = document.querySelector(".toggle-btn i")
const dropDownMenu = document.querySelector(".dropdown_menu")

toggleBtn.onclick = function(){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen ? "fas fa-xmark" : "fas fa-bars"
}

const navClose = () =>{
  dropDownMenu.classList.remove('open')

  const isOpen = dropDownMenu.classList.contains('open')
  toggleBtnIcon.classList = isOpen ? "fas fa-xmark" : "fas fa-bars"
}


document.addEventListener('DOMContentLoaded', function() {
  const copyIcons = document.querySelectorAll('.fa-copy');

  copyIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const copyId = this.getAttribute('data-copy');
      const copyText = document.getElementById(copyId).innerText;

      // Create a temporary textarea element to copy the text
      const textarea = document.createElement('textarea');
      textarea.value = copyText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      // Optional: Alert the user that the text has been copied
      alert(`Copied: ${copyText}`);
    });
  });
});


