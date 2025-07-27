// ----------------------
// Panel 1: About Me
// ----------------------
const aboutBtn = document.getElementById('aboutBtn');
const aboutPanel = document.getElementById('aboutPanel');
const closePanel = document.getElementById('closePanel');

aboutBtn.addEventListener('click', () => {
  aboutPanel.classList.add('active');
  document.body.classList.add('modal-open');
});

closePanel.addEventListener('click', () => {
  aboutPanel.classList.remove('active');
  document.body.classList.remove('modal-open');
});

// ----------------------
// Panel 2: My Links
// ----------------------

// 🧠 ปุ่มลิงก์ที่ใช้เปิด panel
const linksBtn = document.getElementById('linksBtn');
// 🧠 กล่อง panel ที่จะโชว์เมื่อคลิก
const linksPanel = document.getElementById('linksPanel');
// 🧠 ปุ่มปิด panel
const closeLinks = document.getElementById('closeLinks');

// 👉 เปิด panel เมื่อกดปุ่ม
linksBtn.addEventListener('click', () => {
  linksPanel.classList.add('active');
  document.body.classList.add('modal-open');
});

// 👉 ปิด panel เมื่อกดปิด
closeLinks.addEventListener('click', () => {
  linksPanel.classList.remove('active');
  document.body.classList.remove('modal-open');
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
});

closeFAQ.addEventListener('click', () => {
  faqPanel.classList.remove('active');
  document.body.classList.remove('modal-open');
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
});

closeProjects.addEventListener('click', () => {
  projectsPanel.classList.remove('active');
  document.body.classList.remove('modal-open');
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
});

closeContact.addEventListener('click', () => {
  contactPanel.classList.remove('active');
  document.body.classList.remove('modal-open');
});
