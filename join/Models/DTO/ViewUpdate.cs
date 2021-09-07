using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace join.Models.DTO
{
    public class ViewUpdate
    {
        public Employee employees { get; set; }
        public List<Department> departments { get; set; }
    }
}