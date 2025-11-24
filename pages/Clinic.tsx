import React, { useState } from 'react';
import { Target, Layers, Video, Zap, Activity, CheckCircle, AlertTriangle, BookOpen, Stethoscope, Wrench, XCircle, Info, PlayCircle, Dumbbell, Map, Brain, Shield, GraduationCap, ClipboardList, Timer, Award } from 'lucide-react';
import Button from '../components/Button';

const Clinic: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'basics' | 'mechanism' | 'body' | 'drills' | 'troubleshooting' | 'curriculum' | 'glossary'>('basics');

  return (
    <div className="pt-8 pb-20 bg-gray-50">
      {/* Header */}
      <div className="bg-white pb-16 pt-8 mb-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Bang Sung-yoon Method</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              슈팅 완벽 교재<br />
              <span className="text-primary">TDR 리듬과 메커니즘</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              "슈팅은 던지는 것이 아니라 흐르는 것입니다."<br/>
              방성윤 코치의 슈팅 바이블을 통해 3단계 메커니즘을 마스터하세요.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">수강 신청하기</Button>
              <Button size="lg" variant="outline">무료 샘플 강의</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-y border-gray-200 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-8 no-scrollbar">
            <button 
              onClick={() => setActiveTab('basics')}
              className={`py-4 text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${activeTab === 'basics' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
            >
              CHAPTER 0. 슈팅의 기초
            </button>
            <button 
              onClick={() => setActiveTab('mechanism')}
              className={`py-4 text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${activeTab === 'mechanism' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
            >
              CHAPTER 1. TDR 메커니즘
            </button>
            <button 
              onClick={() => setActiveTab('body')}
              className={`py-4 text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${activeTab === 'body' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
            >
              CHAPTER 2. 하체와 손끝
            </button>
            <button 
              onClick={() => setActiveTab('drills')}
              className={`py-4 text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${activeTab === 'drills' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
            >
              CHAPTER 3. 실전 훈련법
            </button>
            <button 
              onClick={() => setActiveTab('troubleshooting')}
              className={`py-4 text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${activeTab === 'troubleshooting' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
            >
              CHAPTER 4. 문제 진단 & 교정
            </button>
             <button 
              onClick={() => setActiveTab('curriculum')}
              className={`py-4 text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${activeTab === 'curriculum' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
            >
              CURRICULUM. 정규 교육과정
            </button>
            <button 
              onClick={() => setActiveTab('glossary')}
              className={`py-4 text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${activeTab === 'glossary' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
            >
              APPENDIX. 용어 사전
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TAB 0: BASICS */}
        {activeTab === 'basics' && (
          <div className="space-y-16 animate-fadeIn">
            
            {/* 1. Types of Shooting */}
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                <Info className="text-primary w-8 h-8" />
                슈팅의 종류
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary transition-colors">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">1. 세트슛 (Set Shoot)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    가만히 서 있는 상태에서 던지는 슈팅입니다. 가장 기본적인 슈팅 방법이며, 정확한 자세를 익히는 출발점입니다.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary transition-colors">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">2. 점프슛 (Jump Shoot)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    점프하여 정점에 도달한 후 공을 던지는 슈팅입니다. 점프력이 좋을수록 수비를 따돌리기 유리하며, 기본적인 체력이 바탕이 되어야 합니다.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary transition-colors">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">3. 무빙슛 (Moving Shoot)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    움직이며 공을 던지는 고난이도 기술입니다. 수비수를 제치기 위해 사용되며, 순간적인 스피드와 완벽한 밸런스를 필요로 합니다.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-gray-500 text-sm text-center">
                * 이 외에도 덩크슛, 레이업, 더블클러치, 턴어라운드 등 다양한 슈팅이 있지만, 본 교재는 슈팅의 '기본'에 집중합니다.
              </p>
            </div>

            {/* 2. Detailed Steps */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-bold mb-10 text-center">슈팅 디테일 가이드</h2>
              
              <div className="space-y-12">
                
                {/* Step 1: Stance */}
                <div className="border-l-4 border-primary pl-6 md:pl-10 relative">
                  <div className="absolute -left-3 top-0 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div className="flex justify-between items-center mb-6">
                     <h3 className="text-2xl font-bold text-gray-900">기본 자세 (Triple Threat)</h3>
                     <span className="flex items-center gap-1 text-xs font-bold text-primary bg-red-50 px-3 py-1 rounded-full border border-red-100 cursor-pointer">
                        <PlayCircle className="w-3 h-3" /> 영상 QR
                     </span>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-sm">
                    <li>1. 링을 정면으로 보고 어깨너비로 선다.</li>
                    <li>2. 오른손잡이는 오른발, 왼손잡이는 왼발을 한 스텝 앞으로 11자로 선다.</li>
                    <li>3. 상체를 살짝 숙이고 엉덩이를 뒤로 뺀 느낌으로 무릎을 구부린다.</li>
                    <li>4. 옆에서 봤을 때 <strong>번개 모양</strong>이 되도록 자세를 잡는다.</li>
                    <li>5. 슈팅 팔꿈치가 몸통에서 떨어지지 않게 붙인다.</li>
                    <li>6. 공은 배꼽 앞에 위치시킨다 (오른손은 위, 왼손은 옆).</li>
                    <li>7. 공을 잡았을 때 검지가 링을 향해 있어야 한다.</li>
                    <li>8. 공을 잡았을 때 열 손가락이 서로 붙어 있으면 안 된다.</li>
                    <li>9. 슈팅 핸드 손목은 뒤로 젖히고 있어야 한다 (Cocked).</li>
                    <li>10. 왼손은 옆에서 잡지만 밑에서 받쳐준다는 느낌으로 위치한다.</li>
                  </ul>
                </div>

                {/* Step 2: Delivery */}
                <div className="border-l-4 border-secondary pl-6 md:pl-10 relative">
                  <div className="absolute -left-3 top-0 bg-secondary text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                   <div className="flex justify-between items-center mb-6">
                     <h3 className="text-2xl font-bold text-gray-900">딜리버리 (Delivery)</h3>
                     <span className="flex items-center gap-1 text-xs font-bold text-secondary bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100 cursor-pointer">
                        <PlayCircle className="w-3 h-3" /> 영상 QR
                     </span>
                  </div>
                  <ul className="space-y-3 text-gray-700 text-sm mb-6">
                    <li>1. 배꼽에서 이마(세트포인트)까지 <strong>일자</strong>로 공을 올린다.</li>
                    <li>2. 손목과 팔꿈치 각도를 유지한 채 그대로 가져간다.</li>
                    <li>3. <strong>상체(목)와 하체를 움직이지 않는다.</strong> (가장 중요)</li>
                    <li>4. 항상 똑같은 위치(세트포인트)로 딜리버리한다.</li>
                    <li>5. 최대한 몸과 가까이 붙여서 딜리버리한다 (수직 상승).</li>
                    <li>6. 시작 위치가 이마와 가까울수록 슈팅 타이밍이 빨라진다.</li>
                  </ul>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-sm">
                    <strong className="text-primary flex items-center gap-2 mb-2"><AlertTriangle className="w-4 h-4"/> 주의할 점</strong>
                    <p className="text-gray-700">
                      보통 팔을 몸 쪽으로 당겨서 딜리버리 하려다 세트포인트가 흔들립니다. 
                      배꼽에서 이마까지 <strong>수직으로 올린다</strong>는 느낌으로 연습하세요. 
                      흔들리면 하체 힘을 쓰지 못하고 팔로만 밀게 되어 방향이 틀어집니다.
                    </p>
                  </div>
                </div>

                {/* Step 3: Release (Upper) */}
                <div className="border-l-4 border-gray-400 pl-6 md:pl-10 relative">
                  <div className="absolute -left-3 top-0 bg-gray-400 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div className="flex justify-between items-center mb-6">
                     <h3 className="text-2xl font-bold text-gray-900">릴리즈 (상체)</h3>
                     <span className="flex items-center gap-1 text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200 cursor-pointer">
                        <PlayCircle className="w-3 h-3" /> 영상 QR
                     </span>
                  </div>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li>1. 팔꿈치가 관자놀이에 붙는 느낌으로 링을 향해 팔을 뻗는다.</li>
                    <li>2. 공이 떠나기 전까지 손가락을 펴고 있어야 한다 (방향 유지).</li>
                    <li>3. 슛 이후 검지, 중지 손가락이 오른쪽 눈에 보이는지 확인한다.</li>
                    <li>4. 릴리즈 순간 왼손은 슈팅핸드의 방향을 잡아준다 (밀지 않음).</li>
                    <li>5. 공이 그물을 통과할 때까지 팔을 뻗고 있는다 (Follow Through).</li>
                  </ul>
                </div>

                {/* Step 4: Release (Connection) */}
                <div className="border-l-4 border-gray-900 pl-6 md:pl-10 relative">
                   <div className="absolute -left-3 top-0 bg-gray-900 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                   <div className="flex justify-between items-center mb-6">
                     <h3 className="text-2xl font-bold text-gray-900">릴리즈 (하체 연결)</h3>
                     <span className="flex items-center gap-1 text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200 cursor-pointer">
                        <PlayCircle className="w-3 h-3" /> 영상 QR
                     </span>
                  </div>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li>1. 트리플 스렛 자세에서 무릎을 구부린 채 상체 고정 딜리버리.</li>
                    <li>2. 이마(세트포인트)에 도착하면 무릎을 펴면서 동시에 릴리즈.</li>
                    <li>3. 무릎이 펴질 때 세트포인트가 흔들리지 않아야 한다 (내려가거나 옆으로 X).</li>
                    <li>4. 릴리즈 시 머리가 뒤로 젖혀지지 않게 고정한다.</li>
                  </ul>
                </div>
                 
                 {/* Step 5: Release Point */}
                 <div className="border-l-4 border-green-500 pl-6 md:pl-10 relative">
                   <div className="absolute -left-3 top-0 bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">5</div>
                   <div className="flex justify-between items-center mb-6">
                     <h3 className="text-2xl font-bold text-gray-900">릴리즈 포인트</h3>
                     <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100 cursor-pointer">
                        <PlayCircle className="w-3 h-3" /> 영상 QR
                     </span>
                  </div>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li>1. 슛 연결 후 팔꿈치를 링을 향해 끝까지 뻗는다.</li>
                    <li>2. 공을 보내고 팔(손목 윗부분)이 떨어지지 않게 들고 있는다.</li>
                    <li>3. 손끝은 링 안으로 공을 집어넣는다고 생각하고 바닥을 향한다 (거위 목).</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 1: TDR MECHANISM */}
        {activeTab === 'mechanism' && (
          <div className="space-y-16 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Layers className="text-primary w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold">TDR 리듬 공식</h2>
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  슈팅은 세 가지 동작이 아니라 <strong>하나의 리듬</strong>입니다. 
                  <br/>T(준비) - D(연결) - R(표현)이 물 흐르듯 이어져야 합니다.
                </p>

                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="relative pl-8 border-l-2 border-gray-200 pb-4">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark ring-4 ring-white"></div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-900">1. Triple Threat (준비)</h3>
                      <span className="text-xs font-bold bg-gray-100 px-2 py-1 rounded">리듬: 꾹 (압축)</span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      슛, 드리블, 패스가 모두 가능한 기본 자세입니다. 에너지를 모으는 첫 박자입니다.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1 list-disc list-inside bg-gray-50 p-3 rounded-lg">
                      <li>무게중심: 앞발 60%, 뒷발 40%</li>
                      <li>공 위치: 배꼽 ~ 가슴 사이</li>
                      <li>시선: 림을 응시</li>
                    </ul>
                  </div>

                  {/* Step 2 */}
                  <div className="relative pl-8 border-l-2 border-gray-200 pb-4">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-primary">2. Delivery (연결)</h3>
                      <span className="text-xs font-bold bg-red-50 text-primary px-2 py-1 rounded">리듬: 탁 (상승)</span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      공을 <span className="font-bold">세트포인트(이마 앞)</span>로 직선 이동시키는 과정입니다. 하체의 힘이 상체로 전달됩니다.
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                      <h4 className="font-bold text-primary text-sm mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" /> 핵심: 세트포인트 (Set Point)
                      </h4>
                      <p className="text-sm text-gray-700">
                        "다른 동작이 흔들려도 <span className="font-bold">이마 앞 세트포인트</span>에서 멈춤(0.5초)이 있다면 성공률은 보장됩니다. 이곳이 슈팅의 영점입니다."
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative pl-8 border-l-2 border-transparent">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-400 ring-4 ring-white"></div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-900">3. Release (표현)</h3>
                      <span className="text-xs font-bold bg-gray-100 px-2 py-1 rounded">리듬: 슛 (방출)</span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      에너지를 해방하는 단계입니다. 손목은 수건을 털듯 가볍게, 손끝은 림을 향해 뻗습니다.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1 list-disc list-inside bg-gray-50 p-3 rounded-lg">
                      <li>검지/중지: 마지막 터치 (방향 결정)</li>
                      <li>팔로우스루: 거위목 자세 1~2초 유지</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Visual/Image Section */}
              <div className="sticky top-40 space-y-6">
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1518407613690-d9fc990e795f?auto=format&fit=crop&q=80&w=800" 
                    alt="Shooting Form" 
                    className="w-full h-64 object-cover opacity-80"
                  />
                  <div className="p-6">
                    <h3 className="text-white font-bold text-xl mb-2">Coach's Rhythm Tip</h3>
                    <p className="text-gray-300 italic">
                      "마음속으로 구호를 외치세요.<br/>
                      <span className="text-secondary font-bold text-lg">꾹(압축) — 탁(세트) — 슛(릴리스)</span><br/>
                      이 3박자가 일정해야 기복 없는 슈터가 됩니다."
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-secondary">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="text-secondary w-5 h-5" /> 
                    흔한 실수 체크
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">X</span>
                      <span className="text-gray-600">세트포인트가 머리 뒤로 넘어간다 (투석기 슛)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">X</span>
                      <span className="text-gray-600">왼손(보조손)으로 공을 민다</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">X</span>
                      <span className="text-gray-600">릴리스 후 손이 바로 내려온다 (팔로우스루 실종)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BODY & HANDS */}
        {activeTab === 'body' && (
          <div className="space-y-16 animate-fadeIn">
            {/* Lower Body Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                  <div className="bg-primary/5 text-primary p-4 rounded-2xl mb-6 inline-block">
                    <Activity className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">하체는 엔진이다</h2>
                  <p className="text-gray-600 leading-relaxed">
                    하체는 단순한 받침대가 아닙니다. 에너지를 생성하여 손끝까지 밀어 올리는 펌프입니다.
                    <br/><br/>
                    <strong>"발에서 시작된 힘이 무릎, 엉덩이, 코어를 지나 손끝에서 터진다."</strong>
                  </p>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-2">발 (Feet)</h3>
                    <p className="text-sm text-gray-600">
                      앞발 60%, 뒷발 40%의 무게중심. 뒤꿈치는 살짝 들릴 듯 말 듯한 '스프링 압축' 상태를 유지하세요.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-2">무릎 (Knees)</h3>
                    <p className="text-sm text-gray-600">
                      각도는 100~110도. '짧고 빠른 굽힘'이 탄력을 만듭니다. 무릎이 펴지는 순간 손은 이미 올라가야 합니다.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-2">엉덩이 (Hips)</h3>
                    <p className="text-sm text-gray-600">
                      뒤로 빠지면 안 됩니다. 무릎 위에 수직으로 위치하여 힘을 위로 전달하는 파이프라인 역할을 해야 합니다.
                    </p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                    <h3 className="font-bold text-primary text-lg mb-2">밸런스 체크</h3>
                    <p className="text-sm text-gray-700">
                      슛을 던진 후 <span className="font-bold">2초간 정지</span>해보세요. 몸이 앞뒤로 쏠리지 않고 수직으로 서 있다면 완벽한 밸런스입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hands Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                 <div className="bg-dark text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    <h3 className="text-2xl font-bold mb-6 text-secondary">손의 역할 분담</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-xl">R</div>
                        <div>
                          <h4 className="font-bold text-lg">오른손 (주포)</h4>
                          <p className="text-gray-300 text-sm">에너지를 방향으로 바꾸는 조향 장치. <br/>손바닥 공간(Space)을 확보하고 검지/중지로 마무리.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-xl">L</div>
                        <div>
                          <h4 className="font-bold text-lg">왼손 (가이드)</h4>
                          <p className="text-gray-300 text-sm">거들 뿐이지만 가장 중요합니다. <br/>릴리스 직전(0.1초 전)에 떨어져야 하며, 절대 밀면 안 됩니다.</p>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-primary/5 text-primary p-4 rounded-2xl mb-6 inline-block">
                  <Zap className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-6">손끝은 정밀 기계다</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  팔이 에너지를 전달하는 통로라면, 손은 그 에너지를 정리하여 림으로 보내는 최종 관문입니다.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-700"><strong>손바닥 공간:</strong> 공과 손바닥 사이에 동전 하나가 들어갈 틈을 유지하세요.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-700"><strong>검지의 역할:</strong> 슛의 방향을 결정하는 활시위의 끝점입니다.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Goose Neck:</strong> 릴리스 후 손목이 거위 목처럼 굽어 있어야 백스핀이 걸립니다.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DRILLS */}
        {activeTab === 'drills' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">단계별 실전 훈련 루틴</h2>
              <p className="text-gray-600">
                이론을 몸에 새기는 과정입니다. 정확도가 70% 이상일 때 다음 단계로 넘어가세요.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Drill 1 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:translate-y-[-4px] transition-transform">
                <div className="h-2 bg-gray-200"></div>
                <div className="p-8">
                  <div className="text-sm font-bold text-gray-400 mb-2">STEP 1</div>
                  <h3 className="text-xl font-bold mb-4">노점프 폼 슈팅</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    하체를 고정하고 상체의 릴리스 감각만 익히는 훈련입니다.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between"><span>거리</span> <strong>골대 앞 1m</strong></div>
                    <div className="flex justify-between"><span>반복</span> <strong>10회 x 3세트</strong></div>
                    <div className="flex justify-between"><span>목표</span> <strong>스핀 확인</strong></div>
                  </div>
                </div>
              </div>

              {/* Drill 2 */}
              <div className="bg-white rounded-xl shadow-lg border-t-4 border-primary overflow-hidden hover:translate-y-[-4px] transition-transform">
                <div className="p-8">
                  <div className="text-sm font-bold text-primary mb-2">STEP 2</div>
                  <h3 className="text-xl font-bold mb-4">TDR 리듬 슈팅</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    "꾹-탁-슛" 구호에 맞춰 하체와 상체의 연결을 연습합니다.
                  </p>
                  <div className="bg-red-50 rounded-lg p-4 space-y-2 text-sm text-gray-700">
                     <div className="flex justify-between"><span>거리</span> <strong>자유투 라인</strong></div>
                    <div className="flex justify-between"><span>반복</span> <strong>10회 x 3세트</strong></div>
                    <div className="flex justify-between"><span>도구</span> <strong>메트로놈 (70BPM)</strong></div>
                  </div>
                </div>
              </div>

              {/* Drill 3 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:translate-y-[-4px] transition-transform">
                <div className="h-2 bg-secondary"></div>
                <div className="p-8">
                  <div className="text-sm font-bold text-secondary mb-2">STEP 3</div>
                  <h3 className="text-xl font-bold mb-4">캐치 앤 슛 (1-2 Step)</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    실전과 동일하게 패스를 받고 스텝을 밟아 쏘는 훈련입니다.
                  </p>
                  <div className="bg-yellow-50 rounded-lg p-4 space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between"><span>이동</span> <strong>5 스팟 이동</strong></div>
                    <div className="flex justify-between"><span>타이밍</span> <strong>착지와 동시 딜리버리</strong></div>
                    <div className="flex justify-between"><span>목표</span> <strong>0.8초 이내 릴리스</strong></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Drill Summary */}
            <div className="bg-dark text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <BookOpen className="text-secondary" />
                  주간 훈련 일지 다운로드
                </h3>
                <p className="text-gray-400">방성윤 코치가 사용하는 훈련 기록 시트를 PDF로 받아보세요.</p>
              </div>
              <Button variant="secondary" className="whitespace-nowrap">PDF 다운로드</Button>
            </div>
          </div>
        )}

        {/* TAB 4: TROUBLESHOOTING */}
        {activeTab === 'troubleshooting' && (
          <div className="space-y-16 animate-fadeIn">
            
            {/* Coach's Insight */}
            <div className="bg-dark text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 bg-primary opacity-20 blur-3xl rounded-full"></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <h2 className="text-3xl font-bold mb-4 text-secondary flex items-center gap-3">
                    <Stethoscope className="w-8 h-8" />
                    Coach's Diagnosis
                  </h2>
                  <div className="w-full h-1 bg-white/10 mb-6"></div>
                  <p className="text-xl font-bold leading-relaxed mb-4">
                    "일반인이나 선수나<br/>한 번 들인 습관은 고치기 쉽지 않습니다."
                  </p>
                </div>
                <div className="md:w-2/3 text-gray-300 space-y-4">
                  <p>
                    많은 선수들이 상체를 흔들거나, 팔을 흔들며 공을 링으로 보내기 위해 애를 씁니다.
                    하지만 제가 가장 중요하게 생각하는 것은 <span className="text-white font-bold border-b border-secondary">상체·손목·팔꿈치를 고정한 채 딜리버리</span>하는 것입니다.
                  </p>
                  <div className="bg-white/10 p-4 rounded-xl border-l-4 border-primary mt-4">
                    <h4 className="text-white font-bold mb-2">방성윤의 숙제:</h4>
                    <p className="text-sm">
                      "어떻게 하면 다리의 힘을 팔꿈치에 연결해서 릴리즈 하여 스냅으로 연결 할 수 있을까?
                      이것이 슈팅 교정의 핵심입니다."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Core Corrections */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Wrench className="text-primary w-6 h-6" />
                4가지 핵심 교정 솔루션
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-gray-100 mb-4">01</div>
                  <h4 className="font-bold text-lg mb-2">팔꿈치 밀기 딜리버리</h4>
                  <p className="text-sm text-gray-600">딜리버리 할 때 오른팔 팔꿈치가 구부러지거나 빠지지 않도록 계속 밀어주며 슈팅 연습.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-gray-100 mb-4">02</div>
                  <h4 className="font-bold text-lg mb-2">이마 푸쉬업</h4>
                  <p className="text-sm text-gray-600">손을 이마(세트포인트 위치)에 두고 벽에 대고 푸쉬업. 손목과 팔꿈치 고정 감각 익히기.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-gray-100 mb-4">03</div>
                  <h4 className="font-bold text-lg mb-2">고정 딜리버리</h4>
                  <p className="text-sm text-gray-600">양팔 손목을 누르고, 손목과 팔꿈치를 고정한 채로 딜리버리 궤적만 반복 연습.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-gray-100 mb-4">04</div>
                  <h4 className="font-bold text-lg mb-2">세트포인트 리듬</h4>
                  <p className="text-sm text-gray-600">세트포인트에 공을 고정하고 흔들리지 않게 무릎만 굽혔다 폈다 반복하며 연결 확인.</p>
                </div>
              </div>
            </div>

            {/* Symptom Checker */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <XCircle className="text-red-500 w-6 h-6" />
                  문제점 자가 진단 체크리스트
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  아래 항목 중 자신에게 해당되는 나쁜 습관을 체크해보세요.
                </p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {/* Group 1: Triple Threat */}
                <div className="p-6 md:p-8">
                  <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Triple Threat & Start (준비 동작)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-700">
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 딜리버리 시작할 때 턱을 움직인다.</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 상체를 많이 숙인다 (굽은 등).</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 무릎을 과도하게 많이 굽힌다.</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 무릎이 안쪽으로 모이며 굽혀진다 (Knee Valgus).</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 그립이 너무 좁거나 너무 넓다.</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 공이 없을 때 준비 자세가 되어있지 않다.</div>
                  </div>
                </div>

                {/* Group 2: Delivery & Set Point */}
                <div className="p-6 md:p-8">
                  <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Delivery & Set Point (연결 동작)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-700">
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 상체를 흔들어서 반동으로 공을 가져간다.</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 세트포인트 위치를 인지하지 못한다 (매번 다름).</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 세트포인트가 너무 높거나 낮다 / 멀거나 가깝다.</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 어깨를 으쓱하며 움츠린다.</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 슈팅하는 쪽 어깨가 앞으로 튀어나온다.</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 손가락 끝으로 공을 찝듯이 잡는다 (Claw Grip).</div>
                  </div>
                </div>

                {/* Group 3: Release */}
                <div className="p-6 md:p-8">
                  <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Release (마무리 동작)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-700">
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 릴리즈 순간 머리를 뒤로 젖히거나 움직인다.</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 손을 먼저 뻗거나 손가락으로만 공을 민다.</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 세트포인트에서 멈춤 없이 공을 그냥 뿌려버린다.</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 슈팅 손이 릴리즈 후 삐뚤어져 있다.</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 보조핸드(왼손)가 위나 옆으로 움직인다.</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> 보조핸드 엄지로 공을 민다 (Thumb flick).</div>
                  </div>
                </div>
                 {/* Group 4: Catch */}
                 <div className="p-6 md:p-8 bg-gray-50">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-900"></span>
                    Catch & Footwork (실전 연결)
                  </h4>
                  <div className="text-sm text-gray-700 space-y-3">
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> <strong className="text-gray-900">손으로만 캐치:</strong> 스텝과 동시에 잡지 않고 손만 뻗는다.</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> <strong className="text-gray-900">박자 놓침:</strong> 손으로 잡고 난 뒤에 스텝을 움직여 슈팅 타이밍을 뺏긴다.</div>
                    <div className="flex items-start gap-2"><span className="text-red-500 font-bold">·</span> <strong className="text-gray-900">시야:</strong> 캐치와 동시에 링을 주시하지 않는다.</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 6: CURRICULUM */}
        {activeTab === 'curriculum' && (
          <div className="space-y-16 animate-fadeIn">
             {/* Header */}
             <div className="text-center max-w-3xl mx-auto">
               <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <GraduationCap className="w-5 h-5" />
                  방성윤의 슈팅 마스터 교육과정
               </div>
               <h2 className="text-3xl font-bold mb-4">"실전에서 쓸 수 없는 슛은 슛이 아니다"</h2>
               <p className="text-gray-600">
                 전 프로농구 선수 방성윤의 20년 노하우가 집약된 18주 완성 프로그램.<br/>
                 기초 메커니즘부터 실전 전술 슈팅까지 체계적으로 마스터합니다.
               </p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               
               {/* Phase 1 */}
               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                 <div className="bg-gray-900 text-white p-6 relative">
                   <div className="absolute top-4 right-4 text-xs font-bold bg-white/20 px-2 py-1 rounded">4 Weeks</div>
                   <h3 className="text-xl font-bold mb-1">Phase 1: 기초 완성</h3>
                   <p className="text-gray-300 text-sm">슛의 본질을 이해하고 기본기를 완성한다</p>
                 </div>
                 <div className="p-6 space-y-6">
                   <div>
                     <div className="font-bold text-primary mb-2">1주차: 슈팅 메커니즘의 이해</div>
                     <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                       <li>이론: 왜 슛이 농구의 본질인가?</li>
                       <li>실습: 무릎 사용 없는 상체 릴리스</li>
                       <li>딜리버리(배꼽→이마) 및 하체 연결</li>
                     </ul>
                   </div>
                   <div>
                     <div className="font-bold text-primary mb-2">2주차: 세트슛과 기본 점프슛</div>
                     <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                       <li>캐치슈팅 (합스텝/원투스텝)</li>
                       <li>제자리 점프슛 및 보조손 교정</li>
                       <li>영상 분석: 자신의 슛폼 점검</li>
                     </ul>
                   </div>
                    <div>
                     <div className="font-bold text-primary mb-2">3주차: 무빙슛 기초</div>
                     <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                       <li>무빙 합스텝/원투스텝 슈팅</li>
                       <li>캐치드리블 슈팅 (좌우)</li>
                       <li>6방향 이동 슈팅 (정면/대각선/좌우)</li>
                     </ul>
                   </div>
                    <div>
                     <div className="font-bold text-primary mb-2">4주차: 기본기 완성 및 평가</div>
                     <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                       <li>종합 평가: 5개 지점 성공률 측정</li>
                       <li>개별 피드백: 문제점 진단 및 교정</li>
                     </ul>
                   </div>
                 </div>
               </div>

               {/* Phase 2 */}
               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                 <div className="bg-primary text-white p-6 relative">
                   <div className="absolute top-4 right-4 text-xs font-bold bg-white/20 px-2 py-1 rounded">6 Weeks</div>
                   <h3 className="text-xl font-bold mb-1">Phase 2: 실전 기술</h3>
                   <p className="text-red-100 text-sm">다양한 상황에서 사용할 무기를 개발한다</p>
                 </div>
                 <div className="p-6 space-y-6">
                   <div>
                     <div className="font-bold text-gray-900 mb-2">5주차: 캐치앤슛 마스터</div>
                     <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                       <li>V-컷, L-컷을 통한 공간 창출</li>
                       <li>스크린 활용 및 클로즈아웃 대처</li>
                     </ul>
                   </div>
                   <div>
                     <div className="font-bold text-gray-900 mb-2">6주차: 풀업 점퍼</div>
                     <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                       <li>1-2 드리블 후 급정지 풀업</li>
                       <li>픽앤롤 상황별 풀업 (드롭/스위치/헷지)</li>
                     </ul>
                   </div>
                   <div>
                     <div className="font-bold text-gray-900 mb-2">7주차: 스텝백과 공간 창출</div>
                     <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                       <li>기본/사이드(커브드)/더블 스텝백</li>
                       <li>전술적 이해: 언제 사용하는가?</li>
                     </ul>
                   </div>
                    <div>
                     <div className="font-bold text-gray-900 mb-2">8-9주차: 특수 슛 마스터</div>
                     <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                       <li>플로터, 미드레인지, 백보드 활용</li>
                       <li>페이더웨이, 포스트업 슛</li>
                     </ul>
                   </div>
                    <div>
                     <div className="font-bold text-gray-900 mb-2">10주차: 3점슛 완성</div>
                     <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                       <li>5개 지점 3점슛, 무브먼트 3점</li>
                       <li>트랜지션 3점슛</li>
                     </ul>
                   </div>
                 </div>
               </div>

               {/* Phase 3 */}
               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                 <div className="bg-secondary text-gray-900 p-6 relative">
                   <div className="absolute top-4 right-4 text-xs font-bold bg-white/40 px-2 py-1 rounded">8 Weeks</div>
                   <h3 className="text-xl font-bold mb-1">Phase 3: 실전 완성</h3>
                   <p className="text-gray-800 text-sm">경기에서 통하는 진짜 슈터가 된다</p>
                 </div>
                 <div className="p-6 space-y-6">
                   <div>
                     <div className="font-bold text-gray-900 mb-2">11-12주차: 게임 시뮬레이션</div>
                     <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                       <li>고강도 훈련 (체력 소모 후 슈팅)</li>
                       <li>압박 상황 및 샷클락 타임 어택</li>
                     </ul>
                   </div>
                   <div>
                     <div className="font-bold text-gray-900 mb-2">13-14주차: 전술적 슈팅</div>
                     <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                       <li>픽앤롤 마스터 (모든 커버리지 대응)</li>
                       <li>오프볼 움직임과 공간 창출</li>
                     </ul>
                   </div>
                   <div>
                     <div className="font-bold text-gray-900 mb-2">15-16주차: 멘탈과 루틴</div>
                     <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                       <li>중요한 순간의 담대함 (멘탈 트레이닝)</li>
                       <li>일관성 있는 슈팅 루틴 정립</li>
                     </ul>
                   </div>
                   <div>
                     <div className="font-bold text-gray-900 mb-2">17-18주차: 최종 완성</div>
                     <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                       <li>종합 게임 및 실전 상황 재현</li>
                       <li>개인별 주특기 슛 완성</li>
                     </ul>
                   </div>
                 </div>
               </div>

             </div>

             {/* Daily Routine & Criteria */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                   <Timer className="text-primary" />
                   표준 훈련 세션 (90분)
                 </h3>
                 <div className="space-y-4">
                   <div className="flex items-center gap-4">
                     <div className="w-16 text-sm font-bold text-gray-500">10분</div>
                     <div className="flex-1 bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
                       <div className="font-bold text-gray-900">준비운동</div>
                       <div className="text-xs text-gray-500">동적 스트레칭, 폼슛</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-16 text-sm font-bold text-gray-500">60분</div>
                     <div className="flex-1 bg-red-50 p-3 rounded-lg border-l-4 border-primary">
                       <div className="font-bold text-primary">메인 훈련</div>
                       <div className="text-xs text-gray-500">해당 주차 핵심 기술 습득 및 반복</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-16 text-sm font-bold text-gray-500">15분</div>
                     <div className="flex-1 bg-yellow-50 p-3 rounded-lg border-l-4 border-secondary">
                       <div className="font-bold text-secondary-dark">실전 적용</div>
                       <div className="text-xs text-gray-500">압박 상황, 게임 시뮬레이션</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-16 text-sm font-bold text-gray-500">5분</div>
                     <div className="flex-1 bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
                       <div className="font-bold text-gray-900">정리운동</div>
                       <div className="text-xs text-gray-500">쿨다운 및 피드백</div>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                   <Award className="text-secondary" />
                   수료 기준 및 성취 수준
                 </h3>
                 <ul className="space-y-4">
                   <li className="flex items-start gap-3">
                     <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                     <div>
                       <strong className="block text-gray-900 text-sm">5개 지점 슈팅 성공률</strong>
                       <span className="text-sm text-gray-600">각 지점 10개씩, 전체 80% 이상 성공</span>
                     </div>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                     <div>
                       <strong className="block text-gray-900 text-sm">상황별 슛 수행력</strong>
                       <span className="text-sm text-gray-600">8가지 실전 상황에서 각각 70% 이상 성공</span>
                     </div>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                     <div>
                       <strong className="block text-gray-900 text-sm">실전 게임 테스트</strong>
                       <span className="text-sm text-gray-600">5분간 실전 게임에서 안정적인 슈팅 밸런스 유지</span>
                     </div>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                     <div>
                       <strong className="block text-gray-900 text-sm">이론 및 멘탈</strong>
                       <span className="text-sm text-gray-600">슈팅 메커니즘 이해 및 상황 판단 능력 검증</span>
                     </div>
                   </li>
                 </ul>
                 <div className="mt-8 bg-gray-50 p-4 rounded-xl text-center">
                   <p className="text-sm text-gray-600 mb-3">모든 과정을 수료하시면 방성윤 코치의 인증서가 발급됩니다.</p>
                   <Button variant="outline" size="sm" className="w-full">수료증 샘플 보기</Button>
                 </div>
               </div>
             </div>

          </div>
        )}

        {/* TAB 5: GLOSSARY */}
        {activeTab === 'glossary' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-8">
               <h2 className="text-3xl font-bold mb-4">농구 & 트레이닝 용어 사전</h2>
               <p className="text-gray-600">현장에서 사용하는 핵심 용어와 개념을 정리했습니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Category 1: Shooting & TDR */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-primary/5 p-6 border-b border-primary/10 flex items-center gap-3">
                  <Target className="text-primary w-6 h-6" />
                  <h3 className="text-xl font-bold text-primary">1. 슈팅 & TDR 메커니즘</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <strong className="text-gray-900 block mb-1">★ TDR 리듬 (TDR Rhythm)</strong>
                    <p className="text-sm text-gray-600">슛의 3단계 흐름. <br/>T(Triple-Threat, 준비) → D(Delivery, 올림) → R(Release, 방출). 목표 시간 0.7초.</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1">★ 세트포인트 (Set Point)</strong>
                    <p className="text-sm text-gray-600">공을 던지기 직전 이마 앞에서 잠깐 멈추는 위치. 이곳에서 흔들림이 없어야 정확도가 보장된다.</p>
                  </div>
                  <div>
                     <strong className="text-gray-900 block mb-1">★ TTR (Time to Release)</strong>
                     <p className="text-sm text-gray-600">캐치부터 릴리스까지 걸리는 시간. 0.7초 이내 권장.</p>
                  </div>
                   <div>
                     <strong className="text-gray-900 block mb-1">캐치 앤 슛 (Catch & Shoot)</strong>
                     <p className="text-sm text-gray-600">패스를 받자마자 쏘는 기술. 합스텝(동시 착지) 또는 1-2 스텝으로 연결.</p>
                  </div>
                  <div>
                     <strong className="text-gray-900 block mb-1">플로터 (Floater)</strong>
                     <p className="text-sm text-gray-600">림 근처에서 높게 띄워 수비 블록을 피해 떨어뜨리는 슛.</p>
                  </div>
                  <div>
                     <strong className="text-gray-900 block mb-1">풀업 (Pull-up)</strong>
                     <p className="text-sm text-gray-600">드리블 중 급정지하여 쏘는 점프슛.</p>
                  </div>
                </div>
              </div>

               {/* Category 2: Tactics */}
               <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-secondary/5 p-6 border-b border-secondary/10 flex items-center gap-3">
                  <Brain className="text-secondary w-6 h-6" />
                  <h3 className="text-xl font-bold text-secondary">2. 전술 & 전략 (Tactics)</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <strong className="text-gray-900 block mb-1">★ PnR (Pick and Roll)</strong>
                    <p className="text-sm text-gray-600">스크린을 건 뒤 골대로 대시(Roll)하는 2대2 전술. 밖으로 빠지면 픽앤팝(Pick & Pop).</p>
                  </div>
                   <div>
                    <strong className="text-gray-900 block mb-1">스태거 (Stagger)</strong>
                    <p className="text-sm text-gray-600">두 명의 스크리너가 차례로 스크린을 걸어 슈터의 오픈 찬스를 만드는 전술.</p>
                  </div>
                   <div>
                    <strong className="text-gray-900 block mb-1">플레어 (Flare)</strong>
                    <p className="text-sm text-gray-600">수비를 뒤로 밀어내는 스크린을 받아 외곽으로 벌리며 쏘는 동작.</p>
                  </div>
                   <div>
                    <strong className="text-gray-900 block mb-1">블리츠 (Blitz)</strong>
                    <p className="text-sm text-gray-600">볼 핸들러에게 두 명의 수비가 강하게 압박(더블팀)하는 수비 전술.</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1">클로즈아웃 (Close-out)</strong>
                    <p className="text-sm text-gray-600">외곽에 있는 슈터에게 수비수가 빠르게 달려나가 슛을 방해하는 동작.</p>
                  </div>
                   <div>
                    <strong className="text-gray-900 block mb-1">드랍 (Drop)</strong>
                    <p className="text-sm text-gray-600">빅맨 수비수가 뒤로 물러나 골밑 돌파를 견제하는 수비법.</p>
                  </div>
                </div>
              </div>

              {/* Category 3: Physical & Training */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 p-6 border-b border-gray-100 flex items-center gap-3">
                  <Dumbbell className="text-gray-700 w-6 h-6" />
                  <h3 className="text-xl font-bold text-gray-800">3. 피지컬 & 트레이닝</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <strong className="text-gray-900 block mb-1">RPE (Rating of Perceived Exertion)</strong>
                    <p className="text-sm text-gray-600">운동 자각도(1~10). 7은 "힘들지만 유지 가능"한 수준. 훈련 강도 설정의 기준.</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1">등척성 (Isometric)</strong>
                    <p className="text-sm text-gray-600">근육 길이가 변하지 않고 힘만 주는 수축 (예: 플랭크, 벽 밀기).</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1">플라이오메트릭 (Plyometrics)</strong>
                    <p className="text-sm text-gray-600">근육의 탄성을 이용한 점프 훈련. 짧은 접지 시간과 폭발적 파워가 핵심.</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1">디셀 (Deceleration)</strong>
                    <p className="text-sm text-gray-600">감속 능력. 빠른 속도에서 정확하게 멈추는 능력은 풀업 점퍼의 필수 조건.</p>
                  </div>
                   <div>
                    <strong className="text-gray-900 block mb-1">RDL (Romanian Deadlift)</strong>
                    <p className="text-sm text-gray-600">햄스트링과 둔근 강화를 위한 필수 운동. 힙 힌지(고관절 접기) 패턴 학습.</p>
                  </div>
                </div>
              </div>

              {/* Category 4: Court & Data */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 p-6 border-b border-gray-100 flex items-center gap-3">
                  <Map className="text-gray-700 w-6 h-6" />
                  <h3 className="text-xl font-bold text-gray-800">4. 코트 지리 & 데이터</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <strong className="text-gray-900 block mb-1">네일 (Nail)</strong>
                    <p className="text-sm text-gray-600">자유투 라인의 정중앙 지점. 미들슛과 수비 헬프의 핵심 위치.</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1">던커 스팟 (Dunker Spot)</strong>
                    <p className="text-sm text-gray-600">백보드 바로 옆, 베이스라인 근처의 공간. 리바운드와 기습 득점의 명당.</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1">엘보 (Elbow)</strong>
                    <p className="text-sm text-gray-600">자유투 라인 양쪽 모서리.</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1">eFG% (Effective Field Goal %)</strong>
                    <p className="text-sm text-gray-600">3점슛 성공을 1.5배로 계산하여 보정한 실질적 야투 성공률.</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1">TS% (True Shooting %)</strong>
                    <p className="text-sm text-gray-600">2점, 3점, 자유투를 모두 포함하여 득점 효율성을 나타내는 지표.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clinic;