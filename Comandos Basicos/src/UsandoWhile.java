
import java.util.Scanner;

/**
 *
 * @author Denis Missias
 */
public class UsandoWhile {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int condicao = 0;
        /*        System.out.println("Digite 1 para sair ");
         int condicao = entrada.nextInt();
         */
        do {
            System.out.println("Digite 1 para sair ");
            condicao = entrada.nextInt();
            System.out.println("Você digitou o número " + condicao);
        } while (condicao != 1);
        /*       while (condicao != 1) {
         System.out.println("Você digitou o número " + condicao);
         System.out.println("Digite 1 para sair ");
         condicao = entrada.nextInt();
         }
         */ System.out.println("Até Logo!");
    }
}
