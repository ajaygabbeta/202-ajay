using System;
using System.Collections;


namespace ConsoleApp13
{
    class Program
    {
        static void Main(string[] args)
        {
            ArrayList arryList1 = new ArrayList();
            arryList1.Add(1);
            arryList1.Add("Two");
            arryList1.Add(3);
            arryList1.Add(4.5);

            //Access individual item using indexer
            int firstElement = (int)arryList1[0];     //returns 1
            string secondElement = (string)arryList1[1];  //return "Two"
            int thirdElement = (int)arryList1[2];     //return 3
            double fourthElement = (double)arryList1[3];     //return 4.5

            Console.WriteLine(firstElement);
            Console.WriteLine(secondElement);
            Console.WriteLine(thirdElement);
            Console.WriteLine(fourthElement);

        }
    }
}
