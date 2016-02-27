using System;
using LibraryFrameworkSample.Library;

namespace LibraryFrameworkSample
{
    public class Livro
    {
        String titulo;

        public String Titulo
        {
            get
            {
                return titulo;
            }
            set
            {
                titulo = value;
            }
        }
        
        String autor;

        public String Autor
        {
            get
            {
                return autor;
            }
            set
            {
                autor = value;
            }
        }

        Int16 anoPublicacao;

        public Int16 AnoPublicacao
        {
            get
            {
                return anoPublicacao;
            }
            set
            {
                anoPublicacao = value;
            }
        }

        Biblioteca biblioteca;

        public Biblioteca Biblioteca
        {
            get
            {
                return biblioteca;
            }
            set
            {
                biblioteca = value;
            }
        }
    }
}
