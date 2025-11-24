import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Calendar, Activity, Target, ClipboardCheck, Clock } from 'lucide-react';
import Button from '../components/Button';
import { ChartDataPoint } from '../types';

const PROGRESS_DATA: ChartDataPoint[] = [
  { name: '1주차', value: 42 },
  { name: '2주차', value: 48 },
  { name: '3주차', value: 45 },
  { name: '4주차', value: 55 },
  { name: '5주차', value: 62 },
  { name: '6주차', value: 68 },
];

const POSITION_DATA: ChartDataPoint[] = [
  { name: '골밑', value: 85, fullMark: 100 },
  { name: '자유투', value: 72, fullMark: 100 },
  { name: '미들(45도)', value: 45, fullMark: 100 },
  { name: '3점(탑)', value: 32, fullMark: 100 },
  { name: '3점(코너)', value: 28, fullMark: 100 },
];

const MyLog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Shooting Log</h1>
          <p className="text-gray-600">감(Feel)에 의존하지 마세요. 모든 슈팅은 숫자로 말합니다.</p>
        </div>

        {/* User Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary flex items-center">
            <div className="p-3 bg-purple-50 rounded-full mr-4">
              <Target className="text-primary w-8 h-8" />
            </div>
            <div>
              <div className="text-sm text-gray-500">이번 주 총 슈팅</div>
              <div className="text-2xl font-bold text-gray-900">1,240개</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-secondary flex items-center">
             <div className="p-3 bg-yellow-50 rounded-full mr-4">
              <Activity className="text-secondary w-8 h-8" />
            </div>
            <div>
              <div className="text-sm text-gray-500">평균 성공률</div>
              <div className="text-2xl font-bold text-gray-900">58.2% <span className="text-sm text-green-500 ml-2">▲ 4.2%</span></div>
            </div>
          </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-gray-500 flex items-center">
             <div className="p-3 bg-gray-100 rounded-full mr-4">
              <Calendar className="text-gray-600 w-8 h-8" />
            </div>
            <div>
              <div className="text-sm text-gray-500">연속 연습일</div>
              <div className="text-2xl font-bold text-gray-900">12일째</div>
            </div>
          </div>
        </div>

        {/* Daily Routine Section (New from Textbook) */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">40분 데일리 추천 루틴</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">시간</th>
                  <th className="px-6 py-3">훈련 내용</th>
                  <th className="px-6 py-3">목표</th>
                  <th className="px-6 py-3">볼륨 (개수)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">0~5분</td>
                  <td className="px-6 py-4">워밍업 폼슛</td>
                  <td className="px-6 py-4">손끝 감각 깨우기</td>
                  <td className="px-6 py-4">30개</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">5~15분</td>
                  <td className="px-6 py-4">폼 슈팅 (No Jump)</td>
                  <td className="px-6 py-4">자세와 궤적 점검</td>
                  <td className="px-6 py-4">50개</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">15~25분</td>
                  <td className="px-6 py-4">TDR 리듬 슈팅</td>
                  <td className="px-6 py-4">일정한 리듬 (꾹-탁-슛)</td>
                  <td className="px-6 py-4">50개</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">25~35분</td>
                  <td className="px-6 py-4">캐치 앤 슛 (합/1-2)</td>
                  <td className="px-6 py-4">실전 타이밍 (0.8초)</td>
                  <td className="px-6 py-4">50개</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">35~40분</td>
                  <td className="px-6 py-4">자유 슈팅</td>
                  <td className="px-6 py-4">흐름 속 정확도 유지</td>
                  <td className="px-6 py-4">30개</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Charts */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-2 h-6 bg-primary rounded mr-2"></span>
              주간 성공률 변화 (Overall)
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={PROGRESS_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8B5CF6" 
                    strokeWidth={3} 
                    dot={{ r: 6, fill: '#8B5CF6', strokeWidth: 2, stroke: '#fff' }} 
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Self Checklist (New from Textbook) */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <ClipboardCheck className="w-6 h-6 text-secondary mr-2" />
              오늘의 슈팅 체크리스트
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <input type="checkbox" className="mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300 rounded" />
                <div>
                  <div className="font-bold text-gray-800">세트포인트 정지 (0.5초)</div>
                  <div className="text-sm text-gray-500">이마 앞에서 공이 확실히 멈췄다가 나가는가?</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <input type="checkbox" className="mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300 rounded" />
                <div>
                  <div className="font-bold text-gray-800">TDR 리듬 유지</div>
                  <div className="text-sm text-gray-500">"꾹(하체) - 탁(세트) - 슛(릴리스)" 박자가 일정한가?</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <input type="checkbox" className="mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300 rounded" />
                <div>
                  <div className="font-bold text-gray-800">밸런스 유지</div>
                  <div className="text-sm text-gray-500">슛 후 2초간 수직 자세를 유지했는가?</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <input type="checkbox" className="mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300 rounded" />
                <div>
                  <div className="font-bold text-gray-800">팔로우스루 (Goose Neck)</div>
                  <div className="text-sm text-gray-500">손목이 림을 향해 굽어있는 상태를 유지했는가?</div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-center">
              <Button variant="outline" size="sm" className="w-full">오늘의 기록 저장하기</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyLog;