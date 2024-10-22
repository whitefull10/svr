function animateValue(finalValue) {
    $({ value: 0 }).animate({ value: finalValue }, {
        duration: 1000,
        easing: "swing",
        step: function (value) {
            $(".valor").text("R$" + value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, "."));
        }
    });
}

window.onload = function() {
    // Chame a funÃ§Ã£o animateValue com o valor final definido no arquivo PHP
    animateValue(valorFinal);
    
    // AnimaÃ§Ã£o
    $(".circulo").css("left", "10%").animate({left: "63%"}, 2000);

    var countDownDate = new Date().getTime() + 1200 * 1000; // 13 minutos em milissegundos

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector(".timer .tempo").innerHTML = minutes + ":" + (seconds < 10 ? '0' + seconds : seconds);

        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".timer .tempo").innerHTML = "ACABOU!";
        }
    }, 1000);
}

document.getElementById("closeAlerta").addEventListener("click", function() {
    document.querySelector(".alerta").style.display = "none";
});
