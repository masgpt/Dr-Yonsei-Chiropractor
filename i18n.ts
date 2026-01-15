import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            about: "About",
            aboutDrPark: "About Dr. Park",
            messageFromDrPark: "Message From Dr. Park",
            techniques: "Techniques",
            reviews: "Reviews",
            contact: "Contact",
            bookAppointment: "Book Appointment",
            aboutChiropractic: "About Chiropractic",
            subluxation: "Subluxation",
            innateIntelligence: "Innate Intelligence",
            upperCervical: "Upper Cervical",
            carAccident: "Car Accident & Personal Injury",
            tmj: "TMJ"
          },
          home: {
            hero: {
              title: "Upper Cervical Health Care",
              description: "The first Korean American chiropractic clinic in the United States to specialize in the Palmer Upper Cervical Specific Technique (H.I.O).",
              descriptionDesktop: "Yonsei Chiropractic Clinic is the first Korean American chiropractic clinic in the US specializing in the \"hole-in-one\" method (H.I.O).",
              callNow: "Call Now",
              requestAppointment: "Request Appointment",
              bookAppointment: "Book Appointment",
              learnMore: "Learn More",
              trustedBy: "Trusted by thousands of patients since 2015"
            },
            trustStrip: {
              palmerTitle: "Palmer Upper Cervical",
              palmerDesc: "Specialized H.I.O method for precise care.",
              awardTitle: "Award Winning",
              awardDesc: "2015 Patients' Choice Award in Chiropractic.",
              healingTitle: "Natural Healing",
              healingDesc: "Drug-free approach to restore communication."
            },
            meetDoctor: {
              badge: "Meet The Doctor",
              name: "Dr. Hyeon Joo Park",
              quote: "\"We’re happy that you have chosen to be part of those who are not afraid to try a new method in regaining lost health. My mission is to use my professional expertise and knowledge to help patients receive exceptional care through the Palmer upper cervical method.\"",
              readBio: "Read Full Bio"
            },
            services: {
              title: "Our Specialties",
              description: "Specialized chiropractic care ranging from Upper Cervical specific techniques to personal injury recovery.",
              upperCervicalTitle: "Upper Cervical (H.I.O)",
              upperCervicalDesc: "A scientifically proven specialty designed to restore head/neck alignment and re-activate brain-to-body communication.",
              tmjTitle: "TMJ/TMD & Pediatric",
              tmjDesc: "Expert adjustments for Temporomandibular Joint Disorders and specialized care for pre/post-natal and pediatric patients.",
              injuryTitle: "Car Accidents & Injury",
              injuryDesc: "Comprehensive care for personal injuries and automobile accidents to help you regain your mobility and health.",
              learnMore: "Learn More"
            }
          },
          footer: {
            description: "Specializing in Palmer Upper Cervical Specific Technique to restore your body's natural healing power.",
            quickLinks: "Quick Links",
            techniques: "Techniques",
            contactInfo: "Contact Info",
            address: "3200 Wilshire Blvd, Suite 302, Los Angeles, CA 90010",
            rights: "All rights reserved.",
            privacyPolicy: "Privacy Policy",
            termsOfService: "Terms of Service"
          }
        }
      },
      ko: {
        translation: {
          nav: {
            home: "홈",
            about: "소개",
            aboutDrPark: "박현주 원장 소개",
            messageFromDrPark: "원장님 메시지",
            techniques: "교정 기법",
            reviews: "후기",
            contact: "문의",
            bookAppointment: "예약하기",
            aboutChiropractic: "카이로프랙틱이란?",
            subluxation: "아탈구 (Subluxation)",
            innateIntelligence: "선천적 지능 (Innate Intelligence)",
            upperCervical: "상부 경추 교정",
            carAccident: "교통사고 및 개인 상해",
            tmj: "턱관절 (TMJ)"
          },
          home: {
            hero: {
              title: "상부 경추 건강 관리",
              description: "미국 최초로 팔머 상부 경추 전문 기법(H.I.O)을 전문으로 하는 한인 카이로프랙틱 클리닉입니다.",
              descriptionDesktop: "연세 카이로프랙틱 클리닉은 미국 내 한인 클리닉 중 최초로 '홀인원(H.I.O)' 기법을 전문으로 하는 카이로프랙틱 병원입니다.",
              callNow: "지금 전화하기",
              requestAppointment: "예약 요청",
              bookAppointment: "예약하기",
              learnMore: "더 알아보기",
              trustedBy: "2015년부터 수천 명의 환자가 신뢰하고 있습니다"
            },
            trustStrip: {
              palmerTitle: "팔머 상부 경추",
              palmerDesc: "정밀한 케어를 위한 전문 H.I.O 기법.",
              awardTitle: "수상 경력",
              awardDesc: "2015년 카이로프랙틱 부문 Patients' Choice Award 수상.",
              healingTitle: "자연 치유",
              healingDesc: "신체 소통을 회복하기 위한 약물 없는 접근 방식."
            },
            meetDoctor: {
              badge: "원장 소개",
              name: "박현주 원장",
              quote: "\"잃어버린 건강을 되찾기 위해 새로운 방법을 시도하는 것을 두려워하지 않는 분들과 함께하게 되어 기쁩니다. 제 사명은 전문적인 지식과 경험을 바탕으로 환자들이 팔머 상부 경추 기법을 통해 최상의 케어를 받을 수 있도록 돕는 것입니다.\"",
              readBio: "전체 약력 보기"
            },
            services: {
              title: "전문 분야",
              description: "상부 경추 전문 기법부터 개인 상해 회복까지 전문적인 카이로프랙틱 케어를 제공합니다.",
              upperCervicalTitle: "상부 경추 (H.I.O)",
              upperCervicalDesc: "머리와 목의 정렬을 복구하고 뇌와 신체의 소통을 재활성화하기 위해 과학적으로 입증된 전문 분야입니다.",
              tmjTitle: "턱관절(TMJ) 및 소아과",
              tmjDesc: "턱관절 장애에 대한 전문적인 교정과 산전/산후 및 소아 환자를 위한 특별 케어를 제공합니다.",
              injuryTitle: "교통사고 및 부상",
              injuryDesc: "개인 상해 및 자동차 사고에 대한 종합적인 케어를 통해 가동성과 건강을 되찾을 수 있도록 돕습니다.",
              learnMore: "더 알아보기"
            }
          },
          footer: {
            description: "신체의 자연 치유력을 회복하기 위해 팔머 상부 경추 전문 기법을 전문으로 합니다.",
            quickLinks: "빠른 링크",
            techniques: "교정 기법",
            contactInfo: "연락처 정보",
            address: "3200 Wilshire Blvd, Suite 302, Los Angeles, CA 90010",
            rights: "모든 권리 보유.",
            privacyPolicy: "개인정보 처리방침",
            termsOfService: "이용 약관"
          }
        }
      }
    }
  });

export default i18n;
