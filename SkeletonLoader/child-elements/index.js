import Card from './card.vue';
import ListCard from './list-card.vue';
import ContentStyle from './content-style.vue';
import ContentStyle1 from './content-style-1.vue';
import ContentStyle2 from './content-style-2.vue';
import ContentStyle3 from './content-style-3.vue';
import ContentStyle4 from './content-style-4.vue';
import ContentStyle5 from './content-style-5.vue';
import ContentStyle6 from './content-style-6.vue';
import ContentImg from './content-img.vue';
import ContentBox from './content-box.vue';
import Navbar from './navbar.vue';
import Footer from './footer.vue';
import ImgBox from './img-box.vue';
import List from './list.vue';

export default {
    getByType: function (type) {
        switch (type) {
            case 'card':
                return Card;
            case 'list-card':
                return ListCard;
            case 'navbar':
                return Navbar;
            case 'footer':
                return Footer;
            case 'img-box':
                return ImgBox;
            case 'content-box':
                return ContentBox;
            case 'list':
                return List;
            case 'content-style-1':
                return ContentStyle1;
            case 'content-style-2':
                return ContentStyle2;
            case 'content-style-3':
                return ContentStyle3;
            case 'content-style-4':
                return ContentStyle4;
            case 'content-style-5':
                return ContentStyle5;
            case 'content-style-6':
                return ContentStyle6;
            case 'content-img':
                return ContentImg;
            default:
                return ContentStyle;
        }
    },
};
