class Card extends HTMLElement {
    constructor() {
        super();
        console.log(this);

        let image = document.createElement('img');
        image.src = "http://www.itcast.cn/2018czgw/images/logo.png";
        image.classList.add('image');

        let container = document.createElement('div');

        container.appendChild(image);

        //添加到当前的自定义元素
        this.appendChild(container);
    }
}

export default Card;

