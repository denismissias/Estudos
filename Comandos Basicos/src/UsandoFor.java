
import java.util.Scanner;

/**
 *
 * @author Denis Missias
 */
public class UsandoFor {

    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite o número da tabuada: ");
        int num = entrada.nextInt();

        for (int i = 1; i <= 10; i++) {
            System.out.println(num + "x" + i + " = " + (i * num));
        }
    }
}
