import type { NewsArticle, FAQItem, KeyFeature, Chapter } from "./types"

export const mockNews: NewsArticle[] = [
  {
    slug: "devlog-01-first-steps",
    title: "Devlog #01: Những Bước Chân Đầu Tiên vào ChronoVerse",
    title_en: "Devlog #01: First Steps into ChronoVerse",
    date: "2025-07-10",
    type: "Devlog",
    thumbnail: "/placeholder.svg?height=300&width=400",
    shortDescription:
      "Khám phá quá trình phát triển ban đầu của ChronoVerse, từ ý tưởng đến những nguyên mẫu đầu tiên.",
    shortDescription_en: "Discover the initial development process of ChronoVerse, from concept to first prototypes.",
    content: `
Chào mừng các bạn đến với nhật ký phát triển đầu tiên của ChronoVerse!

Chúng tôi rất vui mừng được chia sẻ hành trình tạo ra một thế giới game 3D giáo dục nhập vai độc đáo. Trong devlog này, chúng tôi sẽ đi sâu vào những ý tưởng ban đầu, các thách thức thiết kế, và cách chúng tôi bắt đầu xây dựng nền tảng cho trải nghiệm khám phá vũ trụ.

**Ý tưởng cốt lõi:** ChronoVerse ra đời từ mong muốn kết hợp niềm đam mê khoa học vũ trụ với trải nghiệm game nhập vai hấp dẫn. Mục tiêu là tạo ra một không gian nơi người chơi không chỉ giải trí mà còn học hỏi được những kiến thức thực tế về thiên văn học, vật lý, và công nghệ không gian.

**Thiết kế ban đầu:** Chúng tôi đã dành nhiều thời gian để phác thảo các hành tinh, tàu vũ trụ, và các nhân vật. Mỗi yếu tố đều được thiết kế để phản ánh phong cách khoa học viễn tưởng cao cấp, đồng thời đảm bảo tính chính xác khoa học ở mức độ nhất định.

**Thách thức:** Một trong những thách thức lớn nhất là làm thế nào để tích hợp nội dung giáo dục một cách tự nhiên vào gameplay mà không làm mất đi sự hấp dẫn của game. Chúng tôi đang thử nghiệm các cơ chế giải đố, nhiệm vụ khám phá, và tương tác với môi trường để đạt được sự cân bằng này.

Hãy theo dõi để biết thêm các cập nhật trong tương lai!
  `,
    content_en: `
Welcome to the first devlog of ChronoVerse!

We are thrilled to share the journey of creating a unique 3D educational RPG game world. In this devlog, we'll delve into the initial ideas, design challenges, and how we began building the foundation for a cosmic exploration experience.

**Core Idea:** ChronoVerse was born from the desire to combine a passion for space science with an engaging RPG experience. The goal is to create a space where players not only have fun but also learn real-world knowledge about astronomy, physics, and space technology.

**Initial Design:** We spent a lot of time sketching planets, spacecraft, and characters. Each element is designed to reflect a high-tech sci-fi aesthetic while ensuring a certain level of scientific accuracy.

**Challenges:** One of the biggest challenges is how to naturally integrate educational content into gameplay without losing the game's appeal. We are experimenting with puzzle mechanics, exploration quests, and environmental interactions to achieve this balance.

Stay tuned for more future updates!
  `,
  },
  {
    slug: "patch-notes-v0-1",
    title: "Ghi Chú Vá Lỗi v0.1: Cải Thiện Trải Nghiệm Khám Phá",
    title_en: "Patch Notes v0.1: Improving Exploration Experience",
    date: "2025-07-15",
    type: "Patch Notes",
    thumbnail: "/placeholder.svg?height=300&width=400",
    shortDescription: "Bản vá đầu tiên tập trung vào việc tối ưu hóa hiệu suất và sửa lỗi nhỏ trong cơ chế khám phá.",
    shortDescription_en:
      "The first patch focuses on optimizing performance and fixing minor bugs in the exploration mechanics.",
    content: `
Chúng tôi vừa phát hành bản vá lỗi đầu tiên cho ChronoVerse, tập trung vào việc cải thiện trải nghiệm khám phá và tối ưu hóa hiệu suất.

**Cải thiện:**
- Tối ưu hóa tải tài nguyên trên các hành tinh ban đầu để giảm thời gian chờ.
- Điều chỉnh tốc độ di chuyển của tàu vũ trụ để mang lại cảm giác mượt mà hơn.
- Cải thiện giao diện người dùng cho bản đồ thiên hà.

**Sửa lỗi:**
- Khắc phục lỗi khiến một số vật phẩm không hiển thị đúng cách trong kho đồ.
- Sửa lỗi va chạm nhỏ ở khu vực Sao Thủy.
- Giải quyết vấn đề âm thanh bị ngắt quãng trên một số cấu hình máy.

Chúng tôi luôn lắng nghe phản hồi từ cộng đồng để mang lại trải nghiệm tốt nhất!
  `,
    content_en: `
We have just released the first patch for ChronoVerse, focusing on improving the exploration experience and optimizing performance.

**Improvements:**
- Optimized resource loading on initial planets to reduce waiting times.
- Adjusted spacecraft movement speed for a smoother feel.
- Improved the user interface for the galaxy map.

**Bug Fixes:**
- Fixed a bug where some items were not displayed correctly in the inventory.
- Corrected minor collision issues in the Mercury area.
- Resolved intermittent audio problems on some system configurations.

We are always listening to community feedback to provide the best experience!
  `,
  },
]

