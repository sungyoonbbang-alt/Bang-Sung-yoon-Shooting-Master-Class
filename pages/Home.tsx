import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, MessageCircle, Trophy, Star } from 'lucide-react';
import Button from '../components/Button';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1600" 
            alt="Basketball Hoop" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            공의 궤적을 지배하라.<br />
            <span className="text-primary">슈팅 마스터, 방성윤과 함께.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            슈팅은 과학입니다. 당신의 열정을 결과로 증명할 수 있도록,<br className="hidden md:block"/>
            대한민국 최고의 슈터가 설계한 커리큘럼과 독보적인 커뮤니티가 기다립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/clinic')}>슈팅 클리닉 시작하기</Button>
            <Button size="lg" variant="secondary" onClick={() => navigate('/forum')}>슈터스 포럼 바로가기</Button>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                슛 폼을 고쳐도 실전에서 안 들어가나요?<br/>
                혼자만의 연습은 금방 지치지 않나요?
              </h2>
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-primary mb-2">SOLUTION: FORM + COMMUNITY</h3>
                  <p className="text-gray-700">
                    방성윤의 과학적 분석과 실시간 피드백으로 슛 성공률을 극대화하고, 
                    같은 목표를 가진 동료들과 함께 꾸준히 성장하는 '지속 가능한 농구 라이프'를 만들어 드립니다.
                  </p>
                </div>
                <Button variant="outline" onClick={() => navigate('/clinic')}>커리큘럼 자세히 보기</Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1519766304800-c9519d0cef03?auto=format&fit=crop&q=80&w=800" 
                alt="Basketball Community" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">당신의 성장을 위한 3가지 엔진</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">슈팅 데이터 분석</h3>
              <p className="text-gray-600">
                AI 기반의 정교한 슈팅 분석 리포트를 제공하여 문제점을 정확히 진단하고 개선 방향을 제시합니다. 24시간 누적된 당신의 성장을 확인하세요.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">24시간 슈터스 포럼</h3>
              <p className="text-gray-600">
                익명으로 질문하고, 서로의 폼을 영상으로 공유하며 피드백을 주고받는 커뮤니티입니다. 성장의 여정을 함께 할 '농구 메이트'를 만나보세요.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold mb-4">마스터 코치 직강</h3>
              <p className="text-gray-600">
                전설적인 슈터 방성윤의 노하우가 담긴 독점 커리큘럼입니다. 기본기부터 실전 심리까지, 슈팅에 필요한 모든 것을 배울 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-secondary mb-4">15,000+</h2>
              <p className="text-xl text-gray-300">론칭 6개월 만에 달성한<br/>누적 열혈 슈터 수</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm text-left">
              <div className="flex mb-4 text-secondary">
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
              </div>
              <p className="text-lg italic mb-6">
                "방성윤 코치님 클리닉 후 3점 슛 성공률이 18%에서 35%로 두 배 가까이 뛰었습니다. 특히 포럼에서 얻는 동기 부여가 최고예요!"
              </p>
              <div className="font-bold text-gray-200">- 열혈 슈터 '농잘알K'님</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;