
import java.util.Scanner; //necessário para utilizar classe Scanner

/**
 *
 * @author Denis Missias
 */
public class UsandoSwitch {

    public static void main(String[] args) {

        int continua = 0; //variável criada para adaptação do comando while

        while (continua == 0) { //adaptação de looping, comando while
            // entrada
            Scanner entrada = new Scanner(System.in); //criando objeto da classe Scanner
            System.out.println("Digite um número de 0 a 9");
            int num = entrada.nextInt(); //recebendo int
            String numeroExtenso;
            //processamento
            switch (num) {
                case 0:
                    numeroExtenso = "Zero";
                    break;
                case 1:
                    numeroExtenso = "Um";
                    break;
                case 2:
                    numeroExtenso = "Dois";
                    break;
                case 3:
                    numeroExtenso = "Três";
                    break;
                case 4:
                    numeroExtenso = "Quatro";
                    break;
                case 5:
                    numeroExtenso = "Cinco";
                    break;
                case 6:
                    numeroExtenso = "Seis";
                    break;
                case 7:
                    numeroExtenso = "Sete";
                    break;
                case 8:
                    numeroExtenso = "Oito";
                    break;
                case 9:
                    numeroExtenso = "Nove";
                    break;
                default:
                    numeroExtenso = "Valor não suportado";
                    break;
            }
            //saída
            System.out.println(numeroExtenso);
            System.out.println("Digite 1 para sair ou 0 para continuar"); //adaptação while
            continua = entrada.nextInt(); //adaptação while
        }
    }
}
