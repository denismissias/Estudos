using System.Text;

namespace System.TextExample
{
    class Program
    {
        static void Main(string[] args)
        {
            #region String Builder
            StringBuilder sb = new StringBuilder();

            sb.Append("New");
            sb.Append("York");
            sb.Append(34);

            sb.Insert(3, " ");
            sb.Replace('k', 'q');
            //sb.Clear();
            sb.Remove(7, 1);
            sb.Insert(7, "k");

            Console.WriteLine(sb);
            #endregion
        }
    }
}
