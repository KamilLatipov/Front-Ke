import './main.css';
import './fonts.css';
import './blocks/faq/dropdown';

function importAll(r) {
    r.keys().forEach(r);
}

importAll(require.context('./blocks', true, /\.css$/));