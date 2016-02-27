using System.Globalization;
using System.Resources;

namespace System.ResourcesExample
{
    class Program
    {
        static void Main(string[] args)
        {
            ResourceManager resouceManager = new ResourceManager(typeof(ResourcesExample.Main));
            Console.WriteLine(resouceManager.GetString("DESCRICAO", new CultureInfo("en-US")));

            Console.WriteLine(ResourceHelper.getResource("DESCRICAO"));
        }
    }
}
