import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      home: "Home",
      play_game: "Play Game",
      explore_universe: "Explore Universe",
      about_game: "About ChronoVerse",
      news_updates: "News & Updates",
      community: "Community",
      play_now: "PLAY NOW",
      discover_universe: "DISCOVER THE UNIVERSE",
      slogan: "Embark on an epic journey through the cosmos, where knowledge is your greatest weapon.",
      brief_intro_title: "Unveiling ChronoVerse",
      brief_intro_text:
        "ChronoVerse is a groundbreaking 3D educational RPG that blends immersive gameplay with scientific exploration. Discover ancient civilizations, unravel cosmic mysteries, and learn about the universe like never before.",
      key_features_title: "Key Features",
      feature_education: "Multidisciplinary Education",
      feature_multiplayer: "Multiplayer Co-op",
      feature_story: "Deep Storyline",
      join_community: "Join Our Community",
      loading_game: "Loading Game...",
      loading_galaxy: "Loading Galaxy...",
      preparing_journey: "Preparing for Journey...",
      initializing_ai: "Initializing AI...",
      did_you_know: "Did You Know?",
      system_requirements: "System Requirements",
      recommended_config: "Recommended Configuration:",
      browser_support: "Browser Support:",
      explore_chronoverse: "Explore ChronoVerse",
      story_lore: "Story & Lore",
      gameplay_loop: "Gameplay Core Loop",
      educational_goals: "Educational Goals",
      chapter_structure: "Chapter Structure",
      multiplayer_features: "Multiplayer Features",
      underlying_tech: "Underlying Technology",
      team: "Team",
      join_discord: "Join Discord Server",
      faq: "Frequently Asked Questions",
      contact_us: "Contact Us",
      full_screen: "Fullscreen",
      exit_game: "Exit Game",
      volume: "Volume",
      mercury: "Mercury",
      venus: "Venus",
      earth: "Earth",
      mars: "Mars",
      jupiter: "Jupiter",
      saturn: "Saturn",
      uranus: "Uranus",
      neptune: "Neptune",
      pluto: "Pluto",
      chapter_mercury_desc:
        "Learn about the scorching hot, cratered surface of Mercury and its unique orbital characteristics.",
      chapter_venus_desc: "Explore the dense, toxic atmosphere of Venus and its extreme greenhouse effect.",
      chapter_earth_desc: "Discover the diverse ecosystems and geological wonders of our home planet.",
      chapter_mars_desc:
        "Journey to the red planet, investigating its potential for past life and future colonization.",
      chapter_jupiter_desc: "Unravel the mysteries of Jupiter's Great Red Spot and its many moons.",
      chapter_saturn_desc: "Marvel at the majestic rings of Saturn and its icy satellites.",
      chapter_uranus_desc: "Delve into the icy giant Uranus, known for its unique axial tilt.",
      chapter_neptune_desc: "Explore the distant, windy world of Neptune and its powerful storms.",
      chapter_pluto_desc: "Investigate the dwarf planet Pluto and the Kuiper Belt.",
      chat_ai_placeholder: "Ask ChronoBot anything...",
      send: "Send",
      typing_indicator: "ChronoBot is typing...",
      chat_welcome: "Hello! I'm ChronoBot, your guide to the ChronoVerse. How can I help you today?",
      chat_about_game:
        "ChronoVerse is a 3D educational RPG where you explore the universe, learn about science, and uncover cosmic mysteries. It blends immersive gameplay with real-world knowledge.",
      chat_lore:
        "The story of ChronoVerse revolves around the Space Academy, tasked with restoring lost knowledge across the cosmos. You are a cadet on a mission to explore different celestial bodies and gather data.",
      chat_gameplay:
        "Gameplay involves exploration, puzzle-solving, resource gathering, and cooperative missions. Each chapter focuses on a different planet and scientific theme.",
      chat_chapters:
        "The game features chapters based on planets like Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, and even Pluto. Each chapter introduces new scientific concepts and challenges.",
      chat_multiplayer:
        "ChronoVerse supports multiplayer co-op, allowing players to team up for missions, share discoveries, and participate in community events. You can take on different roles to achieve objectives.",
      chat_tech:
        "ChronoVerse is developed using Unity for the game engine and Photon Fusion for real-time multiplayer capabilities.",
      chat_system_req:
        "For optimal experience, we recommend a modern browser, a stable internet connection, and a device with at least 8GB RAM and a dedicated GPU.",
      chat_news:
        "You can find the latest news and updates on our News & Updates page, including devlogs, patch notes, and event announcements.",
      chat_community:
        "Join our vibrant community on Discord! You can also follow us on X/Twitter, YouTube, Facebook, Twitch, TikTok, and Instagram.",
      chat_quach_thanh_long:
        "Quách Thành Long is the main creator behind ChronoVerse. You can learn more about him at quachthanhlong.com or connect on LinkedIn and GitHub.",
      chat_default_response:
        "I'm sorry, I don't have enough information to answer that question. Please try rephrasing or ask about ChronoVerse game details.",
    },
  },
  vn: {
    translation: {
      home: "Trang Chủ",
      play_game: "Chơi Game",
      explore_universe: "Khám Phá Vũ Trụ",
      about_game: "Giới Thiệu ChronoVerse",
      news_updates: "Tin Tức & Cập Nhật",
      community: "Cộng Đồng",
      play_now: "CHƠI NGAY",
      discover_universe: "KHÁM PHÁ VŨ TRỤ",
      slogan: "Bắt đầu cuộc hành trình sử thi xuyên vũ trụ, nơi tri thức là vũ khí vĩ đại nhất của bạn.",
      brief_intro_title: "Hé Lộ ChronoVerse",
      brief_intro_text:
        "ChronoVerse là một game RPG giáo dục 3D đột phá, kết hợp lối chơi nhập vai sâu sắc với khám phá khoa học. Khám phá các nền văn minh cổ đại, làm sáng tỏ những bí ẩn vũ trụ và học hỏi về vũ trụ hơn bao giờ hết.",
      key_features_title: "Tính Năng Nổi Bật",
      feature_education: "Giáo Dục Đa Ngành",
      feature_multiplayer: "Multiplayer Co-op",
      feature_story: "Cốt Truyện Sâu Sắc",
      join_community: "Tham Gia Cộng Đồng Của Chúng Tôi",
      loading_game: "Đang Tải Game...",
      loading_galaxy: "Đang tải thiên hà...",
      preparing_journey: "Chuẩn bị du hành...",
      initializing_ai: "Khởi tạo AI...",
      did_you_know: "Bạn có biết?",
      system_requirements: "Yêu Cầu Hệ Thống",
      recommended_config: "Cấu Hình Đề Xuất:",
      browser_support: "Trình Duyệt Hỗ Trợ:",
      explore_chronoverse: "Khám Phá ChronoVerse",
      story_lore: "Câu Chuyện & Bối Cảnh",
      gameplay_loop: "Cơ Chế Chơi Chính",
      educational_goals: "Mục Tiêu Giáo Dục",
      chapter_structure: "Cấu Trúc Chương",
      multiplayer_features: "Tính Năng Multiplayer",
      underlying_tech: "Công Nghệ Nền",
      team: "Đội Ngũ",
      join_discord: "Tham Gia Discord Server",
      faq: "Câu Hỏi Thường Gặp",
      contact_us: "Liên Hệ",
      full_screen: "Toàn Màn Hình",
      exit_game: "Thoát Game",
      volume: "Âm Lượng",
      mercury: "Sao Thủy",
      venus: "Sao Kim",
      earth: "Trái Đất",
      mars: "Sao Hỏa",
      jupiter: "Sao Mộc",
      saturn: "Sao Thổ",
      uranus: "Sao Thiên Vương",
      neptune: "Sao Hải Vương",
      pluto: "Sao Diêm Vương",
      chapter_mercury_desc:
        "Tìm hiểu về bề mặt nóng bỏng, đầy miệng núi lửa của Sao Thủy và các đặc điểm quỹ đạo độc đáo của nó.",
      chapter_venus_desc: "Khám phá bầu khí quyển dày đặc, độc hại của Sao Kim và hiệu ứng nhà kính cực đoan của nó.",
      chapter_earth_desc: "Khám phá các hệ sinh thái đa dạng và kỳ quan địa chất của hành tinh quê hương chúng ta.",
      chapter_mars_desc:
        "Hành trình đến hành tinh đỏ, điều tra tiềm năng sự sống trong quá khứ và khả năng thuộc địa hóa trong tương lai.",
      chapter_jupiter_desc: "Làm sáng tỏ những bí ẩn của Vết Đỏ Lớn của Sao Mộc và nhiều mặt trăng của nó.",
      chapter_saturn_desc: "Chiêm ngưỡng những vành đai hùng vĩ của Sao Thổ và các vệ tinh băng giá của nó.",
      chapter_uranus_desc: "Đi sâu vào hành tinh băng khổng lồ Sao Thiên Vương, nổi tiếng với độ nghiêng trục độc đáo.",
      chapter_neptune_desc: "Khám phá thế giới xa xôi, đầy gió của Sao Hải Vương và những cơn bão mạnh mẽ của nó.",
      chapter_pluto_desc: "Điều tra hành tinh lùn Sao Diêm Vương và Vành đai Kuiper.",
      chat_ai_placeholder: "Hỏi ChronoBot bất cứ điều gì...",
      send: "Gửi",
      typing_indicator: "ChronoBot đang gõ...",
      chat_welcome:
        "Chào bạn! Tôi là ChronoBot, người hướng dẫn của bạn đến ChronoVerse. Tôi có thể giúp gì cho bạn hôm nay?",
      chat_about_game:
        "ChronoVerse là một game RPG giáo dục 3D nơi bạn khám phá vũ trụ, tìm hiểu về khoa học và khám phá những bí ẩn vũ trụ. Nó kết hợp lối chơi nhập vai với kiến thức thực tế.",
      chat_lore:
        "Câu chuyện của ChronoVerse xoay quanh Học Viện Không Gian, được giao nhiệm vụ khôi phục kiến thức đã mất trên khắp vũ trụ. Bạn là một học viên trong nhiệm vụ khám phá các thiên thể khác nhau và thu thập dữ liệu.",
      chat_gameplay:
        "Lối chơi bao gồm khám phá, giải đố, thu thập tài nguyên và các nhiệm vụ hợp tác. Mỗi chương tập trung vào một hành tinh và chủ đề khoa học khác nhau.",
      chat_chapters:
        "Trò chơi có các chương dựa trên các hành tinh như Sao Thủy, Sao Kim, Trái Đất, Sao Hỏa, Sao Mộc, Sao Thổ, Sao Thiên Vương, Sao Hải Vương và thậm chí cả Sao Diêm Vương. Mỗi chương giới thiệu các khái niệm khoa học và thử thách mới.",
      chat_multiplayer:
        "ChronoVerse hỗ trợ chế độ chơi hợp tác nhiều người, cho phép người chơi lập nhóm thực hiện nhiệm vụ, chia sẻ khám phá và tham gia các sự kiện cộng đồng. Bạn có thể đảm nhận các vai trò khác nhau để đạt được mục tiêu.",
      chat_tech:
        "ChronoVerse được phát triển bằng Unity cho công cụ trò chơi và Photon Fusion cho khả năng nhiều người chơi thời gian thực.",
      chat_system_req:
        "Để có trải nghiệm tối ưu, chúng tôi khuyên dùng trình duyệt hiện đại, kết nối internet ổn định và thiết bị có ít nhất 8GB RAM và GPU chuyên dụng.",
      chat_news:
        "Bạn có thể tìm thấy tin tức và cập nhật mới nhất trên trang Tin Tức & Cập Nhật của chúng tôi, bao gồm nhật ký phát triển, ghi chú vá lỗi và thông báo sự kiện.",
      chat_community:
        "Tham gia cộng đồng sôi động của chúng tôi trên Discord! Bạn cũng có thể theo dõi chúng tôi trên X/Twitter, YouTube, Facebook, Twitch, TikTok và Instagram.",
      chat_quach_thanh_long:
        "Quách Thành Long là người sáng tạo chính đằng sau ChronoVerse. Bạn có thể tìm hiểu thêm về anh ấy tại quachthanhlong.com hoặc kết nối trên LinkedIn và GitHub.",
      chat_default_response:
        "Xin lỗi, tôi không có đủ thông tin để trả lời câu hỏi đó. Vui lòng thử diễn đạt lại hoặc hỏi về chi tiết trò chơi ChronoVerse.",
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
