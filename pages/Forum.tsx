import React from 'react';
import { Search, PenSquare, MessageSquare, Eye, ThumbsUp } from 'lucide-react';
import Button from '../components/Button';
import { ForumPost } from '../types';

const MOCK_POSTS: ForumPost[] = [
  { id: 1, category: '폼 평가', title: '3점슛 릴리즈 타이밍 봐주세요 (영상O)', author: '커리맛카레', likes: 45, comments: 12, date: '10분 전' },
  { id: 2, category: '성장 자랑', title: '클리닉 3주차, 자유투 10개 연속 성공 인증!', author: '슬램덩크', likes: 120, comments: 34, date: '1시간 전' },
  { id: 3, category: '슛 클리닉', title: '하체 밸런스 훈련 루틴 질문있습니다.', author: '농구초보', likes: 8, comments: 3, date: '3시간 전' },
  { id: 4, category: '자유', title: '오늘 야외 코트에서 만난 고수 썰', author: '안선생님', likes: 56, comments: 21, date: '5시간 전' },
  { id: 5, category: '폼 평가', title: '원모션으로 바꾸고 있는데 비거리가 안나와요', author: '슈팅가드', likes: 23, comments: 8, date: '하루 전' },
];

const Forum: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 text-center md:text-left md:flex md:justify-between md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">슈터스 포럼</h1>
            <p className="text-gray-600">혼자 연습하면 빨리 지칩니다. 당신의 성장은 커뮤니티와 함께 완성됩니다.</p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="관심 키워드 검색" 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
            <Button>
              <PenSquare className="w-5 h-5 mr-2" />
              글쓰기
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar / Categories */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">게시판 카테고리</h3>
              <ul className="space-y-2">
                {['전체보기', '슛 클리닉 Q&A', '폼 평가 (영상)', '성장 자랑', '자유 게시판'].map((cat, idx) => (
                  <li key={idx}>
                    <button className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${idx === 0 ? 'bg-purple-50 text-primary font-bold' : 'text-gray-600 hover:bg-gray-50'}`}>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary to-purple-800 rounded-xl shadow-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-2">오늘의 베스트 슈터</h3>
              <p className="text-sm opacity-90 mb-4">이번 주 가장 많은 성장을 기록한 회원은?</p>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold">1</div>
                <div>
                  <div className="font-bold">불꽃남자</div>
                  <div className="text-xs opacity-80">성공률 +15% 증가</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-4">
            {MOCK_POSTS.map((post) => (
              <div key={post.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    post.category === '폼 평가' ? 'bg-purple-100 text-purple-700' :
                    post.category === '성장 자랑' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-700">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><ThumbsUp className="w-4 h-4" /> {post.likes}</span>
                    <span className="flex items-center gap-1"><MessageSquare className="w-4 h-4" /> {post.comments}</span>
                    <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> 1.2k</span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="mt-8 text-center">
              <button className="text-primary font-bold hover:underline">더 많은 게시글 보기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;