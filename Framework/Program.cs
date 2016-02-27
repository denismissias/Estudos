using System;
using LibraryFrameworkSample;

namespace Framework
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Livro livro = new Livro();

            livro.Autor = "Denis";
            livro.Titulo = "O Sucesso das Cervejas Mestras";
            livro.AnoPublicacao = 2015;

            Console.WriteLine(livro.Autor + " " + livro.Titulo + " " + livro.AnoPublicacao);
        }
    }
}
