const container = document.querySelector('.menu .inner .container');
const button = document.querySelectorAll('.menu .inner .container .name .btn');
const tabcontent = document.querySelectorAll('.menu .inner .container .content .tabcontent');

container.addEventListener('click', open)

function open(e) {
  e.preventDefault();
  const id = e.target.dataset.id;
  if (id) {
    button.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    tabcontent.forEach(tabs => {
      tabs.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
}