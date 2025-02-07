const HowToCome = () => {
  return (
    <div className="mx-2">
      <div className="mb-4 w-auto border-b pb-1">
        <p className="text-sm">오시는 길</p>
      </div>
      <div className="flex flex-col items-end">
        <p>H스퀘어 (한양대동문회관)</p>
        <p>6층 헤리티지홀</p>
      </div>
      <div className="h-80 w-auto bg-amber-700">지도자리</div>
      <div className="flex flex-col gap-4">
        <div>
          <p className="mb-1 text-lg font-bold">주소</p>
          <p className="text-sm">
            서울시 성동구 행당동 15-1 H스퀘어 6층 헤리티지홀
          </p>
          <p className="text-sm">Tel. 02-2299-9999</p>
        </div>
        <div>
          <p className="mb-1 text-lg font-bold">주차</p>
          <p className="text-sm">
            건물 주차장 또는 병원 주차장 이용 시 90분 무료
          </p>
          <p className="text-sm">* 이후 추가요금 발생</p>
        </div>
        <div>
          <p className="mb-1 text-lg font-bold">지하철</p>
          <p className="text-sm">
            2호선 한양대역 1번 출구 한양대병원 방향 도보 5분
          </p>
          <p className="text-sm">
            2호선 한양대역 1번 출구 한양대병원 방향 도보 5분
          </p>
        </div>
        <div>
          <p className="mb-1 text-lg font-bold">버스</p>
          <p className="text-sm">지선 2012 2013 2014 2220 2222 2411 2016</p>
          <p className="text-sm">간선 263 302 371</p>
        </div>
      </div>
    </div>
  );
};

export default HowToCome;
