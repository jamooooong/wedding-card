const Calendar = () => {
  return (
    <div className="mx-2">
      <div className="mb-4 w-auto border-b pb-1">
        <p className="text-sm">예식 일시</p>
      </div>
      <div className="flex flex-col items-end">
        <p>2025년 9월 13일</p>
        <p>토요일 낮 12시 반</p>
      </div>
      <div className="mt-4 px-10 text-sm">
        <div className="flex flex-row justify-between text-center">
          <p className="h-8 w-8">일</p>
          <p className="h-8 w-8">월</p>
          <p className="h-8 w-8">화</p>
          <p className="h-8 w-8">수</p>
          <p className="h-8 w-8">목</p>
          <p className="h-8 w-8">금</p>
          <p className="h-8 w-8">토</p>
        </div>
        <div className="flex flex-row justify-between text-center">
          <p className="h-8 w-8"> </p>
          <p className="h-8 w-8">1</p>
          <p className="h-8 w-8">2</p>
          <p className="h-8 w-8">3</p>
          <p className="h-8 w-8">4</p>
          <p className="h-8 w-8">5</p>
          <p className="h-8 w-8">6</p>
        </div>
        <div className="flex flex-row justify-between text-center">
          <p className="h-8 w-8">7</p>
          <p className="h-8 w-8">8</p>
          <p className="h-8 w-8">9</p>
          <p className="h-8 w-8">10</p>
          <p className="h-8 w-8">11</p>
          <p className="h-8 w-8">12</p>
          <p className="h-8 w-8 rounded-full bg-green-800 text-white">13</p>
        </div>
        <div className="flex flex-row justify-between text-center">
          <p className="h-8 w-8">14</p>
          <p className="h-8 w-8">15</p>
          <p className="h-8 w-8">16</p>
          <p className="h-8 w-8">17</p>
          <p className="h-8 w-8">18</p>
          <p className="h-8 w-8">19</p>
          <p className="h-8 w-8">20</p>
        </div>
        <div className="flex flex-row justify-between text-center">
          <p className="h-8 w-8">21</p>
          <p className="h-8 w-8">22</p>
          <p className="h-8 w-8">23</p>
          <p className="h-8 w-8">24</p>
          <p className="h-8 w-8">25</p>
          <p className="h-8 w-8">26</p>
          <p className="h-8 w-8">27</p>
        </div>
        <div className="flex flex-row justify-between text-center">
          <p className="h-8 w-8">28</p>
          <p className="h-8 w-8">29</p>
          <p className="h-8 w-8">30</p>
          <p className="h-8 w-8"> </p>
          <p className="h-8 w-8"> </p>
          <p className="h-8 w-8"> </p>
          <p className="h-8 w-8"> </p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
