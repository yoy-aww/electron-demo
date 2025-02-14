<template>
    <div class="carousel">
        <div 
            class="carousel-container"
            :style="{ transform: `translateX(-${currentSlide * 33.333}%)` }"
        >
            <div 
                class="carousel-slide" 
                v-for="(slide, index) in slides" 
                :key="index"
            >
                <img
                    :src="slide.image"
                    :alt="slide.alt"
                >
            </div>
        </div>
        <div class="carousel-dots">
            <span
                v-for="(_, index) in slides"
                :key="index"
                class="dot"
                :class="{ active: currentSlide === index }"
                @click="goToSlide(index)"
            ></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarouselComponent',
    data() {
        return {
            currentSlide: 0,
            slides: [
                { image: '../assets/banner/banner1.jpg', alt: 'Banner 1' },
                { image: '../assets/banner/banner2.jpg', alt: 'Banner 2' },
                { image: '../assets/banner/banner3.jpg', alt: 'Banner 3' }
            ],
            touchStartX: 0,
            autoPlayInterval: null
        }
    },
    methods: {
        goToSlide(index) {
            this.currentSlide = index;
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        },
        handleTouchStart(e) {
            this.touchStartX = e.touches[0].clientX;
        },
        handleTouchEnd(e) {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = this.touchStartX - touchEndX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
                } else {
                    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
                }
            }
        }
    },
    mounted() {
        // 自动播放
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 3000);

        // 添加触摸事件监听
        const container = this.$el.querySelector('.carousel-container');
        container.addEventListener('touchstart', this.handleTouchStart);
        container.addEventListener('touchend', this.handleTouchEnd);
    },
    beforeUnmount() {
        // 清理定时器和事件监听
        clearInterval(this.autoPlayInterval);
        const container = this.$el.querySelector('.carousel-container');
        container.removeEventListener('touchstart', this.handleTouchStart);
        container.removeEventListener('touchend', this.handleTouchEnd);
    }
}
</script> 