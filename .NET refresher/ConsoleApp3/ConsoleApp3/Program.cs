using System;

namespace ConsoleApp3
{
    class Program
    {
        static void Main(string[] args)
        {
            Product product = new Product();
            string orderName = product.GetOrderName();
            string orderProduct = product.GetProductName();

            Console.WriteLine(orderName + " " +orderProduct);
        }
    }
}
