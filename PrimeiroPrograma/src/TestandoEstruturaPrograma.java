/*
 * Classe que apresenta a estrutura básica de um programa.
 */

/**
 *
 * @author Denis Missias
 */
public class TestandoEstruturaPrograma {

    public static void main(String[] args) {
        //entrada
        int num1 = 10; //declaraçao de variável tipo int
        int num2 = 20; //declaraçao de variável tipo int
        byte idade = 100; //declaração de variável tipo byte
        long velocidadeLuz = 8943455544455449L; //sempre usar a letra L em declarações de variáveis do tipo long
        short salario = 32000; //declaração de variável tipo short
        int endMemoria = 0xABCDE; // int hexadecimal, pois valor começa com 0x

        boolean foiMarcada = false; //declaração de variável tipo boolean

        double PI = 3.141592; //declaração variável tipo double
        float teste = 5.97F; //sempre usar letra F em declarações de vriáveis float

        char letra = 'A'; //declaração variável tipo char

        int t1 = 1, t2 = 2, t3 = 3, t4 = 4;

        int n1, n2, n3, n4;

        n1 = n2 = n3 = n4 = 99;
        //processamento
        int resultado = num1 + num2;
        //saidda
        System.out.println("Cheguei...");
        System.out.println("Teste: " + teste);
        System.out.println("Resultado: " + resultado);
        System.out.println(endMemoria);
        System.out.println(salario * 0.085);
    }
}
