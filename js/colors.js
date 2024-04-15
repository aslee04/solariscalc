$(document).ready(function () {
    const colorButtons = $("#colorsSelector button");

    // console.log(colorButtons);

    for (const button of colorButtons) {
        // console.log(button);

        button.addEventListener("click", function () {
            // console.log(this.dataset);

            $("#imgHolder img").attr("src", this.dataset.imgPath);
        })
    }
})