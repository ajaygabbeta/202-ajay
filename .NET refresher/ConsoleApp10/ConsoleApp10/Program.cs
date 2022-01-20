using System;

namespace ConsoleApp10
{
    class Program
    {
        static void Main(string[] args)
        {
            Account obj = new Account();
            double currentBalance = obj.GetBalance();

            //Following thing is not possible since that data member is private
            obj.GetBalance = 2000000;
        }
    }
}
