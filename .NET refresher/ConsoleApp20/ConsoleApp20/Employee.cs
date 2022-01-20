using System;

namespace Assignment
{
    public class Employee : Department
    {
        public string GetEmployeeFirstName()
        {
            return "Ajay";
        }

        public string GetEmployeeLastName()
        {
            return "jay";
        }

        public override string GetDepartmentDetails()
        {
            return "ECE_2";
        }
        public static void Main(string[] args)
        {
            Department department = new Department();
            Department employee = new Employee();
            Console.WriteLine(department.GetDepartmentDetails()); //calling method of base class
            Console.WriteLine(employee.GetDepartmentDetails()); //calling method of child class, example of polymorphism 
            Console.ReadKey();
        }
    }
}
