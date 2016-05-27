using System.Collections.Generic;

namespace Angular.Dtos
{
    public class CategoryDto
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public byte[] Picture { get; set; }
        public virtual ICollection<ProductDto> Products { get; set; }
    }
}