namespace Assignment
{
    public class Department
    {
        public string GetDepartmentName()
        {
            return "ECE";
        }

        public int GetNumberOfDepartment()
        {
            return 6;
        }

        public virtual string GetDepartmentDetails()
        {
            return "ECE";
        }
    }
}