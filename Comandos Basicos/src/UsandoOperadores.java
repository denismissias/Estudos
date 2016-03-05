/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Denis Missias
 */
public class UsandoOperadores {

    public static void main(String args[]) {
        //entrada
        double num1 = 15;
        double num2 = 20;

        double inform = 4;

        double altura = 1.7;
        double peso = 80;

        int contComando = 0;

        //processamento
        double resultado = num1 + num2; //soma
        contComando--; //decremento
        double resto = inform % 2; //mod (resto da divisão)
        contComando--; //decremento
        double imc = peso / (altura * altura); //operação composta
        contComando--; //decremento

        boolean abaixoPeso = imc < 25; //variável "abaixoPeso" recebe valor "true" caso condição seja verdadeira
        boolean acimaPeso = imc >= 30; //variável "acimaPeso" recebe valor "true" caso condição seja verdadeira

        //saida
        System.out.println("Resultado: " + resultado);
        System.out.println("Resto: " + resto);
        System.out.println("IMC: " + imc);
        System.out.println("Contador: " + contComando);
        System.out.println("É magro: " + abaixoPeso);
        System.out.println("É forte: " + acimaPeso);

    }
}
