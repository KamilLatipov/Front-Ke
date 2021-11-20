import './main.css';
import './fonts.css';

function importAll(r) {
    r.keys().forEach(r);
}

importAll(require.context('./blocks', true, /\.css$/));