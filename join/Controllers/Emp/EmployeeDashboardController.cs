using join.Models;
using join.Models.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace join.Controllers.Emp
{
    public class EmployeeDashboardController : Controller
    {
        // GET: EmployeeDashboard
        public ActionResult Index()
        {
            return View();
        }

        [Route("emp/data")]
        public ActionResult GetDataEmployee()
        {
            DB dB = new DB();
            List<Employee> employee = dB.Employees.ToList();
            return Json(employee, JsonRequestBehavior.AllowGet);
        }

        public ActionResult IndexCreate(Employee employee)
        {
            DB dB = new DB();
            var departments = dB.Departments.ToList();
            return View(departments);
        }

        [HttpPost]
        public ActionResult PostCreate(Employee employee)
        {
            DB db = new DB();
            Employee e = new Employee();
            e.Name = employee.Name;
            e.DepartmentId = employee.DepartmentId;

            db.Employees.Add(e);
            db.SaveChanges();
            return Json(e);
        }


        public ActionResult IndexUpdate(int id)
        {
            DB db = new DB();
            ViewUpdate viewUpdate = new ViewUpdate();
            viewUpdate.employees = db.Employees.First(x => x.Id == id);
            viewUpdate.departments = db.Departments.ToList();

            var department = db.Departments.ToList();
            ViewBag().Department = new SelectList(department,"departmentId","departmentName");
            return View(viewUpdate);
        }
    }
}