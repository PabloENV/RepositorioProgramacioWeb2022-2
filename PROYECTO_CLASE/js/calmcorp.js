(function(){
	function calculaImc(peso,altura){
		return peso / (altura * altura);
	}
	
	var result = document.getElementById("result");
	
	function classificaImc(imc){
		if(imc > 24.9){
			result.classList.remove("text-success");
			result.classList.add("text-danger");
			return "Sobrepeso";
		}else if(imc < 18.5){
			result.classList.remove("text-success");
			result.classList.add("text-danger");
			return "Bajo Peso";
		}else if(imc >= 18.5 && imc <= 24.9){
			result.classList.remove("text-danger");
			result.classList.add("text-success");
			return "Peso Ideal";
		}
	}
	
	
	var btn = document.getElementById("button");
	
	btn.addEventListener('click', function() {
				var weight = document.getElementById("weight");
				var peso = weight.value;
				var height = document.getElementById("height");
				var altura = height.value;
				var imc = calculaImc(peso, altura);
				var classificacao = classificaImc(imc);
				result.textContent = classificacao;
	});
	
})();
