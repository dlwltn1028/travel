var mySwiper = new Swiper('.swiper-container', {
// �����̵带 ��ư���� ������ �� �ֽ��ϴ�.
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    
// ���� �������� ��Ÿ���� ���� ����ϴ�. Ŭ���ϸ� �̵��մϴ�.
  pagination: {
    el: '.swiper-pagination',
    clickable : true,
  },


    
// 3�ʸ��� �ڵ����� �����̵尡 �Ѿ�ϴ�. 1�� = 1000
  autoplay: {
    delay: 4000,
  },
});