import React, { useEffect, useRef, useState } from 'react';
import WordCloud from 'wordcloud';

const WordCloudComponent = ({ words }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Google Fonts에서 Noto Sans KR 로드
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    WordCloud(canvasRef.current, {
      list: words,
      gridSize: 7,
      weightFactor: 1.2,
      fontWeight : "600",
      fontFamily: 'Noto Sans KR, sans-serif',
      color: (word, weight) => {
        // `word`는 문자열로 전달되며, `list`의 첫 번째 요소로만 참조됩니다.
        const wordData = words.find(w => w[0] === word);
        return wordData && wordData[2] === '긍정' ? '#df513e' : '#0a7cee';
      },
      rotateRatio: 0,
      rotationSteps: 1,
      backgroundColor: '#ffffff',
    });
  }, []);

  return (
    <div>
      <canvas className='my-5'
        ref={canvasRef}
        width={800}
        height={250}
      />
    </div>
  );
};

export default WordCloudComponent;