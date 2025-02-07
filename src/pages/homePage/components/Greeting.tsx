const Greeting = () => {
  return (
    <>
      <div className="mx-2 w-auto border-b pb-1">
        <p className="text-sm">인사말</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-2 text-sm">
          <p>계절이 8번 돌아오는 동안</p>
          <p>함께 행복했던 기억이 차곡차곡 쌓였습니다.</p>
          <p>서로에게 든든한 버팀목이 되어</p>
          <p>힘들 때마다 큰 위로가</p>
          <p>되어주리라는 믿음으로</p>
          <p>평생을 약속했습니다.</p>
          <p>저희의 새로운 시작의 날에</p>
          <p>축하와 온기로 함께해 주세요.</p>
        </div>
        <div className="mt-4 flex flex-col items-center text-lg">
          <p>
            김태경 · 장동연의 차남 <span className="font-bold">정모</span>
          </p>
          <p>
            장후철 · 김은경의 장녀 <span className="font-bold">혜린</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Greeting;
