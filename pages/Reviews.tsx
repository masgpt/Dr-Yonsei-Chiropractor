import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Review {
  id: number;
  name: string;
  location: string;
  text: string;
  expandedText?: string;
  date?: string;
  rating: number;
}

const Reviews: React.FC = () => {
  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);

  const toggleReview = (id: number) => {
    if (expandedReviews.includes(id)) {
      setExpandedReviews(expandedReviews.filter(reviewId => reviewId !== id));
    } else {
      setExpandedReviews([...expandedReviews, id]);
    }
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: "Danbi H.",
      location: "Los Angeles, CA",
      date: "February 20, 2016",
      rating: 5,
      text: "Before I received any treatments, I suffered a lot with frequent headaches. The massive headache would move on to my eyes and then later I would even feel nauseous. I would always have Advil or Tylenol with me because I had such frequent headaches. After receiving treatment my headaches disappeared for good and it was hard for me to believe that it was the power of the adjustment. Even pain killers wouldn’t get rid of my headaches but through Dr. Parks’s adjustment my headache is gone for good. Thank you so much Dr. Park~~~^^",
    },
    {
      id: 2,
      name: "Christina J.",
      location: "Los Angeles, CA",
      date: "February 20, 2016",
      rating: 5,
      text: "Firstly, Dr. Park’s treatment has truly turned my life around. I am a young woman, 23 years of age, and I had been suffering from severe, chronic headaches, neck aches and back aches every single day for two full years. Each day was literally a battle for me and I was in so much constant pain that it started to affect my work, relationships, social life and just my spirit in general. Absolutely debilitating. I had seen several different “medical” doctors and even met with a headache specialist. I was told that there were no significant remarks or findings in regards to my MRIs and CT scans of my brain and back. They couldn’t find anything and could not help me locate the source of my severe pain. I was put on muscle relaxers, steroids, strong pain killers…nothing worked. I still suffered every single day of my life.\n\nMy father advised me to go see Dr. Park and get a consultation with her. That same week I went in to see her. I actually had a spinal tap scheduled. The doctors, at this point, wanted to draw fluid from my brain since they could not figure out what was wrong with me. As you know, there are many risks involved with this procedure and I was honestly scared out of my mind but was also willing to go through with it at that point…hoping they would find something.\n\nAnyhow, it was when I met with Dr. Park and she reviewed my xrays that I found out that the trauma from a car accident I was involved in a few years back was what was causing all of my pain and anguish. She carefully explained to me how my body (namely my pelvis, back and neck) were misaligned and that this was causing my head to hurt. Although I have to admit that I was skeptical at that point, since I had already been to so many different doctors, I knew I needed to give this a shot since I had not sought chiropractic treatment for my issues prior to seeing Dr. Park. So I went ahead and started treatment with her, twice a week. Within a couple of weeks, I already felt my head getting better. The daily headaches weren’t as intense and my back was also feeling better. I still had neck pains but Dr. Park ensured me that with time, that would also get better.\n\nWithin two months, my headaches were completely gone. You have to understand how shocking this was for me!!! After having experienced such agony and pain every single day for two years straight, this was truly a miracle for me!!!!!! I started to feel normal again, to be able to function again. I felt like there was oxygen flowing to my brain and that I could wake up and go to sleep everyday without pain. What a gift!\n\nDr. Park has truly helped me turn my life around by helping me get better. She has helped me with not only my headache issues, but also with the intense pain I had in my back and neck. My entire body feels better and renewed. I am so happy to have met Dr. Park and to have gone through this treatment with her. It was truly life-changing. If you or anyone you know suffers from chronic pain, especially related/connected to the neck, back, and/or head areas, please do not hesitate to at least have a consultation with Dr. Park!",
    },
    {
      id: 3,
      name: "Jiyun K.",
      location: "Los Angeles, CA",
      date: "February 20, 2016",
      rating: 5,
      text: "No period came back to normal by upper cervical adjustment! I am a 22-year old, young female. Since I started my period when I was 5th grade, I had never had a period on regular cycle. I had my period in two months or in six months. As I grew up, my irregular period increasingly raised the concern to me and my family. Finally, my mom took me to see a gynecologist for checkup. The doctor told me that my hormones are imbalanced and prescribed me birth control pills. I took it every day and my period came back. It seemed to work then I stopped taking pills. Once I stopped my period pills, my period went back to no cycle again. I also suffered from side effects of birth control pills such as massive acnes on my face. I had more acne even after I stopped taking pills. Thereafter, I had not had my period for a year. While I was seeking safe and effective methods, I heard of very good reputation about Dr. Park’s upper cervical technique and I decided to give it a try in July, 2011. Dr. Park explained how important upper cervical (C1, C2) is, where all the nervous system pass through. She said the nervous system is connected to all of my body and it controls everything in my body. She even told me my imbalanced hormonal system is affected by malfunctioned nervous system which has pressure on by misaligned upper cervical vertebrae. I heard Dr. Park is the only upper cervical doctor who can use HIO technique made by Dr. B. J. Palmer. She adjusted on my upper cervical by hand only. She did not use any other modalities or any other drug. It seemed interesting to me, but at first I doubted the how effective it would be. I went to see Dr. Park twice a week and for a while, I did not feel any changes in my body. However, I was so surprised when I had my period came BACK after about 2months. It was so amazing to me and my family that I started my period again without pills but only by upper cervical adjustment! Since then, I have period on a regular cycle and am very happy with having my period back on. My period keeps on regular basis until now. Plus, my skin got much better and clean. I think normal period is big asset to female and frankly to say, I used to greatly fear to be unable to be pregnant when I did not have period. But, now I got my period back on and I can’t emphasize enough about the importance of upper cervical adjustment. Thank you so much, Dr. Park!",
    },
    {
      id: 4,
      name: "Dan K.",
      location: "La Crescenta-Montrose, CA",
      date: "February 20, 2016",
      rating: 5,
      text: "I have TMJ and ever since I came here things have gotten a lot better with my jaw. Let’s hope it stays that way!",
    },
    {
      id: 5,
      name: "Roux F.",
      location: "Porter Ranch, CA",
      rating: 5,
      text: "Dr. Park HEALED me! She’s a miracle worker. I had multiple discs dislocated in my neck because somebody decided they knew how to fix the crick in my neck by grabbing my neck and TURNING it. Thinking it was muscular, I put salon pas on it and was bed-ridden praying for something miraculous to happen….",
    },
    {
      id: 6,
      name: "John L.",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Snowboarding had taken a toll on my body aspirin couldnt relieve. When I went to some other chiropractor he only seemed to make it worse. When I came here she diagnosed what was wrong with me and got me back in shape ahead of schedule…This place is NECESSARY",
    },
    {
      id: 7,
      name: "Ann L.",
      location: "Buena Park, CA",
      rating: 5,
      text: "It is the best!! I have thyroid, cholesterol, neck disk 1&2 out of place, and irregular menstrual days. Been going for 3 months and now my thyroid, cholesterol and menstrual days are all normal. I also sleep really well now. Before I got all these problems fixed I was just not in a good mood…",
    },
    {
      id: 8,
      name: "Isaac C.",
      location: "Pasadena, CA",
      rating: 5,
      text: "Came in after a bad accident where I experienced severe pain from my left shoulder blade to my chest. It was painful to do pretty much everything. Now I’m completing my sessions and am as good as new. I definately recommend this place very flexible appointments.",
    },
    {
      id: 9,
      name: "Jeanie C.",
      location: "Bend, OR",
      rating: 5,
      text: "Supposedly this is the only chiropractic clinic in the area that does things old school. The doctor manually adjusts your bones with her hands, instead of using massaging tools to “align” your bones. The first time you arrive, you receive a treatment right away. You have fill out a long form that asks you about…",
    },
    {
      id: 10,
      name: "S Y.",
      location: "Monrovia, CA",
      rating: 5,
      text: "My motherlate 70s, has spinal stenosis and she was on bed rest suffering from sciatica. With Dr Park treatments, she was able to sit up after a couple of weeks. After 24 treatments, my mother can walk around with her walker.",
    },
    {
      id: 11,
      name: "Charly P.",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Made a believer out of me. I am somewhat of a skeptic when it comes to back cracks, and when I injured my neck and back I went to see my usual Chiropractor. After several treatments and several hundred dollars It was not improving. I decided to check out Yelp for some direction. The reviews…",
    },
    {
      id: 12,
      name: "Lolala B.",
      location: "Las Vegas, NV",
      rating: 5,
      text: "Let me tell you this. Dr. Park is amazing!! I meant to leave a review awhile ago but I went to go see her about month and a half ago because of my jaw. I had discomfort on my jaw for over a year without knowing what was going on. Dr. Park took xrays of…",
    },
    {
      id: 13,
      name: "Alessandra C.",
      location: "Montebello, CA",
      rating: 5,
      text: "Dr Park is really good. The first thing she’ll do is take an X-ray of your injured body to make sure she can see exactly what’s going on. I had a really bad lower back injury and after one year of therapy, I almost feel like me again. She doesn’t put you through any machines…",
    },
    {
      id: 14,
      name: "Nora Y.",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Just try it once and you’ll be hooked 🙂 I’ve struggled with neck, shoulder, and back pains for a long period of time; due to this, I started getting migraines. I was getting weekly massages thinking they were just huge knots but I wasn’t really feeling any better. Anyways long story short, I’ve been getting…",
    },
    {
      id: 15,
      name: "Ria K.",
      location: "Cypress, CA",
      rating: 5,
      text: "She was my fourth chiropractor and she was the only one who told me I have a problem with my neck and that is why my back is hurting. She was right, after the adjustment I felt so much better after just one visit. Dont waste your time and money with others.",
    },
    {
      id: 16,
      name: "Han Jun K.",
      location: "Los Angeles, CA",
      rating: 5,
      text: "This w to when my herniated disc started to hurt like never before. I couldn’t walk, I couldn’t stand, I couldn’t sit, I couldn’t even lay down. No matter what position I was in, I was just in so much pain. And in hindsight, I am so regretful that I…",
    },
    {
      id: 17,
      name: "Eddie K.",
      location: "Vista, CA",
      rating: 5,
      text: "Dr. Park is amazing and excellent service!! Highly recommended!! If you suffer from neck/ back pain!!!",
    },
    {
      id: 18,
      name: "Leo, C.",
      location: "Los Angeles, CA",
      rating: 5,
      text: "I’ll keep it simple for you. Stop wasting your time, money, and hope elsewhere. THIS is the place to go for your neck and spine injuries! I had two major accidents within the past three years: one was a head-on collision car accident, the other was a snowboarding trick gone wrong… And the after-shocks didn’t…",
    },
    {
      id: 19,
      name: "Amella C.",
      location: "Somerville, MA",
      rating: 5,
      text: "Dr. Park has magic hands. She fixed my TMJ, neck, lower back, shoulders and feet. I came to LA from SF for her. She is the best! The staff are very friendly and nice, too. I feel very comfortable in this place. You can’t find a better chiropractor.",
    },
    {
      id: 20,
      name: "John J.",
      location: "Los Angeles, CA",
      date: "February 20, 2016",
      rating: 5,
      text: "Quite simply the best chiropractor clinic I’ve been to. Service is quick and efficient and Dr. Park is without a doubt very skilled and professional. Headaches that I’ve had for years had in two weeks time just seemed to disappear. I’ve had other chiropractors in the past, but none were as reliable and experienced. The staff is also very friendly and professional, which is a huge plus as well. I recommend giving it a try if you suffer from any back or neck pain.",
    },
    {
      id: 21,
      name: "Johnny K.",
      location: "Los Angeles, CA",
      date: "February 20, 2016",
      rating: 5,
      text: "I got into two huge car accidents (both cars totalled) a few years back and my neck and chest have been in pain since about a year after the accidents. I have been to many many many different chiropractor and acupuncture places but my pains were always relieved only temporarily. Dr. Park at Yonsei is the best chiropractor I have ever been to. She targets all of your symptoms. If you have pain, tell her, and she will make sure you aren’t in pain anymore. She is extremely professional and is very thorough with all of her treatments. Every treatment is done by her hands and they’re amazing. She does everything by hand. She is not only knowledgeable and smart but also very good with her hands. I will and have already recommended her to my peers. I was in so much pain when I first came to the office. My neck and back were in a lot of pain and I had terrible migraines. After 12 weeks of treatment, I can honestly say that my body now hasolutely no pain. I can say with confidence that there is no better chiropractor than her in all of Southern California.",
    },
    {
      id: 22,
      name: "SoHee A.",
      location: "Los Angeles, CA",
      date: "December 28, 2015",
      rating: 5,
      text: "I believe Dr. Park is the best upper cervical chiropractor in los angeles! I had suffered from neck&shoudler pain for last three years, and now i feel so much better… the pain& migraine has been gone! This is truly amazing! I highly recommend Dr.Park if anybody who feels uncomfortable neck, back pain and headache. She has the such a magic healing hands!!",
    },
    {
      id: 23,
      name: "Jenny P.",
      location: "Northridge, CA",
      date: "December 28, 2015",
      rating: 5,
      text: "I found this place because my mom was looking for somewhere to go for her foot problems and she saw the yelp reviews regarding period problems and TMJ, both of which I have. I go to school in New York so I had to get treatment every day for two weeks. I’m so glad I met Dr. Park and the two weeks of treatment was definitely worth it! I never knew most of my health problems were due to my misaligned spine. My period came back to normal within these two weeks and my TMJ is basically gone. I can open my mouth without my jaw getting stuck and because my TMJ was fixed, my migraines have disappeared as well. Dr. Park really knows what she’s doing – don’t go anywhere else! Her staff is extremely friendly and professional as well. You won’t regret coming here!! If someone like me can be fixed this quickly, you will too.",
    },
    {
      id: 24,
      name: "Ane S.",
      location: "Garden Grove, CA",
      date: "December 28, 2015",
      rating: 5,
      text: "These is the best thing I did in my life. If you have any of back, neck, shoulder problem please come and see Dr. park, she is the best ever. I believe she is the best in USA. I was in pain for more then 10 years and the last two years it was almost impossible to walk, I couldn’t do simple things anymore, like brush my hair, take pick up things from the floor, even to open my mouth and eat I had pain. I have tried so many different treatment, so many doctors and I was getting worst and worst. In my first appointment with Dr Park I cried so much pain I was, but when I left I was feeling out of my body, for first time in 10 years I did NOT feel any pain, I came from pain 7-9 to zero instantly. I was driving back home and I could see all the lines and the cars beside me, I could see my shoulder for first time, I can look up and down and no pain. I need to thank my mother in law for introducing me to Dr Park. Please listen to me, don’t w your time, if you have pain go and see Dr Park and I’m sure you will love her. I’m getting better and better, hope soon my problem will be gone. Thank you so much Dr Park!",
    },
    {
      id: 25,
      name: "Jj K.",
      location: "Beverly Hills, CA",
      date: "December 28, 2015",
      rating: 5,
      text: "I first heard Dr. Park on Radio Korea one night describing the very symptoms I was experiencing. She mentioned that it was torticollis, a condition in which the head becomes persistently turned to one side, often associated with painful muscle spasms. I was experiencing extreme pain around my neck and my head was turning toward right. So I decided to visit Dr. Park and after x-rays and exams, she diagnosed me with torticollis. I’ve been seeing Dr. Park for 3 months now and my neck pain has significantly disappeared and my head position has gotten much better. I am very hopefully that Dr. Park will fix me to close to normal as possible. Thank you, Dr. Park, for your expertise and great technique.",
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-slate-900 py-16 px-6 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[800px] mx-auto text-center flex flex-col gap-4">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-yellow-50 dark:bg-yellow-900/20 w-fit mx-auto">
            <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-500 text-sm">favorite</span>
            <span className="text-yellow-700 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider">Community Trust</span>
          </div>
          <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
            Patient Stories
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Real stories from our patients about their journey to recovery and wellness.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="w-full max-w-[1100px] mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="flex flex-col gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all h-full"
            >
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[18px] fill-current">star</span>
                  ))}
                </div>
                {review.date ? (
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{review.date}</span>
                ) : (
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{review.location.split(',')[1]?.trim() || review.location}</span>
                )}
              </div>
              
              <div className="flex-grow">
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic whitespace-pre-line">
                  "{expandedReviews.includes(review.id) 
                    ? review.text 
                    : (review.text.length > 200 ? review.text.substring(0, 200) + '...' : review.text)}"
                </p>
                {(review.text.length > 200 || review.text.endsWith('…')) && (
                  <button 
                    onClick={() => toggleReview(review.id)}
                    className="text-primary text-xs font-bold mt-2 hover:underline inline-flex items-center gap-1"
                  >
                    {expandedReviews.includes(review.id) ? 'Show Less' : 'Read More'}
                    <span className="material-symbols-outlined text-[14px]">
                      {expandedReviews.includes(review.id) ? 'expand_less' : 'chevron_right'}
                    </span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-50 dark:border-slate-700">
                <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{review.name}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-6 py-10 mb-10">
        <div className="max-w-[960px] mx-auto bg-slate-900 dark:bg-slate-800 rounded-2xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
          <div className="relative z-10 flex flex-col gap-6 items-center">
            <h2 className="text-white text-3xl md:text-4xl font-black tracking-[-0.033em]">
              Start Your Own Recovery Story
            </h2>
            <p className="text-slate-300 text-lg max-w-[600px]">
              Join the thousands of patients who have found relief through the Palmer Upper Cervical method.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full max-w-md justify-center">
              <Link to="/contact" className="flex items-center justify-center rounded-lg bg-primary hover:bg-orange-600 transition-all h-12 px-8 text-white text-base font-bold shadow-lg">
                Book Your Appointment
              </Link>
              <a href="tel:2133815500" className="flex items-center justify-center rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-colors h-12 px-8 text-white text-base font-bold backdrop-blur-sm">
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;