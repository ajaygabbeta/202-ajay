using System;

namespace ConsoleApp8
{
    class Program
    {
        static void Main(string[] args)
        {
            Animal myAnimal = new Dog();
            myAnimal.Greet();
            myAnimal.Talk();
            myAnimal.Sing();
        }
    }
}
