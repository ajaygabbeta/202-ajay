using System;
using System.Collections;

namespace ConsoleApp19
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue myQueue = new Queue(new int[]{ 231, 347, 593, 385, 934, 285, 472});

            foreach(int value in myQueue)
            {
                Console.WriteLine(value);
            }
            
        }
    }
}
