"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "vi" | "en"

interface LanguageContextType {
  lang: Language
  setLang: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  vi: {
    home: "Trang Chủ",
    playGame: "Chơi Game",
    aboutGame: "Giới Thiệu Game",
    news: "Tin Tức",
    community: "Cộng Đồng",
    contact: "Liên Hệ",
    playNow: "CHƠI NGAY",
    exploreUniverse: "KHÁM PHÁ VŨ TRỤ",
    slogan: "Du hành qua các thiên hà, khám phá tri thức vũ trụ.",
    keyFeatures: "Tính Năng Nổi Bật",
    educational: "Giáo Dục Đa Ngành",
    multiplayer: "Multiplayer Co-op",
    deepStory: "Cốt Truyện Sâu Sắc",
    stunningGraphics: "Đồ Họa 3D Đỉnh Cao",
    loadingGalaxy: "Đang tải thiên hà...",
    preparingJourney: "Chuẩn bị du hành...",
    initializingAI: "Khởi tạo AI...",
    didYouKnow: "Bạn có biết?",
    systemRequirements: "Yêu Cầu Hệ Thống",
    fullscreen: "Toàn Màn Hình",
    exit: "Thoát",
    exploreChronoVerse: "Khám Phám ChronoVerse",
    storyAndSetting: "Cốt Truyện & Bối Cảnh",
    coreGameplayLoop: "Cơ Chế Chơi Chính",
    educationalGoals: "Mục Tiêu Giáo Dục",
    chapterStructure: "Cấu Trúc Chương",
    multiplayerFeatures: "Tính Năng Multiplayer",
    underlyingTechnology: "Công Nghệ Nền",
    joinDiscord: "THAM GIA DISCORD SERVER",
    faq: "Câu Hỏi Thường Gặp",
    quickLinks: "Liên Kết Nhanh",
    getInTouch: "Liên Hệ",
    allRightsReserved: "Tất cả quyền được bảo lưu.",
    // Chatbot specific
    chronoBotGreeting: "Chào mừng bạn đến với ChronoVerse! Tôi là ChronoBot. Bạn muốn tìm hiểu gì về game?",
    chronoBotTyping: "ChronoBot đang gõ...",
    sendMessage: "Gửi tin nhắn...",
    // News specific
    filterBy: "Lọc theo:",
    search: "Tìm kiếm...",
    devlog: "Nhật ký phát triển",
    patchNotes: "Ghi chú vá lỗi",
    event: "Sự kiện",
    lore: "Truyền thuyết",
    readMore: "Đọc thêm",
    noNewsFound: "Không tìm thấy tin tức nào.",
    socialMedia: "Mạng Xã Hội",
    phone: "Số Điện Thoại",
    contactFormSuccessTitle: "Gửi thành công!",
    contactFormSuccessDescription: "Tin nhắn của bạn đã được gửi đi. Chúng tôi sẽ liên hệ lại sớm nhất có thể.",
    sendUsAMessage: "Gửi Tin Nhắn Cho Chúng Tôi",
    yourName: "Tên của bạn",
    yourEmail: "Email của bạn",
    yourMessage: "Tin nhắn của bạn",
    sending: "Đang gửi...",
    sendMessageButton: "Gửi Tin Nhắn",
    followUs: "Theo Dõi Chúng Tôi",
    connectWithCreator: "Kết Nối Với Người Sáng Tạo",
    journeyInfinite: "Hành Trình Khám Phá Vô Tận",
    chronoVerseDescription:
      "ChronoVerse không chỉ là một trò chơi, mà là một cuộc phiêu lưu giáo dục nhập vai, nơi bạn sẽ khám phá những bí ẩn của vũ trụ, giải mã các hiện tượng khoa học, và xây dựng tương lai của nhân loại.",
    galleryTitle: "Thư Viện Ảnh & Video",
    viewDetails: "Xem Chi Tiết",
    connectWithExplorers: "Kết Nối Với Các Nhà Thám Hiểm Khác",
    joinNow: "Tham Gia Ngay",
    discordDescription:
      "Tham gia Discord Server chính thức của ChronoVerse để trò chuyện với các nhà phát triển, tìm kiếm đồng đội, và nhận thông tin cập nhật mới nhất!",
    storyIntro:
      "Trong tương lai xa, khi Trái Đất không còn là ngôi nhà duy nhất của nhân loại, Học Viện Không Gian ChronoVerse được thành lập với sứ mệnh đào tạo những nhà thám hiểm vũ trụ thế hệ mới. Bạn, một học viên trẻ đầy tiềm năng, sẽ bắt đầu hành trình khám phá những thiên hà chưa từng được biết đến, giải mã các bí ẩn khoa học, và đối mặt với những thách thức vượt ngoài sức tưởng tượng.",
    storyDetail:
      "Cốt truyện của ChronoVerse đan xen giữa khoa học viễn tưởng, lịch sử vũ trụ, và những triết lý sâu sắc về sự tồn tại. Mỗi hành tinh, mỗi trạm không gian bạn đặt chân đến đều ẩn chứa một câu chuyện, một bài học, và những manh mối dẫn đến sự thật cuối cùng về nguồn gốc của vũ trụ và vai trò của ChronoVerse trong đó.",
    gameplayIntro:
      "Gameplay của ChronoVerse tập trung vào ba trụ cột chính: Khám phá, Giải đố, và Xây dựng. Bạn sẽ điều khiển tàu vũ trụ của mình qua các hệ sao, hạ cánh trên các hành tinh đa dạng, và thu thập tài nguyên quý hiếm.",
    gameplayDetail:
      "Các nhiệm vụ giải đố sẽ yêu cầu bạn áp dụng kiến thức khoa học thực tế để vượt qua các chướng ngại vật, từ việc tính toán quỹ đạo hành tinh đến việc giải mã các thuật toán phức tạp. Hệ thống xây dựng cho phép bạn tùy chỉnh tàu vũ trụ, nâng cấp thiết bị, và thậm chí xây dựng các căn cứ nhỏ trên các hành tinh xa xôi.",
    educationIntro:
      "ChronoVerse được thiết kế để biến việc học thành một trải nghiệm thú vị. Mỗi chương game được xây dựng xoay quanh một chủ đề khoa học cụ thể, từ vật lý thiên văn, hóa học, đến sinh học vũ trụ.",
    educationDetail:
      "Người chơi sẽ không chỉ đọc sách giáo khoa mà còn trực tiếp tương tác với các mô hình 3D, thực hiện các thí nghiệm ảo, và chứng kiến các hiện tượng vũ trụ diễn ra ngay trước mắt. Mục tiêu là khơi gợi sự tò mò, khuyến khích tư duy phản biện, và truyền cảm hứng cho thế hệ các nhà khoa học và kỹ sư tương lai.",
    chapterInfoUpdate: "Thông tin chi tiết về gameplay và các nhiệm vụ đặc trưng của chương này sẽ được cập nhật sớm!",
    multiplayerIntro:
      "ChronoVerse mang đến trải nghiệm multiplayer co-op độc đáo, nơi bạn và bạn bè có thể cùng nhau thành lập phi hành đoàn, mỗi người đảm nhận một vai trò chuyên biệt: Phi công, Kỹ sư, hoặc Nhà khoa học.",
    multiplayerDetail:
      "Phi công điều khiển tàu, kỹ sư quản lý năng lượng và sửa chữa, còn nhà khoa học phân tích dữ liệu và giải mã các hiện tượng. Sự phối hợp ăn ý giữa các vai trò là chìa khóa để vượt qua những thử thách khó khăn nhất của vũ trụ.",
    techIntro:
      "ChronoVerse được xây dựng trên nền tảng công nghệ tiên tiến để mang lại trải nghiệm mượt mà và sống động nhất:",
    techUnity:
      "Nền tảng phát triển game 3D mạnh mẽ, cho phép tạo ra đồ họa chất lượng cao và cơ chế gameplay phức tạp.",
    techPhoton:
      "Giải pháp mạng hàng đầu cho multiplayer, đảm bảo kết nối ổn định và đồng bộ hóa dữ liệu mượt mà giữa các người chơi.",
    techWebGL: "Cho phép game chạy trực tiếp trên trình duyệt web mà không cần cài đặt, mang lại sự tiện lợi tối đa.",
    techAI:
      "Được sử dụng để tạo ra các NPC thông minh, hệ thống nhiệm vụ động, và chatbot ChronoBot hỗ trợ người chơi.",
    newsUpdates: "Tin Tức & Cập Nhật",
    all: "Tất cả",
    systemRequirementsNote:
      "Để có trải nghiệm tốt nhất, hãy đảm bảo trình duyệt và driver đồ họa của bạn được cập nhật.",
    cpu: "CPU",
    gpu: "GPU",
    ram: "RAM",
    os: "Hệ điều hành",
    browser: "Trình duyệt",
    cursorChangedTitle: "Con trỏ đã thay đổi",
    cursorChangedDescription: "Con trỏ phi thuyền đã được kích hoạt!",
    cursorResetTitle: "Con trỏ đã khôi phục",
    cursorResetDescription: "Con trỏ mặc định đã được khôi phục.",
    login: "Đăng Nhập",
    register: "Đăng Ký",
    username: "Tên người dùng",
    password: "Mật khẩu",
    confirmPassword: "Xác nhận mật khẩu",
    loginButton: "Đăng Nhập vào ChronoVerse",
    registerButton: "Tạo Tài Khoản ChronoVerse",
    noAccount: "Chưa có tài khoản?",
    alreadyAccount: "Đã có tài khoản?",
    loginSuccessTitle: "Đăng nhập thành công!",
    loginSuccessDescription: "Chào mừng trở lại, nhà thám hiểm!",
    loginErrorTitle: "Đăng nhập thất bại",
    loginErrorDescription: "Tên người dùng hoặc mật khẩu không đúng.",
    registerSuccessTitle: "Đăng ký thành công!",
    registerSuccessDescription: "Tài khoản của bạn đã được tạo. Hãy đăng nhập để bắt đầu hành trình!",
    registerErrorTitle: "Đăng ký thất bại",
    registerErrorDescription: "Đã có lỗi xảy ra khi tạo tài khoản. Vui lòng thử lại.",
    passwordsMismatch: "Mật khẩu không khớp.",
    comments: "Bình luận",
    addComment: "Thêm bình luận",
    postComment: "Đăng bình luận",
    commentPlaceholder: "Viết bình luận của bạn...",
    noComments: "Chưa có bình luận nào. Hãy là người đầu tiên!",
    loginToComment: "Vui lòng đăng nhập để bình luận.",
    commentSuccess: "Bình luận của bạn đã được đăng!",
    commentError: "Không thể đăng bình luận. Vui lòng thử lại.",
  },
  en: {
    home: "Home",
    playGame: "Play Game",
    aboutGame: "About Game",
    news: "News",
    community: "Community",
    contact: "Contact",
    playNow: "PLAY NOW",
    exploreUniverse: "EXPLORE UNIVERSE",
    slogan: "Journey through galaxies, discover cosmic knowledge.",
    keyFeatures: "Key Features",
    educational: "Multi-disciplinary Education",
    multiplayer: "Multiplayer Co-op",
    deepStory: "Deep Storyline",
    stunningGraphics: "Stunning 3D Graphics",
    loadingGalaxy: "Loading galaxy...",
    preparingJourney: "Preparing for journey...",
    initializingAI: "Initializing AI...",
    didYouKnow: "Did You Know?",
    systemRequirements: "System Requirements",
    fullscreen: "Fullscreen",
    exit: "Exit",
    exploreChronoVerse: "Explore ChronoVerse",
    storyAndSetting: "Story & Setting",
    coreGameplayLoop: "Core Gameplay Loop",
    educationalGoals: "Educational Goals",
    chapterStructure: "Chapter Structure",
    multiplayerFeatures: "Multiplayer Features",
    underlyingTechnology: "Underlying Technology",
    joinDiscord: "JOIN DISCORD SERVER",
    faq: "Frequently Asked Questions",
    quickLinks: "Quick Links",
    getInTouch: "Get In Touch",
    allRightsReserved: "All rights reserved.",
    // Chatbot specific
    chronoBotGreeting: "Welcome to ChronoVerse! I am ChronoBot. What would you like to know about the game?",
    chronoBotTyping: "ChronoBot is typing...",
    sendMessage: "Send message...",
    // News specific
    filterBy: "Filter by:",
    search: "Search...",
    devlog: "Devlog",
    patchNotes: "Patch Notes",
    event: "Event",
    lore: "Lore",
    readMore: "Read more",
    noNewsFound: "No news found.",
    socialMedia: "Social Media",
    phone: "Phone Number",
    contactFormSuccessTitle: "Submission Successful!",
    contactFormSuccessDescription: "Your message has been sent. We will get back to you as soon as possible.",
    sendUsAMessage: "Send Us A Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    sending: "Sending...",
    sendMessageButton: "Send Message",
    followUs: "Follow Us",
    connectWithCreator: "Connect With Creator",
    journeyInfinite: "Infinite Journey of Discovery",
    chronoVerseDescription:
      "ChronoVerse is not just a game, but an immersive educational adventure where you will explore the mysteries of the universe, decipher scientific phenomena, and build the future of humanity.",
    galleryTitle: "Image & Video Gallery",
    viewDetails: "View Details",
    connectWithExplorers: "Connect With Other Explorers",
    joinNow: "Join Now",
    discordDescription:
      "Join the official ChronoVerse Discord Server to chat with developers, find teammates, and get the latest updates!",
    storyIntro:
      "In the distant future, when Earth is no longer humanity's sole home, the ChronoVerse Space Academy is founded with the mission to train a new generation of cosmic explorers. You, a young and promising cadet, will embark on a journey to discover unknown galaxies, decipher scientific mysteries, and face challenges beyond imagination.",
    storyDetail:
      "ChronoVerse's storyline intertwines science fiction, cosmic history, and profound philosophies of existence. Every planet, every space station you set foot on holds a story, a lesson, and clues leading to the ultimate truth about the universe's origin and ChronoVerse's role within it.",
    gameplayIntro:
      "ChronoVerse gameplay focuses on three main pillars: Exploration, Puzzles, and Building. You will pilot your spacecraft through star systems, land on diverse planets, and collect rare resources.",
    gameplayDetail:
      "Puzzle missions will require you to apply real-world scientific knowledge to overcome obstacles, from calculating planetary orbits to deciphering complex algorithms. The building system allows you to customize your spacecraft, upgrade equipment, and even establish small bases on distant planets.",
    educationIntro:
      "ChronoVerse is designed to transform learning into an exciting experience. Each game chapter is built around a specific scientific theme, from astrophysics and chemistry to astrobiology.",
    educationDetail:
      "Players will not just read textbooks but directly interact with 3D models, conduct virtual experiments, and witness cosmic phenomena unfold before their eyes. The goal is to spark curiosity, encourage critical thinking, and inspire the next generation of scientists and engineers.",
    chapterInfoUpdate:
      "Detailed information about gameplay and specific missions for this chapter will be updated soon!",
    multiplayerIntro:
      "ChronoVerse offers a unique co-op multiplayer experience, where you and your friends can form a crew, each taking on a specialized role: Pilot, Engineer, or Scientist.",
    multiplayerDetail:
      "Pilots control the ship, engineers manage power and repairs, while scientists analyze data and decipher phenomena. Seamless coordination between roles is key to overcoming the universe's toughest challenges.",
    techIntro: "ChronoVerse is built on advanced technology to deliver the smoothest and most immersive experience:",
    techUnity:
      "A powerful 3D game development platform, allowing for high-quality graphics and complex gameplay mechanics.",
    techPhoton:
      "A leading networking solution for multiplayer, ensuring stable connections and smooth data synchronization between players.",
    techWebGL: "Allows the game to run directly in web browsers without installation, providing maximum convenience.",
    techAI: "Used to create intelligent NPCs, dynamic quest systems, and the ChronoBot chatbot to assist players.",
    newsUpdates: "News & Updates",
    all: "All",
    systemRequirementsNote: "For the best experience, ensure your browser and graphics drivers are updated.",
    cpu: "CPU",
    gpu: "GPU",
    ram: "RAM",
    os: "OS",
    browser: "Browser",
    cursorChangedTitle: "Cursor Changed",
    cursorChangedDescription: "Spaceship cursor activated!",
    cursorResetTitle: "Cursor Reset",
    cursorResetDescription: "Default cursor restored.",
    login: "Login",
    register: "Register",
    username: "Username",
    password: "Password",
    confirmPassword: "Confirm Password",
    loginButton: "Login to ChronoVerse",
    registerButton: "Create ChronoVerse Account",
    noAccount: "Don't have an account?",
    alreadyAccount: "Already have an account?",
    loginSuccessTitle: "Login Successful!",
    loginSuccessDescription: "Welcome back, explorer!",
    loginErrorTitle: "Login Failed",
    loginErrorDescription: "Invalid username or password.",
    registerSuccessTitle: "Registration Successful!",
    registerSuccessDescription: "Your account has been created. Log in to start your journey!",
    registerErrorTitle: "Registration Failed",
    registerErrorDescription: "An error occurred while creating your account. Please try again.",
    passwordsMismatch: "Passwords do not match.",
    comments: "Comments",
    addComment: "Add a comment",
    postComment: "Post Comment",
    commentPlaceholder: "Write your comment...",
    noComments: "No comments yet. Be the first!",
    loginToComment: "Please log in to comment.",
    commentSuccess: "Your comment has been posted!",
    commentError: "Failed to post comment. Please try again.",
  },
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("vi") // Default to Vietnamese

  const t = (key: string) => {
    return translations[lang][key] || key
  }

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
