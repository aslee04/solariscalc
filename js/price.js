$(document).ready(function () {
    const onChange = () => {

        const engine = $('input[name="engine"]:checked').val();
        const transmission =
            $('input[name="transmission"]:checked').val();
        const package = $('input[name="package"]:checked').val();

        const totalPrice = parseFloat(engine) + parseFloat(transmission)
            + parseFloat(package);

        $("#modelPrice").text(`${totalPrice} руб.`)
    }

    onChange();

    $("#autoForm input").on("change", function(){
        onChange()
    })
})