function main() {
    console.log("Ready");
    document.querySelector("#bigRedButton").onclick = (event) => {
        console.log("true");
        let button = document.querySelector("#bigRedButton");
        let largeItems = document.querySelectorAll(".tooLarge");
        let items = document.querySelectorAll(".gravityTarget");
        console.log(items);
        for (let item of largeItems) {
            item.hidden = true;
        }
        for (let item of items) {
            item.className += " box2d";
        }
        // button.className += "box2d";
        console.log(button.className);
        
        
        var head = document.getElementsByTagName('head')[0];
        var script= document.createElement('script');
        script.src= 'scripts/gravity.js';
        head.appendChild(script);
        button.onclick = null;

        runTextAnimation(0);
    }
}

const strings = ["Well, great job. You broke it.",
                    "I don't blame you though, I'd have pushed the button too.",
                    "Wow, this is gonna take a while to clean up.",
                    "Well, the least you could do at this point is interview me for a job."];

function runTextAnimation(index) {
    let text = document.getElementById("animatedText");
    if (index < strings.length) {
        setTimeout(function() {
            text.innerHTML = strings[index];
            setTimeout(function() {
                text.innerHTML = "...";
                runTextAnimation(index+1);
            }, 4000);
        }, 3000);
    } else {
        setTimeout(function() {
            text.innerHTML = "Send me an email, I'd love to hear from you!";
        }, 3000);
    }
}

main()