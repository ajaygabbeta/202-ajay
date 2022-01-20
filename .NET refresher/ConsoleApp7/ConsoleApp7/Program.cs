using System;

namespace ConsoleApp7
{
    class Program
    {
        static void Main(string[] args)
        {
            Class1 t1 = new Class1();
            string productname = t1.GetProductName();
            int productprice = t1.GetProductPrice();
            Console.WriteLine("The product" + productname + " cost " + productprice +"$");
        }
    }
}
