using System.IO;
using System.Windows.Forms;
using System.Xml;

namespace System.XmlExample
{
    public partial class Form1 : Form
    {
        String arquivo = @"C:\Users\Denis Missias\Desktop\Agenda.xml";
        XmlDocument xmlDoc = new XmlDocument();

        public Form1()
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

        private void btnSalvar_Click(object sender, EventArgs e)
        {
            xmlDoc.Load(arquivo);

            XmlNode nodeName = xmlDoc.CreateElement("Nome");
            XmlNode nodePhone = xmlDoc.CreateElement("Telefone");

            nodeName.InnerText = txtNome.Text;
            nodePhone.InnerText = txtTelefone.Text;

            XmlNode nodeContato = xmlDoc.CreateElement("Contato");
            xmlDoc.SelectSingleNode("/Contatos").PrependChild(nodeContato);

            xmlDoc.SelectSingleNode("/Contatos/Contato").AppendChild(nodeName);
            xmlDoc.SelectSingleNode("/Contatos/Contato").AppendChild(nodePhone);
            xmlDoc.Save(arquivo);

            LerAgenda();

            LimparForm();
        }

        private void LimparForm()
        {
            txtNome.Clear();
            txtTelefone.Clear();
        }

        private void LerAgenda()
        {
            xmlDoc.Load(arquivo);

            lblAgenda.Text = "Contatos:\n\n";

            foreach (XmlNode node in xmlDoc.GetElementsByTagName("Contato"))
            {
                lblAgenda.Text += "Nome: " + node.ChildNodes[0].InnerText + 
                    " Telefone: " + node.ChildNodes[1].InnerText + "\n";
            }
        }
    }
}
