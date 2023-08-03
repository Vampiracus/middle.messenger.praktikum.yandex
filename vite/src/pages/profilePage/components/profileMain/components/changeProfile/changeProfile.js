import './changeProfile.css';
import Handlebars from "handlebars";

export default function changeProfile() {
    let template = Handlebars.compile(`
        <div class='changeProfile'>
            1
        </div>
    `)
    return template({
    });
}