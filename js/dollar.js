$(document).ready(function(){
    const currentDollarPrice = 93.33

    const formatter =  new Intl.NumberFormat("ru")
    
    const onChange = () => {

        const engine = $('input[name="engine"]:checked').val();
        const transmission =
            $('input[name="transmission"]:checked').val();
        const package = $('input[name="package"]:checked').val();

        const totalPrice = parseFloat(engine) + parseFloat(transmission)
            + parseFloat(package);
        
        const toUSD = totalPrice / currentDollarPrice

        $("#modelPriceUSD").text(`${
            formatter.format(toUSD.toFixed(2))
        } доллар`)
    }

    onChange();

    $("#autoForm input").on("change", function(){
        onChange()
    })
})