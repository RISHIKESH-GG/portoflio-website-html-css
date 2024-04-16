function toggleMenu(){
    const menu=document.quarrySelector(".menu-links");
    const icon=document.quarrySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}