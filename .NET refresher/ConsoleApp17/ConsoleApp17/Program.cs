using System;

namespace ConsoleApp17
{
    class Program
    {
        static void Main(string[] args)
        {
            Person Person1 = new Person("abhi", 26);
            Console.WriteLine("Person1 name = {0} Age = {1}", Person1.name, Person1.age);
            Person Person2 = Person1;
            Person2.name = "Ajay";
            Person2.age = 30;
            Console.WriteLine("Person2 name = {0} Age = {1}", Person2.name, Person2.age);
        }
    }
}
