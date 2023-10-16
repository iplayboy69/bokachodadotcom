const minValue = 2000;
const maxValue = 5000;
const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

document.getElementById('White').style.display = "grid";
document.getElementsByClassName('tablinks')[0].classList.add('active')
const myTimeout = setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
}, randomValue);

// // // // // // // // // // // // // // //

function openCategory(evt, categoryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(categoryName).style.display = "grid";
    evt.currentTarget.className += " active";
}