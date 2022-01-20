using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp12
{
    abstract class AbsClass
    {
        public int AddTwoNumbers(int a, int b)
        {
            return a + b;
        }
        public abstract int MultiplyTwoNumbers(int num1, int num2);
    }
}
