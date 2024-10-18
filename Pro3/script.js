document.addEventListener("DomContentLoaded", function(){
    console.log("Cricket Lengends Loaded");
});

document.getElementById('fanForm').addEventListener('submit',function(){
    event.preventDefault();

    const fanName=document.getElementById('fanName').value;
    const favPlayer=document.getElementById('favPlayer').value;
    const story=document.getElementById('story').value;

    let storyHTML=`<div class="story-card">
    <h3>${fanName} on ${favPlayer}</h3>
    <p>${story}</p>
    </div>`;

    document.getElementById('fanStories').innerHTML+=storyHTML;
    document.getElementById('fanForm').reset();
})