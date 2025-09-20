// โหลดเสียงไว้ก่อน
const openSound = new Audio("audio/Button-click.mp3");   // แก้ path ให้ตรงกับที่เก็บไฟล์จริง
const closeSound = new Audio("audio/Button-click.mp3");
openSound.volume = 0.2;
closeSound.volume = 0.2;

// ----------------------
// Panel 1: About Me
// ----------------------
const aboutBtn = document.getElementById('aboutBtn');
const aboutPanel = document.getElementById('aboutPanel');
const closePanel = document.getElementById('closePanel');

aboutBtn.addEventListener('click', () => {
  aboutPanel.classList.add('active');
  document.body.classList.add('modal-open');
  openSound.play();
});

closePanel.addEventListener('click', () => {
  aboutPanel.classList.remove('active');
  document.body.classList.remove('modal-open');
  closeSound.play();
});

// ----------------------
// Panel 2: My Links
// ----------------------
const linksBtn = document.getElementById('linksBtn');
const linksPanel = document.getElementById('linksPanel');
const closeLinks = document.getElementById('closeLinks');

linksBtn.addEventListener('click', () => {
  linksPanel.classList.add('active');
  document.body.classList.add('modal-open');
  openSound.play();
});

closeLinks.addEventListener('click', () => {
  linksPanel.classList.remove('active');
  document.body.classList.remove('modal-open');
  closeSound.play();
});

// ----------------------
// Panel 3: FAQ
// ----------------------
const faqBtn = document.getElementById('faqBtn');
const faqPanel = document.getElementById('faqPanel');
const closeFAQ = document.getElementById('closeFAQ');

faqBtn.addEventListener('click', () => {
  faqPanel.classList.add('active');
  document.body.classList.add('modal-open');
  openSound.play();
});

closeFAQ.addEventListener('click', () => {
  faqPanel.classList.remove('active');
  document.body.classList.remove('modal-open');
  closeSound.play();
});

// ----------------------
// Panel 4: Projects
// ----------------------
const projectsBtn = document.getElementById('projectsBtn');
const projectsPanel = document.getElementById('projectsPanel');
const closeProjects = document.getElementById('closeProjects');

projectsBtn.addEventListener('click', () => {
  projectsPanel.classList.add('active');
  document.body.classList.add('modal-open');
  openSound.play();
});

closeProjects.addEventListener('click', () => {
  projectsPanel.classList.remove('active');
  document.body.classList.remove('modal-open');
  closeSound.play();
});

// ----------------------
// Panel 5: Contact
// ----------------------
const contactBtn = document.getElementById('contactBtn');
const contactPanel = document.getElementById('contactPanel');
const closeContact = document.getElementById('closeContact');

contactBtn.addEventListener('click', () => {
  contactPanel.classList.add('active');
  document.body.classList.add('modal-open');
  openSound.play();
});

closeContact.addEventListener('click', () => {
  contactPanel.classList.remove('active');
  document.body.classList.remove('modal-open');
  closeSound.play();
});


// ----------------------
// Song Button  
// ----------------------
const music = document.getElementById("bgMusic");
music.volume = 0.1; // ใส่ค่าระหว่าง 0.0 ถึง 1.0 (0 = เงียบ, 1 = ดังสุด)
const toggleBtn = document.getElementById("musicToggle");


let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    toggleBtn.textContent = "🔊"; // เปลี่ยน icon เป็นปิดเสียง
  } else {
    music.pause();
    toggleBtn.textContent = "🔇"; // เปลี่ยน icon เป็นเปิดเสียง
  }
  isPlaying = !isPlaying;
});


const toggles = document.querySelectorAll('.dropdown-toggle');

toggles.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.classList.toggle('active');
  });
});
