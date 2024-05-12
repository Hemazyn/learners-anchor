import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navItems = [
     {
          id: 1,
          label: "Home",
          path: "home",
     },
     {
          id: 2,
          label: "About Us",
          path: "about",
     },
     {
          id: 3,
          label: "Service",
          path: "service",
     },
     {
          id: 4,
          label: "FAQ",
          path: "faq",
     },
];
const services = [
     {
          id: 1,
          icon: "https://tinyurl.com/47y5kj6d",
          head: "Online Courses",
          text: "We provide a wide array of online courses on various subjects, from academic disciplines to professional development. Our courses are developed by experienced educators and industry experts, ensuring that learners receive relevant and up-to-date knowledge."
     },
     {
          id: 2,
          icon: "https://tinyurl.com/24hj78dv",
          head: "Tutoring Services",
          text: "Our dedicated team of qualified tutors is available to provide personalized and tailored support to learners. Whether it's academic tutoring, test preparation, or assistance with specific subjects, our tutors are here to guide and mentor students on their educational journey."
     },
     {
          id: 3,
          icon: "https://tinyurl.com/mpjj5hz6",
          head: "Learning Resources",
          text: " We curate and develop a vast collection of learning resources, including textbooks, study guides, interactive materials, and educational apps. These resources are designed to enhance learning outcomes and provide learners with the tools they need to succeed."
     },
     {
          id: 4,
          icon: "https://tinyurl.com/yvvsdv3d",
          head: "Community Engagement",
          text: "We believe that learning is a collaborative process, and our platform fosters a vibrant community of learners. Through discussion forums, study groups, and interactive activities, we encourage learners to engage with their peers, exchange ideas, and learn from each other's experiences."
     }
]
const expertise = [
     {
          id: 1,
          icon: "https://tinyurl.com/2yhxpdx8",
          head: "Quality and Expertise",
          text: "Our team consists of experienced educators, subject matter experts, and industry professionals who are passionate about delivering high-quality education. We take pride in providing reliable and accurate content and services that meet the highest educational standards."
     },
     {
          id: 2,
          icon: "https://tinyurl.com/354cfrdm",
          head: "Flexibility and Accessibility",
          text: "We understand that everyone has unique learning preferences and constraints. Therefore, we offer flexible learning options, allowing learners to study at their own pace and convenience. Our platform is accessible from anywhere, anytime, and across multiple devices, ensuring that education is within reach for all."
     },
     {
          id: 3,
          icon: "https://tinyurl.com/2hfmd5dx",
          head: "Student-Centered Approach",
          text: "We prioritize the needs and goals of our learners. Our services are designed to be learner-centric, promoting active engagement, critical thinking, and skill development. We strive to create a supportive and inclusive learning environment where every learner can thrive."
     },
     {
          id: 4,
          icon: "https://tinyurl.com/4zsds4p9",
          head: "Continuous Improvement",
          text: "Education is a dynamic field, and we are committed to staying at the forefront of innovative pedagogical practices and emerging technologies. We continuously update and enhance our offerings to ensure that learners benefit from the latest advancements in education."
     }
]
const faqData = [
     {
          id: 1,
          question: "What is Learners Anchor?",
          answer: "Learners Anchor is an educational platform that offers a wide range of online courses, tutoring services, learning resources, and community engagement opportunities. Our platform is designed to make education accessible, engaging, and effective for learners of all ages and backgrounds.",
     },
     {
          id: 2,
          question: "Who can benefit from Learners Anchor?",
          answer: "Learners Anchor caters to learners of all levels, from school students to working professionals. Whether you’re looking to enhance your academic knowledge, develop new skills, or prepare for exams, our services are tailored to meet your specific learning needs.",
     },
     {
          id: 3,
          question: "Are the courses on Learners Anchor self-paced?",
          answer: "Yes, most of our courses are self-paced, allowing learners to study at their own convenience. You can start and complete the courses based on your schedule and progress through the material at your own pace.",
     },
     {
          id: 4,
          question: "What subjects are covered in the online courses?",
          answer: "We offer a wide range of online courses covering various subjects. Our course catalog includes academic subjects such as mathematics, science, language, arts, history, and more based on your curriculum. We also provide professional development courses in areas like business, technology, creative arts, and personal growth."
     },
     {
          id: 5,
          question: "How are the courses developed?",
          answer: "Our courses are developed by experienced educators and subject matter experts. They are designed to be engaging and interactive, incorporating multimedia elements, practical exercises, and assessments to facilitate effective learning."
     },
     {
          id: 6,
          question: "What tutoring services are available?",
          answer: "We offer personalized and group tutoring services to provide support to learners. Our tutors are qualified professionals who can assist with a wide range of subjects and help learners with homework, exam preparation, concept clarification, and overall academic improvement."
     },
     {
          id: 7,
          question: "How do I access the learning resources?",
          answer: "Our learning resources, including textbooks, study guides, interactive materials, and educational apps, can be accessed through our platform. Simply log in to your account and navigate to the resources section to explore and utilize the available materials."
     },
     {
          id: 8,
          question: "How can I engage with the community on Learners Anchor?",
          answer: "We foster a vibrant community of learners on our platform. You can engage with fellow learners through discussion forums, study groups, and interactive activities. These community engagement opportunities allow you to exchange ideas, seek guidance, and learn from the experiences of others."
     },
     {
          id: 9,
          question: "Is my personal Information secure on Learners Anchor?",
          answer: "We take data privacy and security seriously. We have robust measures in place to safeguard your personal information. Our platform follows industry-standard encryption protocols and complies with relevant data protection regulations to ensure the confidentiality and integrity of your data."
     }
];
const socials = [
     {
          id: 1,
          icon: FaFacebookF,
          link: "#"
     },
     {
          id: 2,
          icon: FaXTwitter,
          link: "#"
     },
     {
          id: 3,
          icon: FaLinkedin,
          link: "#"
     },
     {
          id: 4,
          icon: FaYoutube,
          link: "#"
     }
]

export { navItems, services, expertise, faqData, socials }