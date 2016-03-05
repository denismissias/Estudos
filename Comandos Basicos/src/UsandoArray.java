
import javax.swing.JOptionPane;

/**
 *
 * @author Denis Missias
 */
public class UsandoArray {

    public static void main(String[] args) {
        int idade[] = new int[10];

        int jogoDaVelha[][] = new int[3][3];
        
        jogoDaVelha[0][0] = 100;
        jogoDaVelha[0][1] = 200;
        jogoDaVelha[0][2] = 300;
        jogoDaVelha[1][0] = 300;

        jogoDaVelha[2][2] = 300;
        
        int dados[] = {1, 2, 3, 4, 6};
        
        System.out.println(dados[4]);

        for (int i = 0; i < idade.length; i++) {
            String aux = JOptionPane.showInputDialog("Digite a idade " + (i + 1));
            idade[i] = Integer.parseInt(aux);
        }

        int somaIdade = 0;

        for (int i = 0; i < idade.length; i++) {
            somaIdade = somaIdade + idade[i];
        }

        double media = somaIdade / (double) idade.length;

        JOptionPane.showMessageDialog(null, "Média: " + media);
    }
}
