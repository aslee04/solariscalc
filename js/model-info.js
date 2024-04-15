$(document).ready(function () {
    const container = $("#modelSpecs");

    const onChange = () => {
        const engine = $('input[name="engine"]:checked + label').text();
        const transmission =
            $('input[name="transmission"]:checked + label').text();
        const package = $('input[name="package"]:checked + label').text();

        container.text(`${engine}, ${transmission}, ${package}`)
    }

    onChange();

    $("#autoForm input").on("change", function(){
        onChange()
    })

});