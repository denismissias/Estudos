using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;
using System.Threading;

namespace System.GlobalizationExample
{
    class Program
    {
        static void Main(string[] args)
        {
            #region Calendar
            //TimeSpan ts1 = new TimeSpan(1000);

            DateTime data1 = DateTime.Now;

            //Calendar calendario;

            DateTime data = new DateTime(2014, 02, 17, new GregorianCalendar());

            data.AddHours(3);

            DateTime data2 = DateTime.Now;

            //TimeSpan ts2 = new TimeSpan(3000);

            //ts1.Subtract(ts2);

            TimeSpan t = data2.Subtract(data1);

            Console.WriteLine(t);
            #endregion

            #region CultureInfo
            CultureInfo cultureInfo = new CultureInfo("en-Us");
            #endregion

            #region CultureInfo - Threading
            CultureInfo cultura = Thread.CurrentThread.CurrentCulture;

            Thread.CurrentThread.CurrentUICulture = cultureInfo;

            CultureInfo cultureInfoUI = Thread.CurrentThread.CurrentUICulture;

            Console.WriteLine(GlobalizationExample.Main.DESCRICAO);
            #endregion
        }
    }
}
