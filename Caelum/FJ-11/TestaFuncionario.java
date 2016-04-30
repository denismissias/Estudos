class TestaFuncionario {
	public static void main(String[] args) {
		System.out.println("Identificador: " + Funcionario.getIdentificador());
		
		Funcionario f1 = new Funcionario();
		f1.setNome("Denis");
		f1.setSalario(100);
		f1.recebeAumento(50);
		f1.setDataEntrada("19/05/2000");
		f1.setRG("12.345.567-8");

		//System.out.println("Salário atual: " + f1.salario);
		//System.out.println("Ganho anual: " + f1.calculaGanhoAnual());

		f1.mostra();

		System.out.println("Identificador: " + Funcionario.getIdentificador());
		
		Funcionario f2 = new Funcionario("Daniella");
		f2.setSalario(200);
		f2.recebeAumento(100);
		f2.setDataEntrada("02/02/2000");
		f2.setRG("12.345.567-8");

		f2.mostra();

		System.out.println("Identificador: " + Funcionario.getIdentificador());
		
		Funcionario f3 = new Funcionario();

		System.out.println("Identificador: " + Funcionario.getIdentificador());
	}
}
