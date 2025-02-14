document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    // 自动轮播间隔时间（毫秒）
    const autoPlayInterval = 3000;
    
    // 切换到指定幻灯片
    function goToSlide(index) {
        currentSlide = index;
        carouselContainer.style.transform = `translateX(-${index * 33.333}%)`;
        
        // 更新圆点状态
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    // 下一张幻灯片
    function nextSlide() {
        currentSlide = (currentSlide + 1) % 3;
        goToSlide(currentSlide);
    }
    
    // 为圆点添加点击事件
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // 自动播放
    setInterval(nextSlide, autoPlayInterval);
    
    // 触摸事件处理
    let touchStartX = 0;
    let touchEndX = 0;
    
    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });
    
    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) { // 最小滑动距离
            if (diff > 0) { // 向左滑
                currentSlide = (currentSlide + 1) % 3;
            } else { // 向右滑
                currentSlide = (currentSlide - 1 + 3) % 3;
            }
            goToSlide(currentSlide);
        }
    });
}); 