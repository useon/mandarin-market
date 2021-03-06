const form = document.querySelector('.form_comment')
const btnSend = form.querySelector('.btn_comment');

// 모달창: 나가기
function modalSet() {
  const btnMenu = document.querySelector('.btn_menu');
  const modalOut = document.querySelector('.modal_out');
  const btnClose = document.querySelectorAll('.btn_close');

  btnMenu.addEventListener('click', () => {
    modalOut.classList.toggle('on');
  })
  btnClose[0].addEventListener('click', () => {
    modalOut.classList.toggle('on');
  })
}
modalSet()

// 버튼 활성화
function send() {
  const textarea = form.querySelector('.inp_comment');
  
  textarea.addEventListener('keyup', () => {
    if (textarea.value != '') {
      btnSend.removeAttribute('disabled');
      btnSend.style.color = '#F26E22';
    } else if (textarea.value == '') {
      btnSend.setAttribute('disabled', 'disabled')
      btnSend.style.color = '#C4C4C4';
    }
  })
}
send();

