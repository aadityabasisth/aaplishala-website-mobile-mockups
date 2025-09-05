import {
  BellIcon,
  UsersIcon,
  CalendarIcon,
  BookOpenIcon,
  ClipboardCheckIcon,
  MessageSquareIcon,
} from "lucide-react";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "AapliShala",
  description: "Modern School Management System",
  cta: "Get Started",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "School Management System",
    "Timetable generation",
    "Parent Teacher Communication",
    "Attendance management , Student performance analytics , report generation",
  ],
  links: {
    email: "support@aaplishala.com",
    instagram: "https://instagram.com/aaplishala",
    twitter: "https://twitter.com/aaplishala",
    github: "https://github.com/aaplishala",
  },
  features: [
    {
      name: "Digital Attendance",
      description: "Mark and track student attendance in real-time.",
      icon: <ClipboardCheckIcon className="h-6 w-6" />,
    },
    {
      name: "Class Scheduling",
      description: "Easily create and manage timetables for classes.",
      icon: <CalendarIcon className="h-6 w-6" />,
    },
    {
      name: "Assignments & Reports",
      description:
        "Share assignments, collect submissions, and auto-generate reports.",
      icon: <BookOpenIcon className="h-6 w-6" />,
    },
    {
      name: "Parent Communication",
      description: "Seamless updates and notifications for parents.",
      icon: <MessageSquareIcon className="h-6 w-6" />,
    },
    {
      name: "Performance Analytics",
      description: "Track student progress and identify improvement areas.",
      icon: <UsersIcon className="h-6 w-6" />,
    },
    {
      name: "Smart Notifications",
      description: "Stay updated with reminders and school-wide announcements.",
      icon: <BellIcon className="h-6 w-6" />,
    },
  ],
  featureHighlight: [
    {
      title: "Digital Attendance",
      description:
        "Teachers can take attendance quickly, and parents get instant updates.",
      imageSrc: "/Device-2.png",
      direction: "rtl" as const,
    },
    {
      title: "Class Scheduling",
      description:
        "Automatically generate and manage timetables with ease.",
      imageSrc: "/Device-3.png",
      direction: "ltr" as const,
    },
    {
      title: "Assignments & Reports",
      description:
        "Create, share, and grade assignments — with reports auto-generated.",
      imageSrc: "/Device-4.png",
      direction: "rtl" as const,
    },
  ],
  bento: [
    {
      title: "Smart Schooling",
      content:
        "AapliShala brings attendance, assignments, and parent-teacher communication into one platform.",
      imageSrc: "/Device-1.png",
      imageAlt: "School dashboard illustration",
      fullWidth: true,
    },
    {
      title: "Digital Attendance",
      content:
        "Teachers mark attendance in seconds, and parents receive real-time updates.",
      imageSrc: "/Device-2.png",
      imageAlt: "Attendance illustration",
      fullWidth: false,
    },
    {
      title: "Assignments & Reports",
      content:
        "Distribute assignments digitally and generate detailed student reports instantly.",
      imageSrc: "/Device-3.png",
      imageAlt: "Assignments illustration",
      fullWidth: false,
    },
    {
      title: "Parent Communication",
      content:
        "Send announcements, updates, and progress reports directly to parents.",
      imageSrc: "/Device-4.png",
      imageAlt: "Parent communication illustration",
      fullWidth: true,
    },
  ],
  benefits: [
    {
      id: 1,
      text: "Save hours each week with automated attendance and grading.",
      image: "/Device-6.png",
    },
    {
      id: 2,
      text: "Improve parent-teacher communication effortlessly.",
      image: "/Device-7.png",
    },
    {
      id: 3,
      text: "Streamline timetable and class scheduling.",
      image: "/Device-8.png",
    },
    {
      id: 4,
      text: "Boost student performance with smart insights.",
      image: "/Device-1.png",
    },
  ],
  pricing: [
    {
      name: "Basic",
      href: "#",
      price: "Free",
      period: "month",
      yearlyPrice: "Free",
      features: [
        "Up to 100 students",
        "Attendance tracking",
        "Basic reports",
        "Parent messaging",
      ],
      description: "Perfect for small schools or tuition centers",
      buttonText: "Start Free",
      isPopular: false,
    },
    {
      name: "Pro",
      href: "#",
      price: "$29",
      period: "month",
      yearlyPrice: "$290",
      features: [
        "Unlimited students",
        "Advanced analytics",
        "Assignments & submissions",
        "Parent & teacher portals",
        "Custom reports",
      ],
      description: "Ideal for growing schools",
      buttonText: "Upgrade to Pro",
      isPopular: true,
    },
  ],
  faqs: [
  {
    question: "Who can use AapliShala?",
    answer:
      "Students, teachers, parents, and administrators. Admins manage the system, while others get role-based access.",
  },
  {
    question: "Does it track attendance for staff and students?",
    answer:
      "Yes, attendance can be managed for both staff and students in real time.",
  },
  {
    question: "Can the system generate reports?",
    answer:
      "Reports are auto-generated for attendance, performance, and assignments.",
  },
  {
    question: "Does it provide analytics?",
    answer:
      "Yes, smart analytics highlight trends in student performance and attendance.",
  },
  {
    question: "Is timetable management included?",
    answer:
      "Yes, schools can create, share, and update timetables digitally.",
  },
],
  footer: [
    {
      id: 1,
      menu: [
        { href: "#", text: "Features" },
        { href: "#", text: "Pricing" },
        { href: "#", text: "About Us" },
        { href: "#", text: "Blog" },
        { href: "#", text: "Contact" },
      ],
    },
  ],
  testimonials: [
    {
      id: 1,
      text: "AapliShala has made attendance and reporting effortless for our teachers.",
      name: "Principal Sharma",
      role: "School Principal",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      text: "Parents love the instant updates on attendance and assignments.",
      name: "Radhika Mehta",
      role: "Teacher",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      text: "The analytics helped us identify struggling students early and provide support.",
      name: "Amit Desai",
      role: "Administrator",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
    },
  ],
};

export type SiteConfig = typeof siteConfig;