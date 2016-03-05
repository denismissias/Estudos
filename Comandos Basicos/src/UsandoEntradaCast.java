
import java.util.Scanner; //necessário para utilização da classe Scanner

/**
 *
 * @author Denis Missias
 */
public class UsandoEntradaCast {

    public static void main(String[] args) {
        //entrada
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite o ano de nascimento: ");
        int anoNascimento = entrada.nextInt();
        System.out.println("Digite o ano atual: ");
        int anoAtual = entrada.nextInt();
        System.out.println("Digite o seu peso: ");
        double peso = entrada.nextDouble();
        System.out.println("Digite a sua altura: ");
        double altura = entrada.nextDouble();

        //processamento
        int idade = anoAtual - anoNascimento;

        int imc = (int) (peso / (altura * altura)); //resultado da operação transformado de double para int
        
        char caracter = '&';
        
        int ascii = caracter; //código ascii do caracter "&"

        //saida
        System.out.println("Idade: " + idade);
        System.out.println("IMC: " + imc);
        System.out.println("Ascii: " + ascii);
    }
}
