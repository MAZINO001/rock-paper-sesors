const gameContainer = document.querySelector(".container");
userResult = document.querySelector(".user-result img");
cpuResult = document.querySelector(".cpu-result img");
result = document.querySelector(".result");
optionImages = document.querySelectorAll(".option-image");

//loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "images/left-fist.png";

    //loop through each option image again
    optionImages.forEach((image2, index2) => {
      //if the current index does'nt match the clicked index
      //remove the "active" class from the pther option images
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    //set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");
      //get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // set user imag to the clicked option image
      userResult.src = imageSrc;

      //generate a random number between 0 and 2
      let randomNumbers = Math.floor(Math.random() * 3);
      //creat an array od CPU image options
      let cpuImages = [
        "images/left-fist.png",
        "images/left-hand.png",
        "images/left-scissor.png",
      ];
      cpuResult.src = cpuImages[randomNumbers];
      //assingn a letter value to the CPU option (R = rock,P = paper, S = dessors )
      let cpuValue = ["R", "P", "S"][randomNumbers];
      //assing letter value to the clicked option (pased on index)
      let userValue = ["R", "P", "S"][index];
      //creat objetc with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };
      //look at the outcome value basedd onthe user and cpu options
      outcomeValue = outcomes[userValue + cpuValue];
      //diplsay the result
      result.textContent =
        userValue === cpuValue ? "Match Draw" : `${outcomeValue} won!!`;
    }, 2500);
  });
});
