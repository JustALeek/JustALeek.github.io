window.onload = function(){
    introductionBox = this.document.getElementById("introduction");
    let initialText = "Hi my name is Alex and I am a...";
    let i = 0;
    let writeIntro = this.setInterval(() => {
        introductionBox.textContent = initialText.substring(0, i)
        if(i == initialText.length) this.clearInterval(writeIntro);
        i++;
    }, 200)
}