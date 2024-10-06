var form = document.getElementById('myform');
var nameText = document.getElementById('name');
var bioText = document.getElementById('Bio');
var image = document.getElementById('image');

form.addEventListener('submit',data);
function data(events){
    events.preventDefault();
    var username = document.getElementById('username').value;
    nameText.innerText = username;
    var bio = document.getElementById('bios').value;
    bioText.innerText = bio; 
    var imglink = document.getElementById('link').value;
    image.src = imglink;
}