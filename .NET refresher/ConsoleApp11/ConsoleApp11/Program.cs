using System;

namespace ConsoleApp11
{
    class Program
    {
        static void Main(string[] args)
        {
            Overloading c = new Overloading();
            int r1 = c.Add(2, 4, 5);
            int r2 = c.Add(10, 120);
            Console.WriteLine(r1);
            Console.WriteLine(r2);
        }
    }
}
