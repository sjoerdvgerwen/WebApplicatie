using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lean_To_Green.Core.Entities
{
    public class Comment
    {
        public int CommentId { get; set; }
        public string CommentContent { get; set; }
        public int UserId { get; set; }
        
    }
}
