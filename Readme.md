# 🚀 ChronoVerse: Cổng Vào Vũ Trụ Tri Thức 🌌

![ChronoVerse Banner](public/images/chronoverse-banner.png) ## ✨ Giới Thiệu

**ChronoVerse** không chỉ là một trò chơi; đây là một **hành trình giáo dục nhập vai 3D** xuyên không gian và thời gian. Được phát triển trên Unity, ChronoVerse đưa người chơi vào vai học viên của Học Viện Không Gian, du hành qua các chiều không gian kiến thức từ Vật lý, Toán học, Sinh học đến Công nghệ và Lịch sử khoa học để phục hồi kho tàng tri thức nhân loại. Website này là cổng thông tin chính thức, trung tâm trải nghiệm game (WebGL), và không gian kết nối cộng đồng của ChronoVerse.

---

## 🎯 Mục Tiêu Dự Án

* **Website Tối Ưu:** Cung cấp trải nghiệm website mượt mà, trực quan, và hấp dẫn người dùng, phản ánh đúng tầm vóc khoa học viễn tưởng của game.
* **Phát Hành Game WebGL:** Nền tảng chính để người chơi có thể trải nghiệm game ChronoVerse trực tiếp trên trình duyệt mà không cần cài đặt.
* **Xây Dựng Cộng Đồng:** Tạo không gian tương tác, chia sẻ thông tin, và kết nối giữa các "phi hành gia tri thức".
* **Giáo Dục Sáng Tạo:** Thúc đẩy phương pháp học tập mới mẻ, kết hợp giải trí và kiến thức chuyên sâu.

---

## 🌟 Tính Năng Nổi Bật

* **Chơi Game Trực Tiếp (WebGL):** Trải nghiệm ChronoVerse ngay trên trình duyệt của bạn.
* **Giao Diện Hiện Đại & Đầy Hiệu Ứng:** Thiết kế Sci-fi với animations mượt mà, parallax scrolling, và hiệu ứng ánh sáng neon bắt mắt.
* **Chế Độ Dark Mode Mặc Định:** Tối ưu hóa trải nghiệm thị giác với chủ đề không gian.
* **Hỗ Trợ Đa Ngôn Ngữ (VN/EN):** Tiếp cận cộng đồng người chơi toàn cầu.
* **Floating Chat AI (ChronoBot):** Trợ lý AI thông minh sẵn sàng giải đáp mọi thắc mắc về game, cốt truyện, gameplay, và khoa học.
* **Responsive Design:** Tối ưu hóa trải nghiệm trên mọi thiết bị (Desktop, Tablet, Mobile).
* **Tin Tức & Cập Nhật:** Luôn cập nhật những thông tin mới nhất về quá trình phát triển và các sự kiện trong game.
* **Cộng Đồng Sống Động:** Kết nối qua Discord, mạng xã hội để thảo luận và tham gia các hoạt động.

---

## 🛠️ Công Nghệ Sử Dụng (Front-end)

* **Framework:** [Next.js](https://nextjs.org/) (React)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
* **Localization:** [i18next](https://www.i18next.com/)
* **Deployment:** [Vercel](https://vercel.com/) (Dễ dàng tích hợp với Next.js)

---

## 🚀 Cài Đặt & Chạy Dự Án

Để cài đặt và chạy website ChronoVerse trên máy cục bộ, bạn cần:

1.  **Clone Repository:**
    ```bash
    git clone [https://github.com/StephenSouth13/Chronoverse-Website-Game.git](https://github.com/StephenSouth13/Chronoverse-Website-Game.git)
    cd Chronoverse-Website-Game
    ```
2.  **Cài đặt Dependencies:**
    ```bash
    npm install
    # hoặc
    yarn install
    ```
3.  **Cấu Hình Biến Môi Trường:**
    Tạo file `.env.local` ở thư mục gốc của dự án và thêm các biến môi trường cần thiết. Ví dụ (cho Chat AI, nếu có API Key):
    ```
    NEXT_PUBLIC_CHATBOT_API_KEY=your_openai_or_gemini_api_key
    ```
    *Lưu ý:* Luôn giữ các khóa API nhạy cảm ngoài tầm kiểm soát của Git.

4.  **Chạy Development Server:**
    ```bash
    npm run dev
    # hoặc
    yarn dev
    ```
    Mở trình duyệt và truy cập `http://localhost:3000` để xem website.

5.  **Build cho Production:**
    ```bash
    npm run build
    # hoặc
    yarn build
    ```
6.  **Chạy Production Server:**
    ```bash
    npm start
    # hoặc
    yarn start
    ```

---

## 🎮 Tích Hợp Game WebGL

1.  **Build game Unity:** Sau khi build game ChronoVerse từ Unity Editor ra WebGL, bạn sẽ nhận được một thư mục (ví dụ: `WebGLBuild`).
2.  **Copy Files:** Copy toàn bộ nội dung của thư mục `WebGLBuild` vào thư mục `public` của dự án Next.js này (ví dụ: `public/game`).
3.  **Nhúng Game:** Trang chơi game (`/app/play/page.tsx` hoặc tương tự) sẽ sử dụng một `<iframe>` hoặc các kỹ thuật nhúng Unity WebGL loader để hiển thị game.

    Ví dụ đơn giản trong `pages/play.tsx` (nếu dùng Pages Router) hoặc Client Component trong App Router:
    ```jsx
    // app/play/page.tsx (Ví dụ đơn giản, bạn sẽ cần logic phức tạp hơn cho Unity WebGL Loader)
    'use client'; // Quan trọng nếu đây là Client Component

    export default function PlayGame() {
      return (
        <div className="flex justify-center items-center min-h-screen bg-black">
          <iframe
            src="/game/index.html" // Đường dẫn tới file index.html của game WebGL trong public/game
            title="ChronoVerse Game"
            className="w-full h-screen border-none"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
    ```
    *Lưu ý:* Việc nhúng Unity WebGL có thể yêu cầu một số tinh chỉnh JS để xử lý loading, full screen, và tương tác tốt nhất.

---

## 🤝 Đóng Góp

Dự án này được phát triển bởi **Quách Thành Long**. Mặc dù đây là một dự án cá nhân, tôi luôn hoan nghênh những ý tưởng và đóng góp tích cực từ cộng đồng. Nếu bạn có bất kỳ gợi ý, báo cáo lỗi, hoặc muốn đóng góp, vui lòng mở một **Issue** hoặc **Pull Request** trên GitHub.

---

## 👨‍🚀 Thông Tin Liên Hệ

**Quách Thành Long**
* **Email:** stephensouth1307@gmail.com
* **Điện thoại:** 0979 137 018
* **Địa điểm:** Hồ Chí Minh, Việt Nam
* **Portfolio Cá Nhân:** [quachthanhlong.com](https://www.quachthanhlong.com/)
* **GitHub:** [StephenSouth13](https://github.com/StephenSouth13)
* **LinkedIn:** [Your LinkedIn Profile](https://www.linkedin.com/in/your-linkedin-profile) * **X/Twitter:** [@YourTwitterHandle](https://x.com/your-twitter-handle) ---

## 📄 Giấy Phép

Dự án này được cấp phép theo [**MIT License**](LICENSE). Xem file `LICENSE` để biết thêm chi tiết.