export type LocalizedText = {
  en: string;
  ko: string;
};

export type InsightSection = {
  id: string;
  title: LocalizedText;
  body: LocalizedText;
};

export type Insight = {
  slug: string;
  publishedAt: string;
  tags: string[];
  title: LocalizedText;
  heroBadge: LocalizedText;
  heroSummary: LocalizedText;
  excerpt: LocalizedText;
  sections: InsightSection[];
  closingParagraph: LocalizedText;
  metaDescription: LocalizedText;
};

export const insights: Insight[] = [
  {
    slug: 'upper-cervical-top-3',
    publishedAt: '2026-02-13',
    tags: ['Upper Cervical', 'Patient Guide', 'Nervous System'],
    title: {
      en: 'Top 3 Upper Cervical Essentials Patients Need to Know',
      ko: '환자가 알아야 할 상부 경추 핵심 3가지',
    },
    heroBadge: {
      en: 'Patient Checklist',
      ko: '환자 체크리스트',
    },
    heroSummary: {
      en: 'Knowing these three essentials keeps upper cervical care precise, predictable, and patient-friendly.',
      ko: '이 세 가지 핵심을 알면 상부 경추 케어가 정밀하고 예측 가능하며 환자 중심이 됩니다.',
    },
    excerpt: {
      en: 'Precision imaging, nerve clearing, and consistent follow-up stabilize the atlas and axis so your body can heal.',
      ko: '정밀 영상, 신경 간섭 제거, 꾸준한 추적 관리로 아틀라스와 축추를 안정화해 몸이 스스로 치유하도록 돕습니다.',
    },
    sections: [
      {
        id: 'precision-diagnosis',
        title: {
          en: 'Precision Diagnosis',
          ko: '정밀 진단',
        },
        body: {
          en:
            'We begin with weight-bearing imaging and precise measurements so we know exactly which millimeters of the atlas or axis need contact. That precision lets us deliver gentle adjustments that move only what needs to move.',
          ko:
            '중량을 이한 영상과 정확한 측정을 통해 아틀라스와 축추의 밀리미터 단위 움직임을 파악합니다. 그 정밀함이 필요한 부위만 부드럽게 조정할 수 있게 합니다.',
        },
      },
      {
        id: 'brainstem-signals',
        title: {
          en: 'Brainstem & Nerve Signals',
          ko: '뇌간과 신경 신호',
        },
        body: {
          en:
            'The upper cervical spine forms the gateway for brainstem and cranial nerve signals. Even a hairline misalignment can distort that pathway, inviting headaches, dizziness, or fatigue. Clearing the interference with a precise adjustment lets the nervous system send calm, consistent signals.',
          ko:
            '상부 경추는 뇌간과 뇌신경 신호의 관문입니다. 아주 작은 어긋남도 경로를 왜곡해 두통, 어지럼, 피로를 유발할 수 있습니다. 정밀한 조정으로 간섭을 해소하면 신경계가 차분하고 일관된 신호를 보냅니다.',
        },
      },
      {
        id: 'ongoing-support',
        title: {
          en: 'Ongoing Support & Habits',
          ko: '지속적 관리와 습관',
        },
        body: {
          en:
            'A single activation is not the finish line. Follow-up visits, home stretches, hydration, and stress management help the atlas stay where it was guided. We coach patients on posture cues and lifestyle steps so the adjustment lasts.',
          ko:
            '한 번의 조정이 끝이 아닙니다. 추적 방문, 집에서 하는 스트레칭, 수분 섭취, 스트레스 관리는 아틀라스를 안내받은 위치에 유지하도록 돕습니다. 자세 신호와 생활습관을 코칭해 조정 효과가 오래 지속되게 합니다.',
        },
      },
    ],
    closingParagraph: {
      en: 'Keep these three essentials front of mind and you will feel confident every step of your upper cervical journey—schedule a consultation to review the plan before your first adjustment.',
      ko: '이 세 가지 필수 요소를 기억하면 상부 경추 여정에서 자신감을 유지할 수 있습니다. 첫 조정 전에 계획을 검토하는 상담을 예약하세요.',
    },
    metaDescription: {
      en: 'Understand the top three things patients should know before upper cervical chiropractic—precision diagnosis, nerve signal support, and ongoing habits.',
      ko: '상부 경추 카이로프랙틱 전에 꼭 알아야 할 세 가지—정밀 진단, 신경 신호 지원, 지속 습관.',
    },
  },

  {
    slug: 'upper-cervical',
    publishedAt: '2026-02-13',
    tags: ['Upper Cervical', 'Migraine', 'Nerve Interference'],
    title: {
      en: 'Upper Cervical Insights',
      ko: '상경추 인사이트',
    },
    heroBadge: {
      en: 'Patient Insight',
      ko: '환자 인사이트',
    },
    heroSummary: {
      en: 'Precise upper cervical adjustments relieve nerve interference near the brainstem, and that calm can lower migraine frequency and help your nervous system rebalance.',
      ko: '정밀한 상경추 교정은 뇌간 가까이에서 발생하는 신경 간섭을 풀어주며, 이 과정이 편두통 빈도를 낮추고 신경계 균형을 회복하도록 돕습니다.',
    },
    excerpt: {
      en: 'Upper cervical misalignments near the brainstem can trigger migraines, disc stress, and nerve interference, but targeted adjustments restore communication so your body can heal.',
      ko: '뇌간 가까운 상경추의 어긋남은 편두통, 디스크 부담, 신경 간섭을 유발할 수 있지만, 정밀한 교정은 신경 소통을 회복시켜 몸이 자연 치유를 시작하도록 돕습니다.',
    },
    sections: [
      {
        id: 'migraine',
        title: {
          en: 'Migraine Relief',
          ko: '편두통 완화',
        },
        body: {
          en: 'Even slight misalignment of the atlas or axis can irritate the brainstem-adjacent nerves and trigger migraines. Upper cervical adjustments are designed to relieve that nerve interference, often reducing headache frequency and reliance on medications.',
          ko: '아틀라스나 축추가 조금만 어긋나도 뇌간 주변 신경을 자극해 편두통을 유발할 수 있습니다. 상경추 조정은 이런 신경 간섭을 풀어주기 위해 수행되며, 결과적으로 두통의 빈도와 약물 의존도를 줄이는 사례가 많습니다.',
        },
      },
      {
        id: 'disc',
        title: {
          en: 'Disc Herniation',
          ko: '경추 추간판 탈출증',
        },
        body: {
          en: 'When a neck disc bulges or herniates, restoring alignment and motion at the top of the spine unloads the disc and calms surrounding muscular tension, helping stabilize the condition and prevent further irritation.',
          ko: '목 디스크가 튀어나오거나 탈출하면 상부 경추의 자세와 움직임을 바로잡아 디스크에 가해지는 압력을 줄이고 주변 근육의 긴장을 이완해 상태를 안정시키는 것이 중요합니다.',
        },
      },
      {
        id: 'nerve',
        title: {
          en: 'Nerve Interference',
          ko: '신경 간섭',
        },
        body: {
          en: 'The upper cervical spine is literally the gateway for nerves traveling to the head and brain. Misalignment distorts that signal pathway, leading to headaches, dizziness, and fatigue. A precise adjustment clears the interference so your nervous system can work without disruption.',
          ko: '상경추는 머리와 뇌로 향하는 신경이 반드시 통과하는 길목입니다. 정렬이 흐트러지면 신호가 왜곡되어 두통, 어지럼, 피로로 이어집니다. 정밀한 교정은 이 간섭을 제거하여 신경계가 방해 없이 작동하도록 돕습니다.',
        },
      },
    ],
    closingParagraph: {
      en: 'Dr. Park’s upper cervical adjustments rely on measured imaging and hands-on precision. Many patients report dramatic reductions in migraines and chronic headaches after treatment, so book a consultation and see how proper alignment can make a difference.',
      ko: '박현주 원장의 상경추 교정은 정밀한 영상 촬영과 촉감 기반 교정을 결합합니다. 많은 환자분이 편두통과 만성 두통이 눈에 띄게 줄어든 변화를 보고하며, 올바른 정렬이 차이를 만들 수 있다는 것을 경험합니다.',
    },
    metaDescription: {
      en: 'Discover how upper cervical chiropractic relieves migraine frequency, calms nerve interference, and stabilizes cervical discs in our Los Angeles clinic.',
      ko: '편두통 빈도 감소, 신경 간섭 완화, 경추 디스크 안정화를 위한 상경추 카이로프랙틱 치료에 대해 알아보세요.',
    },
  },
  {
    slug: 'tmj-relief',
    publishedAt: '2025-10-05',
    tags: ['TMJ', 'Muscle Tension', 'Posture'],
    title: {
      en: 'TMJ Relief & the Upper Cervical Link',
      ko: '턱관절과 상경추의 연결',
    },
    heroBadge: {
      en: 'TMJ Care',
      ko: 'TMJ 케어',
    },
    heroSummary: {
      en: 'Jaw pain, clicking, and tension headaches often share the same nerve pathway as the upper cervical spine, so we look at the neck when treating TMJ symptoms.',
      ko: '턱 통증, 소리, 긴장성 두통은 상경추와 같은 신경 경로를 공유하기 때문에 TMJ 증상 치료 시 목을 함께 살펴봅니다.',
    },
    excerpt: {
      en: 'TMJ dysfunction can be aggravated when the upper cervical spine skews alignment; calming the atlas and axis often eases jaw muscles and the headaches that travel with them.',
      ko: '턱관절 기능 장애는 상경추의 정렬이 흐트러졌을 때 악화되기 쉽습니다. 아틀라스와 축추를 바로잡으면 턱 근육과 함께 나타나는 두통도 완화됩니다.',
    },
    sections: [
      {
        id: 'tmj-neck',
        title: {
          en: 'TMJ & the Upper Cervical Corridor',
          ko: '턱관절과 상경추 통로',
        },
        body: {
          en: 'The trigeminal nerve shares fibers with cervical nerves, which means a misaligned atlas can add tension to the jaw. We evaluate both the neck and bite to see how those two systems are communicating.',
          ko: '삼차신경과 경추 신경이 섬유를 공유하기 때문에 아틀라스의 어긋남이 턱에 긴장을 더합니다. 목과 교합을 함께 평가하여 두 시스템이 어떻게 연결되어 있는지 파악합니다.',
        },
      },
      {
        id: 'tmj-adjustment',
        title: {
          en: 'Precision Adjustments',
          ko: '정밀한 교정',
        },
        body: {
          en: 'Gentle upper cervical adjustments relieve pressure on the jaw-supporting muscles, which allows the TMJ to track more smoothly and the surrounding fascia to unwind.',
          ko: '부드러운 상경추 교정은 턱을 지지하는 근육에 가해지는 압력을 줄여 TMJ의 움직임이 부드러워지고 주변 근막의 긴장이 풀리도록 돕습니다.',
        },
      },
      {
        id: 'tmj-lifestyle',
        title: {
          en: 'Lifestyle & Relief',
          ko: '생활 습관과 회복',
        },
        body: {
          en: 'We coach posture, stress awareness, and bite habits so the gentle upper cervical work can hold longer. Patients often notice jaw tension easing within a few visits when the body is supported holistically.',
          ko: '자세, 스트레스 인식, 교합 습관을 함께 관리하여 상경추 교정이 오랫동안 유지되도록 돕습니다. 몸 전체를 지원하면 몇 차례 방문만으로도 턱 긴장이 풀리는 것을 느끼는 환자분이 많습니다.',
        },
      },
    ],
    closingParagraph: {
      en: 'Treating the upper cervical spine keeps TMJ patients heading toward steadier relief, whether the root is stress, posture, or a collision years ago.',
      ko: '상경추를 교정하면 스트레스, 자세, 과거 충돌 등 원인에 관계없이 턱관절 환자가 더 안정된 완화를 향해 나아갈 수 있습니다.',
    },
    metaDescription: {
      en: 'Explore how upper cervical chiropractic supports TMJ relief with gentle adjustments, posture coaching, and holistic follow-up.',
      ko: '부드러운 상경추 조정과 자세 교육, 전체론적 모니터링으로 턱관절(TMJ) 증상을 완화하는 방법을 알아보세요.',
    },
  },
  {
    slug: 'car-accident-care',
    publishedAt: '2025-07-21',
    tags: ['Car Accident', 'Whiplash', 'Recovery'],
    title: {
      en: 'Recovering After Car Accidents',
      ko: '교통사고 후 회복',
    },
    heroBadge: {
      en: 'Injury Care',
      ko: '부상 케어',
    },
    heroSummary: {
      en: 'Car accidents twist the neck in ways the upper cervical spine remembers, so early correction stabilizes the nervous system and prevents chronic pain.',
      ko: '교통사고는 목을 비틀어 상경추에 잔류하는 스트레스를 만들기 때문에 조기에 교정을 하면 신경계를 안정시키고 만성 통증을 막을 수 있습니다.',
    },
    excerpt: {
      en: 'Whiplash and impact injuries leave the atlas and axis vulnerable; restoring their biomechanics keeps scar tissue from hardening and allows healing messages to flow.',
      ko: '채찍질과 충격은 아틀라스와 축추를 손상시키며, 이들의 움직임을 회복하면 흉터 조직이 굳어지는 것을 막고 신경 전달을 정상화시켜줍니다.',
    },
    sections: [
      {
        id: 'whiplash',
        title: {
          en: 'Whiplash & the Atlas',
          ko: '채찍질 손상과 아틀라스',
        },
        body: {
          en: 'Rear-end collisions jerk the head backward and forward, straining C1/C2 and their soft tissues. That stress can lock the atlas, which is why we check the entire cervical motion after a crash.',
          ko: '후방 충돌은 머리를 앞뒤로 흔들면서 C1/C2와 주변 연부 조직에 무리를 줍니다. 이 스트레스가 아틀라스를 고정시키므로 사고 후에는 목의 모든 움직임을 반드시 확인합니다.',
        },
      },
      {
        id: 'biomechanics',
        title: {
          en: 'Restoring Motion',
          ko: '움직임 회복',
        },
        body: {
          en: 'We use precision x-rays, nerve scans, and gentle upper cervical contacts to unlock locked joints so the spinal cord can carry messages without guarding.',
          ko: '정밀 X-ray와 신경 스캔, 부드러운 상경추 접촉을 통해 굳은 관절을 풀어주어 척수가 방해 없이 신호를 전달하도록 합니다.',
        },
      },
      {
        id: 'early-care',
        title: {
          en: 'Why Early Care Matters',
          ko: '초기 치료의 중요성',
        },
        body: {
          en: 'Delaying care lets adhesions and muscular guarding harden the misalignment. Early, specific upper cervical work keeps the adjustment stable and the nervous system calm.',
          ko: '치료를 미루면 유착과 근육 보호 반응이 정렬을 고착시키고 만성화하게 됩니다. 초기에 상경추를 구체적으로 조정하면 정렬을 안정화하고 신경계를 진정시킬 수 있습니다.',
        },
      },
    ],
    closingParagraph: {
      en: 'Dr. Park monitors recovery with follow-up scans and gentle adjustments, giving crash survivors a calm road back to activity.',
      ko: '박 원장은 추적 촬영과 부드러운 교정을 통해 회복을 모니터링하며 사고 후 환자분들이 다시 활동으로 돌아갈 수 있도록 돕습니다.',
    },
    metaDescription: {
      en: 'See how targeted upper cervical chiropractic care restores motion after car accidents and prevents chronic whiplash symptoms.',
      ko: '교통사고 이후 상경추 카이로프랙틱으로 움직임을 회복하고 만성 채찍질 증상을 예방하는 방법을 확인해 보세요.',
    },
  },
];
