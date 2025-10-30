/** TODO: Build the navigation bar using JavaScript **/
const sections = document.getElementsByClassName('landing__container');
const navbar = document.querySelector('#navbar__list');

for (i = 0; i < sections.length; i++) {
    let section = sections[i];
    section.setAttribute('id', `Section${i + 1}`);
    section.setAttribute('data-nav', `Section ${i + 1}`);

    let li = document.createElement('li');
    a = document.createElement('a');
    a.setAttribute('href', `#${section.id}`);
    a.setAttribute('class', 'menu__link');
    a.innerText = section.dataset.nav;
    li.appendChild(a);
    navbar.appendChild(li);
}

/** TODO: Add smooth scrolling **/

let links = document.querySelectorAll('#navbar__list a');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default anchor behavior
        // Get the target section ID from the href attribute of the link
        const targetId = this.getAttribute('href').substring(1); // Remove the '#' from the href
        const targetSection = document.getElementById(targetId);
        // Scroll to the target section
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            console.log(`Scrolling to: ${targetId}`);
    });
}
console.log(links);
/** TODO: Add an active state **/
let sec1 = document.querySelector('#Section1');
let sec2 = document.querySelector('#Section2');
let sec3 = document.querySelector('#Section3');
let sec4 = document.querySelector('#Section4');
let sec5 = document.querySelector('#Section5');
let sec6 = document.querySelector('#Section6');
let pos1 = sec1.getBoundingClientRect();
let pos2 = sec2.getBoundingClientRect();
let pos3 = sec3.getBoundingClientRect();
let pos4 = sec4.getBoundingClientRect();
let pos5 = sec5.getBoundingClientRect();
let pos6 = sec6.getBoundingClientRect();
window.addEventListener('scroll', function () {
    let scrollPos = window.scrollY;
    if (scrollPos >= pos1.top && scrollPos < pos2.top) {
        sec1.classList.add('active');
        sec2.classList.remove('active');
        sec3.classList.remove('active');
        sec4.classList.remove('active');
        sec5.classList.remove('active');
    } else if (scrollPos >= pos2.top && scrollPos < pos3.top) {
        sec2.classList.add('active');
        sec1.classList.remove('active');
        sec3.classList.remove('active');
        sec4.classList.remove('active');
        sec5.classList.remove('active');
    } else if (scrollPos >= pos3.top && scrollPos < pos4.top) {
        sec3.classList.add('active');
        sec1.classList.remove('active');
        sec2.classList.remove('active');
        sec4.classList.remove('active');
        sec5.classList.remove('active');
    } else if (scrollPos >= pos4.top && scrollPos < pos5.top) {
        sec4.classList.add('active');
        sec1.classList.remove('active');
        sec2.classList.remove('active');
        sec3.classList.remove('active');
        sec5.classList.remove('active');
    } else if (scrollPos >= pos5.top && scrollPos < pos6.top) {
        sec5.classList.add('active');
        sec1.classList.remove('active');
        sec2.classList.remove('active');
        sec3.classList.remove('active');
        sec4.classList.remove('active');

    }
    else if (scrollPos > pos6.top) {
        sec1.classList.remove('active');
        sec2.classList.remove('active');
        sec3.classList.remove('active');
        sec4.classList.remove('active');
        sec5.classList.remove('active');
    }
});
/** TODO: Add a comment form **/
let commentlist = document.querySelector('#comment-list');
let commentForm = document.querySelector('#comment-form');
let commentFormName = document.querySelector('#name');
let commentFormEmail = document.querySelector('#email');
let commentFormText = document.querySelector('#commentText');

commentForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    if (commentFormName.value === '' || commentFormEmail.value === '' || commentFormText.value === '') {
        alert('Please fill in all fields');
        return;
    }
    addComment();
    commentFormName.value = '';
    commentFormEmail.value = '';
    commentFormText.value = '';
});

function addComment() {
    let Comment1 = document.createElement('li');
    let CommentName = document.createElement('h3');
    let CommentEmail = document.createElement('h4');
    let CommentText = document.createElement('p');
    CommentName.innerText = commentFormName.value;
    CommentEmail.innerText = commentFormEmail.value;
    CommentText.innerText = commentFormText.value;
    Comment1.appendChild(CommentName);
    Comment1.appendChild(CommentEmail);
    Comment1.appendChild(CommentText);
    Comment1.classList.add('comment');
    commentlist.appendChild(Comment1);
}
