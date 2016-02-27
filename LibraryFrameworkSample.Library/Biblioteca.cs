using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryFrameworkSample.Library
{
    public class Biblioteca
    {
        Int16 codLivro;

        public Int16 CodLivro
        {
            get 
            { 
                return codLivro; 
            }
            set 
            { 
                codLivro = value; 
            }
        }
    }
}
