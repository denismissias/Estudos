using System.IO;
using System.Windows.Forms;
using System.Xml;
using System.Xml.Linq;

namespace System.XmlExample
{
    public partial class Form2 : Form
    {
        String arquivo = @"C:\Users\Denis Missias\Desktop\Agenda2.xml";
        XmlDocument xmlDoc = new XmlDocument();

        public Form2()
        {
            InitializeComponent();

            if (!File.Exists(arquivo))
            {
                XmlNode nodeRoot = xmlDoc.CreateElement("Contatos");
                xmlDoc.AppendChild(nodeRoot);
                xmlDoc.Save(arquivo);
            }
            else
            {
                LerAgenda();
            }
        }

        private void LerAgenda()
        {
            xmlDoc.Load(arquivo);

            lblAgenda.Text = "Contatos:\n\n";

            foreach (XmlNode node in xmlDoc.GetElementsByTagName("Contato"))
            {
                lblAgenda.Text += "Nome: " + node.Attributes["nome"].Value +
                    " Telefone: " + node.Attributes["telefone"].Value + "\n";
            }
        }

        private void AdicionarAgenda()
        {
            XElement xElement = new XElement("Contato");
            xElement.Add(new XAttribute("nome", txtNome.Text));
            xElement.Add(new XAttribute("telefone", txtTelefone.Text));

            XElement file = XElement.Load(arquivo);
            file.Add(xElement);
            file.Save(arquivo);
        }

        private void btnSalvar_Click(object sender, EventArgs e)
        {
            AdicionarAgenda();

            LerAgenda();

            LimparForm();
        }

        private void LimparForm()
        {
            txtNome.Clear();
            txtTelefone.Clear();
        }
    }
}
