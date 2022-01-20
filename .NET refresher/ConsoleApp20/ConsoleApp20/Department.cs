using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    public class Department
    {
        public string GetDepartmentName()
        {
            return "B.TECH";
        }

        public int GetNumberOfDepartment()
        {
            return 6;
        }

        public virtual string GetDepartmentDetails()
        {
            return "ECE_1";
        }
    }
}