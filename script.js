const galaxyS5 = {
	modeloCelular: "Galaxy s5",
	modeloDaBateria: "xxx40",
	modeloDoLcd: "xxx",
	modeloFlexDeCarga: "yyy",
	riscoAbrir: "s/n",
}
const motoG2 = {
	modeloCelular: "Moto g2",
	modeloDaBateria: "xxx40",
	modeloDoLcd: "xxx",
	modeloFlexDeCarga: "yyy",
	riscoAbrir: "s/n",
}
const motoG3 = {
	modeloCelular: "Moto g3",
	modeloDaBateria: "xxx40",
	modeloDoLcd: "xxx",
	modeloFlexDeCarga: "yyy",
	riscoAbrir: "s/n",
}
const marcas = {
	samsung:[galaxyS5],
	motorola:[motoG2,motoG3],
}
$(document).ready(function () {
	$("#content div:nth-child(1)").show();
	$(".abas li:first div").addClass("selected");
	$(".aba").click(function () {
		$(".aba").removeClass("selected");
		$(this).addClass("selected");
		var indice = $(this).parent().index();
		indice++;
		const marcaSelecionada = this.children[0].innerText.toLowerCase();
		const modelosDeCelular = marcas[marcaSelecionada].map(marca => marca.modeloCelular);

		const dropdownModelos = $("#myDropdown");


		dropdownModelos.empty();
		for (let i = 0; i < modelosDeCelular.length; i++){
			dropdownModelos.append('<button onclick="selecionaModelo()">' + modelosDeCelular[i] + '</button>');
		}

	});

	$(".aba").hover(
		function () { $(this).addClass("ativa") },
		function () { $(this).removeClass("ativa") }
	);
});

// script botao modelo // 
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
		txtValue = a[i].textContent || a[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display = "none";
		}
	}
}


function selecionaModelo(){
	$("#fundoKeep").hide();
	$("#informacoesAparelho").show();

}