export const mockFAQs: FAQItem[] = [
  {
    question: "ChronoVerse là game thể loại gì?",
    question_en: "What genre is ChronoVerse?",
    answer:
      "ChronoVerse là một game 3D giáo dục nhập vai khám phá vũ trụ, kết hợp yếu tố phiêu lưu, giải đố và học hỏi khoa học.",
    answer_en:
      "ChronoVerse is a 3D educational RPG game exploring the universe, combining elements of adventure, puzzles, and scientific learning.",
  },
  {
    question: "Tôi có thể chơi ChronoVerse trên nền tảng nào?",
    question_en: "What platforms can I play ChronoVerse on?",
    answer:
      "Hiện tại, ChronoVerse được phát triển để chơi trực tiếp trên trình duyệt thông qua công nghệ WebGL. Bạn chỉ cần một trình duyệt web hiện đại và kết nối internet.",
    answer_en:
      "Currently, ChronoVerse is developed to be played directly in the browser via WebGL technology. You only need a modern web browser and an internet connection.",
  },
  {
    question: "Game có hỗ trợ multiplayer không?",
    question_en: "Does the game support multiplayer?",
    answer:
      "Có, ChronoVerse hỗ trợ chế độ multiplayer co-op, cho phép bạn cùng bạn bè khám phá vũ trụ và hoàn thành nhiệm vụ.",
    answer_en:
      "Yes, ChronoVerse supports multiplayer co-op mode, allowing you and your friends to explore the universe and complete missions together.",
  },
  {
    question: "Làm thế nào để tham gia cộng đồng ChronoVerse?",
    question_en: "How can I join the ChronoVerse community?",
    answer:
      "Bạn có thể tham gia Discord Server chính thức của chúng tôi hoặc theo dõi các kênh mạng xã hội như X/Twitter, YouTube, Instagram để cập nhật thông tin và kết nối với những người chơi khác.",
    answer_en:
      "You can join our official Discord Server or follow our social media channels like X/Twitter, YouTube, Instagram for updates and to connect with other players.",
  },
]

export const mockKeyFeatures: KeyFeature[] = [
  {
    icon: "GraduationCap", // Lucide icon name
    title: "Giáo Dục Đa Ngành",
    title_en: "Multi-disciplinary Education",
    description: "Học hỏi về thiên văn, vật lý, sinh học vũ trụ qua các nhiệm vụ hấp dẫn.",
    description_en: "Learn about astronomy, physics, and astrobiology through engaging missions.",
  },
  {
    icon: "Users", // Lucide icon name
    title: "Multiplayer Co-op",
    title_en: "Multiplayer Co-op",
    description: "Lập đội với bạn bè, cùng nhau khám phá và giải quyết các bí ẩn vũ trụ.",
    description_en: "Team up with friends, explore together, and solve cosmic mysteries.",
  },
  {
    icon: "BookOpen", // Lucide icon name
    title: "Cốt Truyện Sâu Sắc",
    title_en: "Deep Storyline",
    description: "Đắm chìm vào một câu chuyện khoa học viễn tưởng đầy kịch tính và bất ngờ.",
    description_en: "Immerse yourself in a thrilling and surprising sci-fi narrative.",
  },
  {
    icon: "Sparkles", // Lucide icon name
    title: "Đồ Họa 3D Đỉnh Cao",
    title_en: "Stunning 3D Graphics",
    description: "Trải nghiệm vũ trụ sống động với đồ họa chất lượng cao và hiệu ứng ấn tượng.",
    description_en: "Experience a vibrant universe with high-quality graphics and impressive effects.",
  },
]

export const mockChapters: Chapter[] = [
  {
    id: "mercury",
    name: "Sao Thủy",
    name_en: "Mercury",
    icon: "Sun", // Placeholder icon
    theme: "Năng lượng & Bức xạ",
    theme_en: "Energy & Radiation",
    description: "Khám phá nguồn năng lượng mặt trời và tác động của bức xạ.",
    description_en: "Explore solar energy sources and the effects of radiation.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "venus",
    name: "Sao Kim",
    name_en: "Venus",
    icon: "Cloud",
    theme: "Khí quyển & Hiệu ứng nhà kính",
    theme_en: "Atmosphere & Greenhouse Effect",
    description: "Tìm hiểu về khí hậu khắc nghiệt và hiệu ứng nhà kính trên Sao Kim.",
    description_en: "Learn about the extreme climate and greenhouse effect on Venus.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "mars",
    name: "Sao Hỏa",
    name_en: "Mars",
    icon: "Rocket",
    theme: "Địa chất & Khả năng sống",
    theme_en: "Geology & Habitability",
    description: "Nghiên cứu địa chất Sao Hỏa và tiềm năng sự sống.",
    description_en: "Study Martian geology and the potential for life.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "spacestation",
    name: "Trạm Thời Gian",
    name_en: "Time Station",
    icon: "Clock",
    theme: "Vật lý lượng tử & Du hành thời gian",
    theme_en: "Quantum Physics & Time Travel",
    description: "Giải mã bí ẩn của thời gian và không gian tại trạm nghiên cứu tiên tiến.",
    description_en: "Unravel the mysteries of time and space at the advanced research station.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "darkzone",
    name: "Vùng Tối",
    name_en: "Dark Zone",
    icon: "EyeOff",
    theme: "Vật chất tối & Năng lượng tối",
    theme_en: "Dark Matter & Dark Energy",
    description: "Thâm nhập vào vùng không gian bí ẩn để khám phá vật chất và năng lượng tối.",
    description_en: "Delve into mysterious space to uncover dark matter and dark energy.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export const mockGalleryImages = [
  "/placeholder.svg?height=720&width=1280",
  "/placeholder.svg?height=720&width=1280",
  "/placeholder.svg?height=720&width=1280",
  "/placeholder.svg?height=720&width=1280",
  "/placeholder.svg?height=720&width=1280",
]
