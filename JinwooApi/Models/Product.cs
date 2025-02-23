namespace JinwooApi.Models
{
    public class Product
    {
        // Khoá chính
        public int Id { get; set; }

        // Brand
        public required string Brand { get; set; }

        // Tên sản phẩm
        public required string Name { get; set; }

        // Giá
        public required decimal Price { get; set; }

        // Số lượng
        public required string img { get; set; }
    }
}