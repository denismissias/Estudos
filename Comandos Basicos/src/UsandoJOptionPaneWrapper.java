
import javax.swing.JOptionPane;

/**
 *
 * @author Denis Missias
 */
public class UsandoJOptionPaneWrapper {

    public static void main(String[] args) {
        // entrada
        String nome = JOptionPane.showInputDialog("Digite seu nome"); //Mostra graficamete mensagem na tela e captura o nome
        String sobrenome = JOptionPane.showInputDialog("Digite seu sobrenome"); //Mostra graficamete mensagem na tela e captura o sobrenome

        String aux = JOptionPane.showInputDialog("Digite seu salário"); //Mostra graficamete mensagem na tela e captura salário através da variável aux

        double salario = Double.parseDouble(aux); //Transforma String aux em Double salario

        aux = JOptionPane.showInputDialog("Digite sua idade"); //Mostra graficamete mensagem na tela e captura idade através da variável aux

        int idade = Integer.parseInt(aux); //Transforma String aux em int idade

        //processamento
        String nomeCompleto = nome + " " + sobrenome; //Concatena nome e sobrenome na variável nomeCompleto
        double result = salario * idade; //Multiplica salario por idade e armazena na variável result

        //saída
        JOptionPane.showMessageDialog(null, nomeCompleto); //Mosta graficamente o nome completo
        JOptionPane.showMessageDialog(null, "Salário x Idade: " + result); //Mostra graficamente o salário multiplicado pela idade
    }
}
