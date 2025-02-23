JIN WOO SHOES - Hệ Thống Quản Lý & Bán Hàng	
📌 Giới thiệu
Đây là hệ thống website dành cho cửa hàng Jin Woo Shoes, bao gồm:
  JinwooApi (Backend - ASP.NET Core)
  jinwoo (Frontend - Vue.js)
📂 Cấu trúc thư mục
JIN-WOO-SHOES/
│── JinwooApi/      # Backend API (ASP.NET Core, SQL Server)
│── jinwoo/         # Frontend (Vue.js)
│── JinwooApi.sln   # File giải pháp cho .NET
│── README.md       # Hướng dẫn sử dụng

🚀 Hướng dẫn cài đặt & chạy dự án
🏗️ 1. Cài đặt Backend (JinwooApi - ASP.NET Core)
Yêu cầu:
  .NET 8.0 SDK
  SQL Server
  Visual Studio (hoặc Rider, VS Code với C# extension)
Cách chạy:
Clone repo:
  git clone https://github.com/yourusername/JIN-WOO-SHOES.git
  cd JIN-WOO-SHOES/JinwooApi
Cấu hình database:
    Mở file appsettings.json, cập nhật chuỗi kết nối:
        "ConnectionStrings": {
          "DefaultConnection": "Server=YOUR_SERVER;Database=JinwooDB;Trusted_Connection=True;MultipleActiveResultSets=true"
        }   
    Chạy lệnh tạo database:
        dotnet ef database update
Chạy API:
    dotnet run
Hoặc mở Visual Studio, chọn JinwooApi và nhấn Run.

🎨 2. Cài đặt Frontend (jinwoo - Vue.js)
Yêu cầu:
  Node.js (>= 16.x)
  npm hoặc yarn
Cách chạy:
Đi vào thư mục frontend
    cd ../jinwoo
    
Cài đặt dependencies:
    npm install

Chạy ứng dụng:
    npm run serve
    
Mặc định frontend sẽ chạy tại: http://localhost:8080
                                                                                                                                          
🔗 API & Kết nối Frontend - Backend
📌 Cấu hình API trong Frontend
Mở file .env hoặc src/config.js, cập nhật URL backend:
    export const API_BASE_URL = "http://localhost:5000/api";
⚠️ Lưu ý: Nếu backend chạy trên cổng khác, hãy cập nhật URL tương ứng.


Các công nghệ sử dụng:
  Backend: ASP.NET Core, Entity Framework Core, SQL Server
  Frontend: Vue.js, Vue Router, Axios
  Database: SQL Server
  Authentication: JWT (JSON Web Token)  

Nếu gặp lỗi CORS khi gọi API, hãy bật CORS trong Program.cs (backend).
Nếu frontend không kết nối được API, hãy kiểm tra API_BASE_URL.
