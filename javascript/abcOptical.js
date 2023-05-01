const dropDown = document.querySelector("#dropdown");

dropDown.addEventListener("click", () => {
  document.body.classList.add("dropdown");
});


<button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
    <script src="./javascript/abcOptical.js"></script>

    .dropdown {
        margin: 5vh auto;
        border-radius: 10px;
        z-index: 10;
        border: 1px solid black;
        color: white;
        width: 90vw;
        height: 90vh;
      }
