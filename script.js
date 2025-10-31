// "가입하기" 버튼 클릭 시 동작
document.getElementById("joinBtn").addEventListener("click", () => {
  alert("가입 페이지로 이동합니다!");
  window.location.href = "#join";
});

// "가입 신청" 버튼 클릭 시 동작
document.getElementById("applyBtn").addEventListener("click", () => {
  const name = prompt("이름을 입력해주세요:");
  if (name) {
    alert(`${name}님, 가입 신청이 완료되었습니다! 환영합니다 🎉`);
  }
});