using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace join.Models
{
    public class Employee
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [ForeignKey("Department")]
        [Required]
        public int DepartmentId { get; set; }

        public virtual Department Department { get; set; }
    }
}