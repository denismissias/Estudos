class Exercicio5 {
	public static void main(String[] args) {
		
		long fatorial = 1;
		
		for (int n = 1; n <= 20; n++) {
			for (int i = n; i > 1; i--) {
				fatorial *= i;
			}
		System.out.println("O fatorial de " + n + " é (" + (n - 1) + "!) * " + n + " = " + fatorial);
		fatorial = 1;
		}
	}
}