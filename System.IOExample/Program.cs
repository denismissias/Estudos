using System.IO;
using System.Text;

namespace System.IOExample
{
    class Program
    {
        static void Main(string[] args)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("Denis de Sousa Missias");

            File.AppendAllText(@"C:\Users\Denis Missias\Desktop\1.txt", sb.ToString());

            String[] values = { "Line 1", "Line 2", "Line 3" };

            File.AppendAllLines(@"C:\Users\Denis Missias\Desktop\2.txt", values);

            //File.Copy(@"C:\Users\Denis Missias\Desktop\1.txt", @"C:\Users\Denis Missias\Desktop\3.txt");

            //File.Encrypt(@"C:\Users\Denis Missias\Desktop\3.txt");

            File.Delete(@"C:\Users\Denis Missias\Desktop\3.txt");
        }
    }
}
