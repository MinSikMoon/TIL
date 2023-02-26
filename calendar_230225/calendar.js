let monthNames = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

//변수 선언
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let displayCalendar = () => {
  // 이번 달의 마지막 날짜 구하기
  const numDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  // 이번달의 첫째날과 마지막날의 요일 구하기
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const lastDay = new Date(currentYear, currentMonth, numDays).getDay();

  //#calendar의 tbody 태그 선택
  const tableBody = document.querySelector("#calendar tbody");
  tableBody.innerHTML = "";

  //6주(행)을 돌면서 7일을 만든다.
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr"); //row(일주일 행) 하나를 만든다.

    //행안에서 7일을 돈다.
    for (let j = 0; j < 7; j++) {
      let cell = document.createElement("td"); //날짜 element만든다.
      const day = i * 7 + (j + 1) - firstDay; // 날짜를 미리 구해두고 filter 조건들을 통과시킨다.
      let cellText = document.createTextNode("");
      //빈칸 필터 조건 : 첫번째 셀에 0일은 반드시 빈칸
      if (i === 0 && j < firstDay) {
        cell.appendChild(cellText);
      } else if ((i === 5 && j > lastDay) || day > numDays) {
        break;
      } else {
        cellText = document.createTextNode(day);
        cell.appendChild(cellText);
        // 만약 day가 오늘이라면 today라는 class를 붙여준다.
        if (
          day === today.getDate() &&
          currentMonth === today.getMonth() &&
          currentYear === today.getFullYear()
        ) {
          console.log("hihi");
          cell.classList.add("today");
        }
      }
      row.appendChild(cell);
    }

    // 한주를 돌면서 day들을 붙여 줬으니 tableBody에 row를 붙여준다.
    tableBody.appendChild(row);
  }

  //console.log(numDays);
};

displayCalendar();