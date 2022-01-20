using System;

namespace ConsoleApp12
{
    class Program : AbsClass
    {
        public override int MultiplyTwoNumbers(int num1, int num2)
        {
            return num1 * num2;
        }

        static void Main()
        {
            Program c = new Program();
            int m = c.AddTwoNumbers(10, 20);
            int n = c.MultiplyTwoNumbers(6, 7);
            Console.WriteLine(m);
            Console.WriteLine(n);
        }
    }
}
