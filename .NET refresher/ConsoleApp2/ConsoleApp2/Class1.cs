using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string [] args)
        {
            Employee emp = new Employee();
            string departmentName = emp.GetDeptName();
            string employeeName = emp.GetEmpName();

            Console.WriteLine(employeeName + "belongs to " + departmentName);
        }
    }
}
