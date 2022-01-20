using System;

namespace ConsoleApp5
{
    class Program
    {
        static void Increment(ref int i)
        {
            i = i + 1;
        }

        static void Main()
        {
            int x = 1;
            Increment(ref x);
            Console.WriteLine("The value of x is : " + x);
            Console.Read();
        }
    }
}
