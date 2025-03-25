document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.view-button');
    const displayArea = document.getElementById('image-display');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // 清除旧图片
            displayArea.innerHTML = '';
            
            // 创建新图片元素
            const img = document.createElement('img');
            img.src = this.dataset.img;
            img.alt = "星图展示";
            img.className = 'star-image';
            
            // 添加加载动画
            img.onload = () => {
                img.style.opacity = 1;
            };
            
            // 初始状态设置
            img.style.opacity = 0;
            img.style.transition = 'opacity 0.5s ease-in';
            
            // 插入页面
            displayArea.appendChild(img);
        });
    });
});