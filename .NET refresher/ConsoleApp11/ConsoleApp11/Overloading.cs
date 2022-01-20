using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp11
{
    class Overloading
    {
        public int Add(int a,int b, int c)
        {
            return a + b + c;
        }
        public int Add(int a, int b)
        {
            return a + b;
        }
    }
}
