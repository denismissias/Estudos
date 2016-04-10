class Funcionario {
	
	private static int identificador;	

	public static int getIdentificador() {
		return Funcionario.identificador;
	}

	public Funcionario() {
		Funcionario.identificador++;
	}

	public Funcionario(String nome) {
		this();
		this.nome = nome;
	}
	
	private String nome;
	private double salario;
	private String dataEntrada;
	private String rg;

	public String getNome() {
		return this.nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public double getSalario() {
		return this.salario;	
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}

	public String getDataEntrada() {
		return this.dataEntrada;
	}

	public void setDataEntrada(String dataEntrada) {
		this.dataEntrada = dataEntrada;
	}

	public String getRG() {
		return this.rg;
	}

	public void setRG(String rg) {
		this.rg = rg;
	}

	void recebeAumento(double aumento) {
		this.salario += aumento;	
	} 

	double calculaGanhoAnual() {
		return this.salario * 12;	
	}

	void mostra() {
		System.out.println("Nome: " + this.nome);
		System.out.println("Salário: " + this.salario);
		System.out.println("Data de admissão: " + this.dataEntrada);
		System.out.println("RG: " + this.rg);
		System.out.println("Ganho anual: " + this.calculaGanhoAnual());
	}
}

class Empresa {
	String nome;
	Funcionario[] empregados;
	String cnpj;

	void adiciona(Funcionario f) {
		for (int i = 0; i < this.empregados.length; i++) {
			if (this.empregados[i] == null) {
				this.empregados[i] = f;
				break;
			}
		}
	}

	void mostraEmpregados() {
		for (int i = 0; i < this.empregados.length; i++) {
			if (this.empregados[i] != null) {
				System. out.println("Funcionário na posição: " + i);
				System. out.println("Salário: " + this.empregados[i].getSalario());
			}
		}
	}
}
