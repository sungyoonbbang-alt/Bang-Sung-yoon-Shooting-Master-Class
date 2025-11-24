
import React, { useState } from 'react';
import { Quote, User, Award, BookOpen, Star, Trophy, Calendar, Youtube, MessageCircle } from 'lucide-react';
import Button from '../components/Button';

const CAREER_LIST = [
  { year: "2018 ~ 현재", title: "전문 슈팅 코치", desc: "방성윤 슈팅 클래스 Head Coach" },
  { year: "2008.12 ~ 2011.06", title: "서울 SK 나이츠", desc: "KBL 프로 선수 활동" },
  { year: "2009", title: "한국농구대상 3점슛상", desc: "스포츠토토 한국농구대상" },
  { year: "2008.11", title: "리노 빅혼스", desc: "NBA D-League (현 G-League)" },
  { year: "2008", title: "득점상 & 3점슛상 2관왕", desc: "SK텔레콤 T프로농구 스포츠토토 한국농구대상" },
  { year: "2007", title: "KBL 정규리그 베스트5", desc: "현대모비스 프로농구 / 올스타전 출전 / 한중 올스타" },
  { year: "2006", title: "KBL 신인상 수상", desc: "KCC 프로농구 정규리그 / 도하 아시안게임 국가대표" },
  { year: "2006.08", "title": "월드바스켓볼챌린지 국가대표", desc: "대한민국 국가대표" },
  { year: "2005.11 ~ 2008", title: "서울 SK 나이츠", desc: "KBL 프로 선수 활동" },
  { year: "2004 ~ 2005", title: "로어노크 대즐", desc: "NBDL (현 G-League) 한국인 최초 진출" },
  { year: "2003", title: "대구유니버시아드 국가대표", desc: "제22회 대구유니버시아드 대회" },
  { year: "2002", title: "부산아시안게임 금메달", desc: "대한민국 국가대표" },
  { year: "2000", title: "U-18 청소년 국가대표 MVP", desc: "말레이시아 쿠알라룸푸르 아시아선수권" },
  { year: "2000", title: "카타르 영맨 3점슛상", desc: "코멕스배 성인국가대표 발탁" },
];

const Coach: React.FC = () => {
  const [coachProfileSrc, setCoachProfileSrc] = useState('/coach_profile.jpg');
  const defaultCoachFallback = "https://source.unsplash.com/random/300x400/?basketball,hoop";

  return (
    <div className="pb-20">
      {/* Header Profile */}
      <div className="bg-dark text-white pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Profile Image Container */}
              <div className="relative w-full max-w-[300px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/50 group bg-white">
                <img 
                  src={coachProfileSrc}
                  alt="Coach Bang Profile" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  onError={() => setCoachProfileSrc(defaultCoachFallback)}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6">
                  <h2 className="text-3xl font-bold text-white">방성윤</h2>
                  <p className="text-secondary font-medium">Head Coach & Founder</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                "슈팅은 던지는 것이 아니라,<br />
                <span className="text-primary">흐르는 것입니다."</span>
              </h1>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  많은 분들이 슛을 '손으로 던지는 것'이라고 생각합니다. 하지만 진정한 슈팅은 발끝에서 시작됩니다.
                  하체가 엔진이라면 팔은 조향 장치이고, 손끝은 정밀 기계입니다.
                </p>
                <p>
                  KBL 무대와 국제 대회를 거치며 정립한 <strong>'TDR 메커니즘'</strong>과 <strong>'40분 루틴'</strong>을 통해, 
                  여러분의 슈팅이 단순한 기술을 넘어 하나의 완벽한 흐름이 되도록 돕겠습니다.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  className="flex items-center gap-2 bg-[#FF0000] hover:bg-red-700"
                  onClick={() => window.open('https://www.youtube.com/@user-bangga_shoot', '_blank')}
                >
                  <Youtube className="w-5 h-5" />
                  공식 유튜브
                </Button>
                <Button 
                  variant="secondary" 
                  className="flex items-center gap-2"
                  onClick={() => window.open('https://pf.kakao.com/_ijexbT', '_blank')}
                >
                  <MessageCircle className="w-5 h-5" />
                  카카오톡 채널
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-dark"
                  onClick={() => window.open('https://m.blog.naver.com/liibang', '_blank')}
                >
                  <BookOpen className="w-5 h-5" />
                  공식 블로그
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-30" />
            <h2 className="text-3xl font-bold">Coaching Philosophy</h2>
            <p className="text-gray-600 mt-4">방성윤 슈팅 메서드의 3가지 핵심 철학</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-primary">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-3">TDR Rhythm</h3>
              <p className="text-gray-600 leading-relaxed">
                "슛은 3단계가 아닌 1개의 리듬입니다."<br/>
                <strong>Triple Threat(준비) - Delivery(연결) - Release(표현)</strong>가 끊김 없이 이어져야 합니다.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
               <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-secondary">
                <User className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-3">Engine & Steering</h3>
              <p className="text-gray-600 leading-relaxed">
                "하체는 엔진, 팔은 핸들."<br/>
                상체 힘만으로는 한계가 있습니다. 하체의 펌핑 에너지를 손끝까지 손실 없이 전달하는 법을 가르칩니다.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
               <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-6 text-gray-700">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-3">Separation</h3>
              <p className="text-gray-600 leading-relaxed">
                "공간을 만들어야 슛이 들어갑니다."<br/>
                단순한 폼 교정을 넘어, 실전에서 수비를 따돌리고 내 리듬으로 쏠 수 있는(Separation) 능력을 배양합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Timeline */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold mb-12 text-center">Legendary Moments</h2>
           
           <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
             
             {/* Item 1 */}
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">부산 아시안게임 금메달</div>
                    <time className="font-caveat font-medium text-primary">2002</time>
                  </div>
                  <div className="text-slate-500">대한민국 국가대표로서 부산 아시안게임 농구 종목 금메달 획득.</div>
                </div>
             </div>

             {/* Item 2 */}
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">NBDL (G-League) 진출</div>
                    <time className="font-caveat font-medium text-primary">2004</time>
                  </div>
                  <div className="text-slate-500">한국인 최초로 미국 NBDL 로어노크 대즐 입단, 선진 농구에 도전.</div>
                </div>
             </div>

              {/* Item 3 */}
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">KBL 신인상 & 득점왕</div>
                    <time className="font-caveat font-medium text-primary">2006-2008</time>
                  </div>
                  <div className="text-slate-500">2006년 신인상 수상 및 2008년 득점상, 3점슛상을 석권하며 리그 지배.</div>
                </div>
             </div>

           </div>
        </div>
      </div>

      {/* Detailed Career History Table */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Full Career History</h2>
            <p className="text-gray-600">방성윤 코치의 선수 경력 및 수상 내역 전체 보기</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-4 px-6 font-bold text-gray-900 w-1/3">기간 / 연도</th>
                    <th className="py-4 px-6 font-bold text-gray-900">내용</th>
                    <th className="py-4 px-6 font-bold text-gray-900 hidden md:table-cell">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {CAREER_LIST.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 text-primary font-bold whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          {item.year}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-bold text-gray-900">{item.title}</div>
                      </td>
                      <td className="py-4 px-6 text-gray-500 text-sm hidden md:table-cell">
                        {item.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coach;