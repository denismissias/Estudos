class Exercicio6 {
	public static void main(String[] args) {
		
		int atual = 0;
		int proximo = 1;
		
		while (proximo <= 100) {
			System.out.println(atual);
			System.out.println(proximo);
			atual = atual + proximo;
			proximo = proximo + atual;
		}
	}
}