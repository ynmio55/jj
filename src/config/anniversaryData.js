/**
 * 💖 Anniversary Configuration Data
 * วันที่ตกลงคบกันวันแรก: 13 กันยายน 2024 (2024-09-13)
 */

export const anniversaryConfig = {
  coupleNames: " You & Me ",
  startDate: "2024-09-13", 
  musicUrl: "/music/romantic-love.mp3", 

  hero: {
    title: "Happy Anniversary",
    heartEmoji: "❤️",
    subtitle: "ขอบคุณที่เข้ามาเป็นส่วนหนึ่งในชีวิตของฉัน",
    image: "/images/hero-profile.jpg", // 88035_0.jpg
    buttonText: "เปิดเรื่องราวของเรา 💕",
  },

  // Timeline (รองรับทั้งรูปภาพและไฟล์วิดีโอ MP4)
  timeline: [
    { id: 1, image: "/images/video-1.mp4", type: "video" }, // 00dc9149-4675-49cd-a75d-2399dd63204b.mp4
    { id: 2, image: "/images/video-2.mp4", type: "video" }, // 06eb488f-c9de-423d-9068-4f7139d5cea1.mp4
    { id: 3, image: "/images/photo-3.jpg" }, // 88033.jpg
    { id: 4, image: "/images/photo-4.jpg" }, // 88046.jpg
    { id: 5, image: "/images/photo-5.jpg" }, // 88036_0.jpg
  ],

  galleryQuote: "Every picture has a story, and every story has you. ❤️",
  galleryImages: [
    { id: 1, url: "/images/photo-7.jpg" },
    { id: 2, url: "/images/photo-8.jpg" },
    { id: 3, url: "/images/photo-9.jpg" },
    { id: 4, url: "/images/photo-10.jpg" },
    { id: 5, url: "/images/photo-11.jpg" },
    { id: 6, url: "/images/photo-12.jpg" },
    { id: 7, url: "/images/photo-13.jpg" },
    { id: 8, url: "/images/photo-14.jpg" },
  ],

  letter: {
    recipient: "ถึงคนดีของฉัน 💌",
    salutation: "แฟนงับ,",
    paragraphs: [
      "ขอบคุณมากๆ เลยนะที่เข้ามาในชีวิตของเค้า ตั้งแต่วันแรกที่เราได้เจอกัน ชีวิตของเค้าก็มีความหมายและมีความสุขเพิ่มขึ้นในทุกๆ วัน",
      "ขอบคุณสำหรับความเข้าใจ ความเอาใจใส่ และความรักที่มอบให้เสมอมา ไม่ว่าจะเจอเรื่องยากลำบากแค่ไหน แค่ได้ยินเสียง ได้เห็นหน้าแฟน ก็ทำให้มีพลังกลับมาสู้ต่อได้เสมอ",
      "รักแฟนมากๆ นะงับ สุขสันต์วันครบรอบของเรา ❤️"
    ],
    signature: "ด้วยรักและหวังดีเสมอ,",
    senderName: "แฟนของเธอ 💕"
  },

  memories: [
    { id: 1, image: "/images/photo-7.jpg" },
    { id: 2, image: "/images/photo-8.jpg" },
    { id: 3, image: "/images/photo-9.jpg" },
    { id: 4, image: "/images/photo-10.jpg" }
  ],

  final: {
    heading: "ขอบคุณที่อยู่ข้างกันนะ ❤️",
    quoteLine1: "ไม่รู้ว่าอนาคตจะเป็นอย่างไร",
    quoteLine2: "แต่สิ่งหนึ่งที่ฉันรู้คือ",
    quoteLine3: "ฉันอยากมีเธออยู่ในเรื่องราวนั้นเสมอ",
    image: "/images/photo-final.jpg", // 88049.jpg
    wishText: "Happy Anniversary, My Love 💕",
    buttonConfetti: "กดตรงนี้เพื่อฉลองความรัก 🎉"
  }
};
