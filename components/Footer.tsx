import React from 'react';
import { Instagram, Youtube, MessageCircle, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-primary">BANG'S SHOOTING CLASS</h3>
            <p className="text-gray-400 max-w-sm mb-4">
              대한민국 최고의 슈터 방성윤과 함께하는 과학적인 슈팅 훈련 플랫폼.
              당신의 열정을 결과로 증명해드립니다.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/@user-bangga_shoot" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-red-600 transition-colors"
                aria-label="방성윤 유튜브 채널"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="https://www.instagram.com/bangga_shoot/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition-colors"
                aria-label="방성윤 인스타그램"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://m.blog.naver.com/liibang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="방성윤 네이버 블로그"
              >
                <BookOpen size={24} />
              </a>
              <a 
                href="https://pf.kakao.com/_ijexbT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                aria-label="방성윤 카카오톡 채널"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">바로가기</h4>
            <ul className="space-y-2">
              <li><a href="#/clinic" className="text-gray-400 hover:text-primary transition-colors">슈팅 클리닉</a></li>
              <li><a href="#/forum" className="text-gray-400 hover:text-primary transition-colors">슈터스 포럼</a></li>
              <li><a href="#/mylog" className="text-gray-400 hover:text-primary transition-colors">마이 슈팅 로그</a></li>
              <li><a href="#/coach" className="text-gray-400 hover:text-primary transition-colors">코치 소개</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">문의하기</h4>
            <ul className="space-y-2 text-gray-400">
              <li>고객센터: 카카오톡 채널 문의</li>
              <li>이메일: bangsungyoon@gmail.com</li>
              <li>운영시간: 평일 09:00 - 18:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Bang Sung-yoon Shooting Class. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;