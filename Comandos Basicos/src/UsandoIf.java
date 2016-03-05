
import java.util.Scanner; //necessário para utilizar classe Scanner

/**
 *
 * @author Denis Missias
 */
public class UsandoIf {

    public static void main(String[] args) {
        // entrada
        Scanner entrada = new Scanner(System.in); //criando objeto da classe Scanner
        System.out.println("Digite seu consumo em KW");
        int consumoKW = entrada.nextInt(); //recebendo int 
        double valorPago = 0;
        //processamento
        if (consumoKW == 0) {
            System.out.println("Você não consumiu energia neste mês.");
        } else if (consumoKW < 0 || consumoKW > 1000) {
            System.out.println("Erro! Valor não pode ser negativo e nem maior que 1000");
        } else if (consumoKW > 0 && consumoKW < 10) {
            valorPago = consumoKW * 0.5;
        } else if (consumoKW >= 10 && consumoKW < 100) {
            valorPago = consumoKW * 0.72;
        } else if (consumoKW >= 100) {
            valorPago = consumoKW * 1.00;
        }
        //saída
        System.out.println("Valor Consumido: R$ " + valorPago);
    }
}
