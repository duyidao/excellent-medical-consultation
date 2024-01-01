import { NavBar, Checkbox, CheckboxGroup, Icon, Field, Button, Form, Divider } from 'vant';

export default (app: any) => {
    app.use(NavBar);
    app.use(Checkbox);
    app.use(CheckboxGroup);
    app.use(Icon);
    app.use(Field);
    app.use(Button);
    app.use(Form);
    app.use(Divider);
}