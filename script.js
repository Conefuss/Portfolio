
function scrolldiv(id) {
    var elem = document.getElementById(id);
    console.log(elem);
    elem.scrollIntoView({
        behavior: 'smooth', // Defines the transition animation. Options: 'auto' or 'smooth'
        block: 'start',     // Defines vertical alignment. Options: 'start', 'center', 'end', or 'nearest'
        inline: 'nearest'   // Defines horizontal alignment. Options: 'start', 'center', 'end', or 'nearest'
      });
}
