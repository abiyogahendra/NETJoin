using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Web;

namespace join.Models
{
    public class Department
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        
      /*  public Department()
        {
            employees = new List<Employee>();
        }

        [NonSerialized()]
        public virtual ICollection<Employee> employees { get; set; }*/
    }
}